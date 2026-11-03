/**
 * Custom BLE Continuous Beacon Blocks
 */
//% color="#0fbc11" icon="\uf09e" block="BLE Beacon"
namespace bleBeacon {

    export enum TxPowerLevel {
        //% block="-20 dBm (Lowest Power)"
        Lowest = -20,
        //% block="-12 dBm"
        Low = -12,
        //% block="0 dBm (Standard)"
        Medium = 0,
        //% block="+4 dBm (Max Range)"
        High = 4
    }

    /**
     * Start broadcasting continuous BLE Beacon
     * @param intervalMs Advertising interval in milliseconds (e.g. 1000ms), eg: 1000
     * @param power Transmit power level, eg: TxPowerLevel.Lowest
     * @param name Device Broadcast Name, eg: "uBitBeacon"
     */
    //% block="start continuous beacon | name %name | interval (ms) %intervalMs | power %power"
    //% intervalMs.defl=1000
    //% shim=bleBeacon::startContinuousBeacon
    export function startBeacon(name: string, intervalMs: number, power: TxPowerLevel): void {
        // Fallback for simulator or native binding
        console.log("BLE Beacon started: " + name);
    }

    /**
     * Stop broadcasting the BLE beacon
     */
    //% block="stop beacon"
    //% shim=bleBeacon::stopBeacon
    export function stopBeacon(): void {
        console.log("BLE Beacon stopped");
    }
}
