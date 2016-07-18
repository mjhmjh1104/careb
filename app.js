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
  res.send('+ 7/18 6:48:42 : 에러가 발견되었네요. 빠른 시일 내에 고치도록 노력하겠습니다.')
}
);

app.use(express.static(__dirname + '/public/index.html'));
console.log(__dirname);

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('Server On!');
});
