const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const axios = require('axios');
const config = require('../config');
const { urlencoded } = require('express');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.use(cookieParser());

router.get('/', function(req,res,next){
    res.render('login');
})

router.post('/PostLogin', function(req,res,next){
    
    axios
    .post(config.apiURL+'Login/PostLogin',{
        username: 'admin',
        password: 'password',
    })
    //login complete 
    .then( function(response){
        console.log(response);
    })
    //error 
    .catch( function(err){
        console.log(err);
        
    })

})

module.exports = router;