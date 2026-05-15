export interface WebhookEvent {
  id: string;
  source: string;
  eventType: string;
  payload: Record<string, unknown>;
  receivedAt: string;
}
