'use strict';
let config = require('../config');

module.exports.sendSms = function(to, message) {
  let client = require('twilio')(config.accountSid, config.authToken);
  return client.api.messages
    .create({
      body: message,
      to: to,
      from: config.sendingNumber,
    }).then((data) =>{
      console.log('Administrator notified');
    }).catch((err) => {
      console.error('Could not notify administrator');
      console.error(err);
    });
};
