export function shouldReuseCachedSnapshot(state, maxAgeMs = 60_000) {
    if (!state.hasCachedSnapshot) {
        return false;
    }
    return state.hasActiveLiveSession || state.cacheAgeMs < maxAgeMs;
}
//# sourceMappingURL=snapshotPolicy.js.map