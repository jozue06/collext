let express = require('express'),
	router = express.Router(),
	notification = require('../middleware/notification');
let auth = require('../auth/middleware.js').default;
// GET: /notifications/new
router.get('/new', auth, (req, res, next) => {
	res.render('notifications', {});
});



// POST: /notifications
router.post('/', function (req, res, next) {
	if (!req.body.message || !req.body.to) {
		// throw new Error;
		res.redirect(302, '/error');
	} else {
		let message = req.body.message;
		let to = req.body.to;

		notification.sendSms(to, message);
		res.redirect(302, '/notifications/new');
	}


});

router.get('/error', function (req, res, next) {
	res.redirect(302, '/notifications/error');
});

module.exports = router;