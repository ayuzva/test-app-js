const express = require('express');
const router = express.Router();

//Routing happens here
router.get('/app/*', function(req, res){
  console.log("Do nothing")
});

router.get('/app', function(req, res){
  res.sendFile(path.join(__dirname+'../../client/index.ejs'))
});

router.get('/', function(req, res){
  res.redirect('/app');
});

module.exports = router;