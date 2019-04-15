'use strict'

import User from './model.js';

export function checkStripe(userToCheck) {
	let allowed = false
	User.findOne({email: userToCheck.email}).then(user => {
		return user;
	}).then(user => {
		if (user.stripeStatus == 0) {
			return allowed = false;
		} else {
			return allowed = true;
		}

	});
	return allowed;

}