export interface HomeKitH264Request {
    profile: number;
    level: number;
}
/**
 * Input arguments for a live stream that preserves the printer's H.264 NAL
 * units. The caller deliberately supplies no filters or decoder options.
 */
export declare function buildPacketCopyInputArgs(streamUrl: string): string[];
export declare function buildPacketCopyVideoArgs(): string[];
/**
 * HomeKit's camera protocol supports H.264; no source-profile conversion is
 * needed for packet-copy transport. Actual compatibility remains negotiated
 * by the receiving HomeKit controller.
 */
export declare function isPacketCopyCompatible(request: HomeKitH264Request): boolean;
