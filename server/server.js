const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(cors());

app.use('/login', (req, res) => {
    res.send({
        token: 'test123'
    });
});

module.exports=app;


