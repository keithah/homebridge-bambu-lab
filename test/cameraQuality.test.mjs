import assert from 'node:assert/strict';
import test from 'node:test';

import { resolveRelayProfile } from '../dist/cameraQuality.js';

test('uses a 1080p relay profile instead of the legacy 15 fps 1500 kbps profile', () => {
  assert.deepEqual(resolveRelayProfile(), {
    bitrateKbps: 6000,
    fps: 24,
    gop: 48,
    height: 1080,
    width: 1920,
  });
});

test('accepts explicit relay quality overrides within HomeKit-safe bounds', () => {
  assert.deepEqual(resolveRelayProfile({
    cameraRelayBitrateKbps: 8000,
    cameraRelayFps: 24,
  }), {
    bitrateKbps: 8000,
    fps: 24,
    gop: 48,
    height: 1080,
    width: 1920,
  });
});
