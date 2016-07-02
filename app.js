var express = require('express');

var app = express();

app.get('/',function (req,res) {
  res.writeHead({'Content-Type':'text/html'});
  res.write('<font size="200" color="green">my node.js server</font>');
  res.end();
  res.send('Welcome to Hello World!');
});

app.listen(3000, function(){
  console.log('Server On!');
});
