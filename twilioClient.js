let config = require('./config');

module.exports.sendSms = function(to, message) {
  let client = require('twilio')(config.accountSid, config.authToken);
  // console.log(client.api.messages.create());
  return client.api.messages
    .create({
      body: message,
      to: to,
      from: config.sendingNumber,
    }).then(function(data) {
      console.log('the data sent -->', data.body);
      console.log('Administrator notified');
    }).catch(function(err) {
      console.error('Could not notify administrator');
      console.error('error', err);
    });
};
