var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB);
var db = mongoose.connection;
db.once("open",function () {
  console.log("DB connected!");
});
db.on("error",function (err) {
  console.log("DB ERROR :", err);
});

app.get('/',function (req,res) {
  res.send('여기는 car.eb 서버입니다. 개발자 Ender_Dragon1104, Bluechicken0520님이 열심히 만들고 있으니 완성되면 한 번 놀러 와보세요!!!');
}
);

app.use(express.static(__dirname + '/public/index.html'));
console.log(__dirname);

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="/stylesheets/master.css">
    <title>Careb games!</title>
  </head>
  <body>
    <h1>Car.eb</h1>
  </body>
</html>

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('Server On!');
});
