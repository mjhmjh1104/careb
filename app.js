var express = require('express');

var app = express();

var ward="Hello World!";

app.get('/',function (req,res) {
  res.send(ward());
});

app.listen(3000, function(){
  console.log('Server On!\n');
  console.log(ward);
});
