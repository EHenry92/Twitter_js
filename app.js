const express = require('express');
const app = express();

app.listen(3000, function ()   {
    console.log('server listening on port 3000');
});

app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
});

app.get('/',function (req, res, next) {
    console.log('Is anybody there?');
    next();
});

app.get('/', function (req, res, next){
  res.send('Hi there!')
});

app.post('/', function (req, res){
  console.log('test');
  res.send('test');
});
