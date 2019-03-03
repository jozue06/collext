'use strict';
let config = require('../config');

module.exports.sendSms = function(to, message) {
  console.log("stuff", to)
  let client = require('twilio')(config.accountSid, config.authToken);
  return client.api.messages
    .create({
      body: message,
      to: to,
      from: config.sendingNumber,
    }).then((data) =>{
    }).catch((err) => {
      console.error('Could not notify administrator');
      console.error(err);
    });
};
