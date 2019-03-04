'use strict'

export default function (phoneNumber) {
    if (!phoneNumber.includes("+")) {
        if (phoneNumber.length <= 10 && phoneNumber.charAt(0) != 1) {
            phoneNumber = `+1${phoneNumber}`;
        };
    };
    return phoneNumber;
};