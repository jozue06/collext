'use strict';

import Router from 'express';
const authRouter = Router();
import oauth from './lib/oauth.js';


authRouter.get('/oauth', (req, res, next) => {
	// console.log("oauth req", req.query.code);
	// Offload the oauth handshaking process to a module designed
	// to do that job. The route itself shouldn't contain any logic...
	oauth.authorize(req).then (token => {
		res.send({token});
	})
		.catch(next);
});

export default authRouter;