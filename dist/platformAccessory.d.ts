import type { PlatformAccessory } from 'homebridge';
import type { BambuPlatform, PrinterState } from './platform.js';
export type AccessoryKind = 'light' | 'printControl' | 'speedControl' | 'camera';
export declare class BambuPrinterAccessory {
    private readonly platform;
    private readonly accessory;
    private service;
    private readonly context;
    constructor(platform: BambuPlatform, accessory: PlatformAccessory);
    syncState(state: PrinterState): void;
    getPrinterId(): string;
    private setLightOn;
    private getLightOn;
    private setPrintActive;
    private getPrintActive;
    private setSpeedOn;
    private getSpeedOn;
    private setSpeedPercent;
    private getSpeedPercent;
}
