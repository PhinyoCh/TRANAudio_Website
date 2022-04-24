const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const config = require('./config');

//Static File
app.use(express.static('public'));
app.use('/', express.static(__dirname));

//Set Views engine
app.set('views',[
    path.join(__dirname,'views')
]);
app.set('view engine' , 'ejs');

//Listen on port 8000
app.listen(config.port,()=> console.info(`[SERVER] Listening on port ${config.port}`));

//Define Routing Path
var indexRoute = require('./routes/indexRoute');
var loginRoute = require('./routes/loginRoute');
var addUserRoute = require('./routes/addUserRoute');
var editUserRoute = require('./routes/editUserRoute');

//Static Routes File
app.use('/', indexRoute);
app.use('/login', loginRoute);
app.use('/adduser', addUserRoute);
app.use('/edituser', editUserRoute);


module.exports = app;