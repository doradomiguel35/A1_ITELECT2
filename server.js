//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index.html'));
});
app.get('/ass2', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index2.html'));
});
app.get('/ass3', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index3.html'));
});
app.get('/act1', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index4.html'));
});
app.get('/act2', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index5.html'));
});


var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});