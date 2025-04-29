import { Injectable, Logger } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';

import axios from 'axios';
import { CreateWebhookDto, UpdateWebhookDto } from './webhook.dto';
import { WebhookEventType, WebhookPayload } from './webhook-event.model';

@Injectable()
export class WebhookService {
  private readonly logger = new Logger(WebhookService.name);
  private readonly MAX_RETRIES = 3;
  private readonly RETRY_DELAY_MS = 5000; // 5 seconds
  private prisma = new PrismaClient();

  async create(createWebhookDto: CreateWebhookDto) {
    return this.prisma.webhook.create({
      data: createWebhookDto,
    });
  }

  async findAll() {
    return this.prisma.webhook.findMany({
      where: { isActive: true },
    });
  }

  async findOne(id: string) {
    return this.prisma.webhook.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateWebhookDto: UpdateWebhookDto) {
    return this.prisma.webhook.update({
      where: { id },
      data: updateWebhookDto,
    });
  }

  async remove(id: string) {
    return this.prisma.webhook.delete({
      where: { id },
    });
  }

  async notifyUserLogin(
    userId: string,
    email: string,
    ip?: string,
    userAgent?: string,
  ): Promise<void> {
    const payload: WebhookPayload = {
      event: WebhookEventType.USER_LOGIN,
      timestamp: new Date().toISOString(),
      data: {
        userId,
        email,
        ip: ip || 'unknown',
        userAgent: userAgent || 'unknown',
        loginTime: new Date().toISOString(),
      },
    };

    await this.sendWebhookEvents(payload);
  }

  private async sendWebhookEvents(payload: WebhookPayload): Promise<void> {
    const activeWebhooks = await this.findAll();

    for (const webhook of activeWebhooks) {
      this.sendWebhookWithRetry(webhook, payload, 0);
    }
  }

  private async sendWebhookWithRetry(
    webhook: any,
    payload: WebhookPayload,
    retryCount: number,
  ): Promise<void> {
    try {
      const response = await axios.post(webhook.url, payload, {
        headers: {
          'Content-Type': 'application/json',
          'X-Webhook-Event': payload.event,
          'X-Webhook-Signature': this.generateSignature(webhook.id, payload),
        },
        timeout: 10000, // 10 seconds timeout
      });

      if (response.status >= 200 && response.status < 300) {
        // Success
        await this.prisma.webhook.update({
          where: { id: webhook.id },
          data: {
            lastSuccessfulDelivery: new Date(),
            failureCount: 0,
            lastFailureReason: null,
          },
        });
        this.logger.log(
          `Webhook ${webhook.id} delivered successfully to ${webhook.url}`,
        );
      } else {
        throw new Error(`Received status code ${response.status}`);
      }
    } catch (error) {
      this.logger.error(
        `Failed to deliver webhook ${webhook.id} to ${webhook.url}: ${error.message}`,
      );

      if (retryCount < this.MAX_RETRIES) {
        this.logger.log(
          `Retrying webhook ${webhook.id} in ${this.RETRY_DELAY_MS}ms (attempt ${retryCount + 1}/${this.MAX_RETRIES})`,
        );
        setTimeout(() => {
          this.sendWebhookWithRetry(webhook, payload, retryCount + 1);
        }, this.RETRY_DELAY_MS);
      } else {
        // Update webhook with failure info
        const updatedFailureCount = webhook.failureCount + 1;

        await this.prisma.webhook.update({
          where: { id: webhook.id },
          data: {
            failureCount: updatedFailureCount,
            lastFailureReason: error.message,
            // Disable webhook if it's consistently failing
            isActive: updatedFailureCount >= 10 ? false : webhook.isActive,
          },
        });

        if (updatedFailureCount >= 10) {
          this.logger.warn(
            `Disabling webhook ${webhook.id} due to excessive failures`,
          );
        }
      }
    }
  }

  // Generate a signature to validate webhook authenticity
  private generateSignature(webhookId: string, payload: any): string {
    const crypto = require('crypto');
    const secret = process.env.WEBHOOK_SECRET || 'your-webhook-secret';
    const data = `${webhookId}.${JSON.stringify(payload)}`;
    return crypto.createHmac('sha256', secret).update(data).digest('hex');
  }
}
