import assert from 'node:assert/strict';
import test from 'node:test';

import { buildPacketCopyInputArgs, buildPacketCopyVideoArgs, isPacketCopyCompatible } from '../dist/liveStream.js';

test('builds a direct RTSPS input for packet-copy live streaming', () => {
  assert.deepEqual(buildPacketCopyInputArgs('rtsps://camera.example/streaming/live/1'), [
    '-rtsp_transport', 'tcp',
    '-i', 'rtsps://camera.example/streaming/live/1',
  ]);
});

test('accepts a HomeKit H.264 request without requiring a re-encode', () => {
  assert.equal(isPacketCopyCompatible({ profile: 2, level: 2 }), true);
});

test('packet copy does not permit a video filter or encoder settings', () => {
  const args = [...buildPacketCopyInputArgs('rtsps://camera.example/live'), ...buildPacketCopyVideoArgs()];
  assert.deepEqual(buildPacketCopyVideoArgs(), ['-codec:v', 'copy']);
  assert.equal(args.includes('-vf'), false);
  assert.equal(args.includes('-preset'), false);
  assert.equal(args.includes('-b:v'), false);
});
