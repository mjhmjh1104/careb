var express = require('express');

var app = express();

var ward = require('Hello World!');

app.get('/',function (req,res) {
  res.send(ward());
});

app.listen(3000, function(){
  console.log('Server On!');
});
