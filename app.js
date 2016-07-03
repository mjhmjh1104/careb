var express = require('express');

var app = express();

  res.send('Welcome to Hello World!');
});

app.listen(3000, function(){
  console.log('Server On!');
});
