export interface RelayQualityConfig {
  cameraRelayBitrateKbps?: number;
  cameraRelayFps?: number;
}

export interface RelayProfile {
  bitrateKbps: number;
  fps: number;
  gop: number;
  height: number;
  width: number;
}

const DEFAULT_BITRATE_KBPS = 6000;
const DEFAULT_FPS = 24;
const MAX_BITRATE_KBPS = 12000;
const MIN_BITRATE_KBPS = 1000;
const MAX_FPS = 30;
const MIN_FPS = 10;

function normalize(value: unknown, fallback: number, minimum: number, maximum: number): number {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    return fallback;
  }

  return Math.max(minimum, Math.min(maximum, Math.round(value)));
}

export function resolveRelayProfile(config: RelayQualityConfig = {}): RelayProfile {
  const fps = normalize(config.cameraRelayFps, DEFAULT_FPS, MIN_FPS, MAX_FPS);

  return {
    bitrateKbps: normalize(config.cameraRelayBitrateKbps, DEFAULT_BITRATE_KBPS, MIN_BITRATE_KBPS, MAX_BITRATE_KBPS),
    fps,
    gop: fps * 2,
    height: 1080,
    width: 1920,
  };
}
