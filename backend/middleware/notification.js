import config from '../notification_config';
import phonecleaner from './phonecleaner';

export function sendSms(to, message) {
	to = phonecleaner(to);
	let client = require('twilio')(config.accountSid, config.authToken);
	
	return client.api.messages
		.create({
			body: message,
			to: to,
			from: config.sendingNumber,
		}).then((data) =>{
				return data;
		}).catch(err => {
			return err;
		}); 
}
