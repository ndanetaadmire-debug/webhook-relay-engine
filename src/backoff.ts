export function computeBackoffMs(attempt: number, baseMs = 500, maxMs = 60_000): number {
  return Math.min(maxMs, baseMs * 2 ** Math.max(0, attempt - 1));
}
