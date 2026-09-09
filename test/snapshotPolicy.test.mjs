import assert from 'node:assert/strict';
import test from 'node:test';

import { shouldReuseCachedSnapshot } from '../dist/snapshotPolicy.js';

test('keeps the cached snapshot while a direct live stream owns the camera', () => {
  assert.equal(shouldReuseCachedSnapshot({
    hasCachedSnapshot: true,
    cacheAgeMs: 120_000,
    hasActiveLiveSession: true,
  }), true);
});

test('refreshes an old snapshot when no live stream is active', () => {
  assert.equal(shouldReuseCachedSnapshot({
    hasCachedSnapshot: true,
    cacheAgeMs: 120_000,
    hasActiveLiveSession: false,
  }), false);
});

test('does not claim a cache exists when it does not', () => {
  assert.equal(shouldReuseCachedSnapshot({
    hasCachedSnapshot: false,
    cacheAgeMs: 0,
    hasActiveLiveSession: true,
  }), false);
});
