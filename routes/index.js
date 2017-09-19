const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm:true } );
});


module.exports = router;