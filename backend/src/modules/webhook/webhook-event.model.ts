export enum WebhookEventType {
  USER_LOGIN = 'user.login',
  USER_REGISTER = 'user.register',
  PASSWORD_RESET = 'user.password_reset',
}

export interface WebhookPayload {
  event: WebhookEventType;
  timestamp: string;
  data: any;
}
