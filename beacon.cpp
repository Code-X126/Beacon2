#include "pxt.h"
#include "MicroBit.h"

namespace bleBeacon {

    // % shim=bleBeacon::startContinuousBeacon
    void startContinuousBeacon(int intervalMs, int txPower, StringData* payload) {
        #if MICROBIT_CODAL
        uBit.bleManager.init();
        uBit.bleManager.setTransmitPower(txPower);

        gap_adv_params_t adv_params;
        adv_params.type = GAP_ADV_TYPE_ADV_NONCONN_IND; 

        // Convert milliseconds to Bluetooth advertising units (0.625ms per unit)
        // Ensure interval doesn't drop below the BLE spec minimum of 20ms for some stacks, 
        // though 10ms (value: 16) works on nRF52 under non-connectable undirected mode.
        int adv_units = (intervalMs * 8) / 5;
        if (adv_units < 16) adv_units = 16; // Minimum floor safeguard

        adv_params.interval_min = adv_units;
        adv_params.interval_max = adv_units;

        if (payload && payload->len > 0) {
            uBit.bleManager.setAdvertisingData((uint8_t*)payload->data, payload->len);
        }

        uBit.bleManager.startAdvertising();
        #endif
    }

    // % shim=bleBeacon::stopBeacon
    void stopBeacon() {
        #if MICROBIT_CODAL
        uBit.bleManager.stopAdvertising();
        #endif
    }
}
