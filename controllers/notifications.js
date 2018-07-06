let express = require('express')
  , router = express.Router()
  , notification = require('../middleware/notification');
let admins = require('../config/administrators.json');
let auth = require('../auth/middleware.js');

// GET: /notifications/new
router.get('/new', auth, function(req, res, next) {
  res.render('notifications', {});
});



// POST: /notifications
router.post('/', function(req, res, next) {

  if(!req.body.message){
    // throw new Error;
    res.redirect(302, '/error');
  }
  else{
    let message = req.body.message;
  
    admins.forEach(function(admin) {
      let to = admin.phoneNumber;
      notification.sendSms(to, message);
    });
    res.redirect(302, '/notifications/new');
  }

 
});

router.get('/error', function(req, res, next) {
  console.log('in the error controller');
  res.redirect(302, '/notifications/error');
});



module.exports = router;
