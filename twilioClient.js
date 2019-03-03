let config = require('./config');

module.exports.sendSms = function(to, message) {
  console.log("to " , to, message);
  return
  let client = require('twilio')(config.accountSid, config.authToken);
  return client.api.messages
    .create({
      body: message,
      to: to,
      from: config.sendingNumber,
    }).then(function(data) {
    }).catch(function(err) {
      console.error('Could not notify administrator');
      console.error('error', err);
    });
};
