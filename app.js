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
  res.send('Welcome to Hello World!');
}
);
app.listen(3000, function(){
  console.log('Server On!');
});
