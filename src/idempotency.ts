export class IdempotencyStore {
  private seen = new Map<string, number>();
  constructor(private readonly ttlMs = 86_400_000) {}
  claim(eventId: string, now = Date.now()): boolean {
    if (this.seen.has(eventId)) return false;
    this.seen.set(eventId, now + this.ttlMs);
    return true;
  }
}
