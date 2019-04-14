let express = require('express'),
	router = express.Router(),
	notification = require('../middleware/notification');
let auth = require('../auth/middleware.js').default;
// GET: /notifications/new
router.get('/new', auth, (req, res, next) => {
	res.render('notifications', {});
});



// POST: /notifications
router.post('/', (req, res, next) => {

	let message = req.body.message;
	let to = req.body.to;

	notification.sendSms(to, message).then((data) => {
		console.log('here', data);
		if (data.status != 200) {
			throw new Error(data)
		} else {
			res.send(data);
		}
		
	}).catch(err => {
		
		res.status(400).send({err})
		
	})

});

router.get('/error', function (req, res, next) {
	res.redirect(302, '/notifications/error');
});

module.exports = router;