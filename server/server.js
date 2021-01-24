const express = require('express');
const app = express();
const path = require('path');

const router = require('./routes/routes.js')

app.use('/', router);

module.exports=app;


