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
var requestRoute = require('./routes/requestRoute');
var adminDashboardRoute = require('./routes/adminDashboardRoute');

//Static Routes File
app.use('/', indexRoute);
app.use('/login', loginRoute);
app.use('/request', requestRoute);
app.use('/dashboard', adminDashboardRoute);

module.exports = app;