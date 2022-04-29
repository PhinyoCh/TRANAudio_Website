const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const axios = require('axios');
const { urlencoded } = require('express');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.use(cookieParser());

router.get('/', function(req,res,next){
    res.render('request');

})

module.exports = router;