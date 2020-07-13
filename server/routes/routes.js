const express = require('express');
const router = express.Router();

//Routing happens here
router.get('/app', function(req, res){
  res.render('index')
});

router.get('/api', function(req, res){
  res.render('index')
});

module.exports = router;