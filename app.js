const express = require('express');
const nunjucks = require('nunjucks');
// const path = require('path');
const app = express();

app.listen(3000, function ()   {
    console.log('server listening on port 3000');
});

app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
});

app.get('/', function (req, res, next){
  const people = [{name: 'Full'}, {name:'Stacker'}, {name:"Son"}];
  res.render('index', {title: 'Hall of Fame', people: people})
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

var locals = {
  title: 'An Example',
  people: [
    {name: 'Gandalf'},
    {name: 'Frodo'},
    {name: 'Hermione'}
  ]
};






app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache:true});
// nunjucks.render('index.html', locals, function(err, output){
//   console.log(output);
// });
