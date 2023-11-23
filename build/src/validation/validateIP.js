"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateIP = void 0;
function validateIP(ip) {
    // Validate IP address length
    if (ip.length < 7 || ip.length > 15) {
        return false;
    }
    // Validate the number of parts of the IP address
    let parts = ip.split(".");
    if (parts.length !== 4) {
        return false;
    }
    // Validate each part of the IP address
    for (const part of parts) {
        // Validate that the part is a number between 0 and 255
        if (!part.match(/^[0-9]{1,3}$/)) {
            return false;
        }
        // Validate that the part is not greater than 255
        if (Number(part) > 255) {
            return false;
        }
    }
    // The IP address is valid
    return true;
}
exports.validateIP = validateIP;
