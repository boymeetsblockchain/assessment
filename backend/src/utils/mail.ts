import * as fs from 'fs';
import * as path from 'path';
import * as nodemailer from 'nodemailer';

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

export enum MailTemplate {
  emailVerify = 'Email Verify Requested',
  passwordReset = 'Password Reset Requested',
}

const templates = {
  [MailTemplate.emailVerify]: 'email-verify.html',
  [MailTemplate.passwordReset]: 'password-reset.html',
};

export class Mail {
  async sendTemplate<IArgs>(
    template: MailTemplate,
    subject: string,
    user: { name?: string; email: string },
    args?: IArgs,
  ) {
    let argsData = args ? args : {};

    // Retrieve Markup
    console.log(__dirname);
    let templateMarkup: string = fs.readFileSync(
      path.join(__dirname, `../../src/templates/${templates[template]}`),
      'utf8',
    );

    // Replace markup keys
    Object.entries({
      ...user,
      ...(argsData as Record<string, any>),
    }).forEach(([key, value]) => {
      const regex = new RegExp(`{{${key}}}`, 'g');
      templateMarkup = templateMarkup.replace(regex, value);
    });

    const mailOptions = {
      from: EMAIL_USER,
      to: user.email,
      subject,
      html: templateMarkup,
    };

    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: EMAIL_USER,
          pass: EMAIL_PASSWORD,
        },
      });
      await transporter.sendMail(mailOptions);
    } catch (err) {
      console.log(err);
      throw new Error('Failed to send email');
    }
  }
}
