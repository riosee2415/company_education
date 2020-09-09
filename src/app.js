const express = require("express");
// 대입연산자 =  :  우항의 결과물을 좌항에 대입하세요.

const app = express();
app.set("view engine", "pug");

//req : 사용자의 요청
//res : 서버의 응답
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/node", (req, res) => {
  res.render("node");
});

app.listen(3333, () => {
  console.log("3333 PORT WEB SERVER START");
});
