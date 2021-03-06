'use strict';

let config = require('../config');

module.exports.service = function() {
  let client = require('twilio')(config.accountSid, config.authToken);

  return client.notify.v1.services(config.notificationServiceSid);
};
