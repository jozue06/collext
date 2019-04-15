let express = require('express'),
	router = express.Router(),
	notification = require('../middleware/notification');
let auth = require('../auth/middleware.js').default;
let PaymentCheck = require('../auth/paymentCheck.js')


// POST: /notifications
router.post('/', auth, (req, res, next) => {
	let message = req.body.message;
	let to = req.body.to;
	let allowed = PaymentCheck.checkStripe(req.body.user);
	// let allowed = true;
	if (allowed) {
		notification.sendSms(to, message).then((data) => {
			if (data.status !== 'queued') {
				throw new Error(data)
			} else {
				res.send(data);
			}
		}).catch(err => {
			res.status(400).send({err})
		})
	}
});


router.get('/error', function (req, res, next) {
	res.redirect(302, '/notifications/error');
});

module.exports = router;