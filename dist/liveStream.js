/**
 * Input arguments for a live stream that preserves the printer's H.264 NAL
 * units. The caller deliberately supplies no filters or decoder options.
 */
export function buildPacketCopyInputArgs(streamUrl) {
    return [
        '-rtsp_transport', 'tcp',
        '-i', streamUrl,
    ];
}
export function buildPacketCopyVideoArgs() {
    return ['-codec:v', 'copy'];
}
/**
 * HomeKit's camera protocol supports H.264; no source-profile conversion is
 * needed for packet-copy transport. Actual compatibility remains negotiated
 * by the receiving HomeKit controller.
 */
export function isPacketCopyCompatible(request) {
    return Number.isInteger(request.profile) && Number.isInteger(request.level)
        && request.profile >= 0 && request.level >= 0;
}
//# sourceMappingURL=liveStream.js.map