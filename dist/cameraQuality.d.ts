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
export declare function resolveRelayProfile(config?: RelayQualityConfig): RelayProfile;
