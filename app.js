const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-Parser');
const routes = require('./routes');
const tweetBank = require('./tweetBank');
// const path = require('path');
const app = express();
app.use(express.static('public'));

app.listen(3000, function ()   {
    console.log('server listening on port 3000');
});

app.use('/', routes);


app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache:true});

routes.get('/users/:name', function(req,res, next) {
  var name = req.params.name;
  var list = tweetBank.find({name: name});
  res.render('index', {tweets: list, showForm:false});
  next();
});

routes.get('/tweets/:id', function(req,res) {
  var tweet = req.params.id;
  var list = tweetBank.find({uniqueID: tweet});
  res.render('index', {tweets: list , showForm:true});
});
routes.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});




/*
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



*/



// nunjucks.render('index.html', locals, function(err, output){
//   console.log(output);
// });
