//Includes
const express = require('express');
const router = require('./routes/routes.js')
const path = require('path');
const app = express();

//Setting two variables
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));

//Setting up middleware, where to load static files from and where the router is
app.use(express.static(path.join(__dirname, '../client')));
app.use('/', router);

module.exports=app;