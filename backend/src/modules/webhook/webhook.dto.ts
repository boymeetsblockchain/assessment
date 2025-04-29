export class CreateWebhookDto {
  url: string;
  description: string;
}

export class UpdateWebhookDto {
  url?: string;
  description?: string;
  isActive?: boolean;
}
