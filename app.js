var express = require('express');

var app = express();

var ward = require('Hello World!');

app.get('/',function (req,res) {
  res.send('Hello World!');
});

app.listen(3000, function(){
  console.log('Server On!');
});
