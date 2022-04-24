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
    path.join(__dirname,'views'),
    path.join(__dirname,'views/page')
]);
app.set('view engine' , 'ejs');

//Listen on port 3000
app.listen(config.port,()=> console.info(`[SERVER] Listening on port ${config.port}`));

//Define Routing Path

//Static Routes File

