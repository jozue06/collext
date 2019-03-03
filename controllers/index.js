
var express = require('express')
  , router = express.Router();
let fs = require('fs');



// GET: /
router.get('/redirect',  (req, res, next) => {
  res.redirect(302,'/notifications/new');
});


router.get('/', (req, res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  
  res.render('index', {}); 
});
module.exports = router;
