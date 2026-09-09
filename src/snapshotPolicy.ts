export interface SnapshotCacheState {
  hasCachedSnapshot: boolean;
  cacheAgeMs: number;
  hasActiveLiveSession: boolean;
}

export function shouldReuseCachedSnapshot(state: SnapshotCacheState, maxAgeMs = 60_000): boolean {
  if (!state.hasCachedSnapshot) {
    return false;
  }

  return state.hasActiveLiveSession || state.cacheAgeMs < maxAgeMs;
}
