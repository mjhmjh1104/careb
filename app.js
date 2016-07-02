var express = require('express');

var app = express();

function draw(){
  ctx.save();
  ctx.font = "20px Arial";
  ctx.fillStyle = "black";
  ctx.fillText("Welcome to Hello World!");
  ctx.restore();
}
app.get('/',function (req,res) {
  res.font = "20px Arial"
  res.fillStyle = "red"
  res.send('Welcome to Hello World!');
});

app.listen(3000, function(){
  console.log('Server On!');
});
