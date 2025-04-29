import {
  BadRequestException,
  Controller,
  Post,
  Request,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import * as multer from 'multer';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('photo')
  @UseInterceptors(FilesInterceptor('file'))
  async uploadFiles(@Request() req, @UploadedFiles() files: multer.File[]) {
    if (!files || files.length === 0) {
      throw new BadRequestException('No files uploaded.');
    }

    const uploadResults: any[] = [];
    let folderPath = 'backend/'; // Default root folder
    if (req.body.path) {
      folderPath = req.body.path;
    }

    for (const file of files) {
      const result: any = await this.uploadService.uploadToCloudinary(
        file.buffer,
        folderPath,
        {
          filename: file.originalname,
          contentType: file.mimetype,
        },
      );
      uploadResults.push(result.url);
    }

    return uploadResults;
  }
}
