export interface SnapshotCacheState {
    hasCachedSnapshot: boolean;
    cacheAgeMs: number;
    hasActiveLiveSession: boolean;
}
export declare function shouldReuseCachedSnapshot(state: SnapshotCacheState, maxAgeMs?: number): boolean;
