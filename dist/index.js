import { BambuPlatform } from './platform.js';
import { PLATFORM_NAME, PLUGIN_NAME } from './settings.js';
/**
 * This method registers the platform with Homebridge
 */
export default (api) => {
    api.registerPlatform(PLUGIN_NAME, PLATFORM_NAME, BambuPlatform);
};
//# sourceMappingURL=index.js.map