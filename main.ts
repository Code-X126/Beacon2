/**
 * Custom BLE Continuous Beacon Blocks
 */
//% color="#0fbc11" icon="\uf09e" block="BLE Beacon"
namespace bleBeacon {

    export enum TxPowerLevel {
        //% block="-20 dBm (Short Range / Low Power)"
        Lowest = -20,
        //% block="-12 dBm"
        Low = -12,
        //% block="0 dBm (Standard)"
        Medium = 0,
        //% block="+4 dBm (Max Range)"
        High = 4
    }

    /**
     * Start broadcasting continuous BLE Beacon for RSSI tracking
     * @param intervalMs Advertising interval in milliseconds (e.g. 10ms for fast RSSI), eg: 10
     * @param power Transmit power level, eg: TxPowerLevel.Lowest
     * @param name Device Broadcast Name, eg: "RSSI-Node"
     */
    //% block="start fast RSSI beacon | name %name | interval (ms) %intervalMs | power %power"
    //% intervalMs.defl=10
    //% shim=bleBeacon::startContinuousBeacon
    export function startBeacon(name: string, intervalMs: number, power: TxPowerLevel): void {
        console.log("Fast BLE Beacon started: " + name);
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
