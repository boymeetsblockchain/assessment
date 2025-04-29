import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { Readable } from 'stream';

@Injectable()
export class UploadService {
  constructor() {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }

  private sanitizePublicId(filename: string): string {
    const withoutExtension = filename.replace(/\.[^/.]+$/, '');
    return withoutExtension.replace(/[^\w]/g, '_');
  }

  async uploadToCloudinary(
    fileBuffer: Buffer,
    folderPath: string,
    options: {
      filename?: string;
      contentType?: string;
    } = {},
  ): Promise<{ url: string; public_id: string }> {
    return new Promise((resolve, reject) => {
      const publicId = options.filename
        ? this.sanitizePublicId(options.filename)
        : undefined;

      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: folderPath,
          resource_type: 'auto',
          publicId,
        },
        (error, result) => {
          if (error || !result) {
            return reject(error || new Error('Upload failed'));
          }

          resolve({
            url: result.secure_url,
            public_id: result.public_id,
          });
        },
      );

      const readableStream = new Readable();
      readableStream.push(fileBuffer);
      readableStream.push(null);
      readableStream.pipe(uploadStream);
    });
  }
}
