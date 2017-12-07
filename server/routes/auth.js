var express = require('express');
var router  = express.Router();

var auth    = require('../controllers/auth');


router.route('/login').post(auth.login);
router.route('/logout').post(auth.logout);


module.exports = router;
