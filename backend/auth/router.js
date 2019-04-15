'use strict';

import Router from 'express';
import oauth from './lib/oauth.js';

const authRouter = Router();

authRouter.get('/oauth', (req, res, next) => {
	oauth.authorize(req).then(user => {
		res.send({user:user, token:user.token});
	})
	.catch(next);
});

export default authRouter;