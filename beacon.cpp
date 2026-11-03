#include "pxt.h"
#include "MicroBit.h"

namespace bleBeacon {

    // Helper function to send custom BLE advertising payload
    // % shim=bleBeacon::startContinuousBeacon
    void startContinuousBeacon(int intervalMs, int txPower, StringData* payload) {
        #if MICROBIT_CODAL
        // Initialize BLE stack if not already started
        uBit.bleManager.init();

        // Set transmit power (-20dBm to +4dBm for ultra-low power)
        uBit.bleManager.setTransmitPower(txPower);

        // Configure Advertising parameters
        // Non-connectable, undirected advertising for low energy
        gap_adv_params_t adv_params;
        adv_params.type = GAP_ADV_TYPE_ADV_NONCONN_IND; 
        adv_params.interval_min = (intervalMs * 8) / 5; // Configured in units of 0.625ms
        adv_params.interval_max = adv_params.interval_min;

        // Load custom payload data
        if (payload && payload->len > 0) {
            uBit.bleManager.setAdvertisingData((uint8_t*)payload->data, payload->len);
        }

        // Start continuous broadcasting
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
