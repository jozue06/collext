import config from '../config';
import phonecleaner from './phonecleaner';
import client from 'twilio';

export function sendSms(to, message) {
  to = phonecleaner(to);

  client(config.accountSid, config.authToken);
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
}
