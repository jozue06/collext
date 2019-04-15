'use strict';
import User from './model.js';

export default (req, res, next) => {
	let authorize = (token) => {
		
		User.authorize(token)
			.then(user => {
				if(!user) { getAuth(); }
				else {
					req.body.token = token;
					next();
				}
			})
			.catch(next);
		};
		
		let authenticate = (auth) => {
			
			User.authenticate(auth)
			.then(user => {
				
				if (!user) { getAuth(); }
				else {
					req.body.token = user.generateToken();
					next();
				}
			})
			.catch(next);
	};

	let getAuth = () => {
		next({status:401,statusMessage:'Unauthorized',message:'Invalid User ID/Password'});
	};
	
	try {
		let token = req.body.token;
		if (!token){
			// authenticate(token);
		}
		if (token){
			authorize(token);
		}
		else {
			getAuth();
		}

	} catch(e) {
		next(e);
	}
};