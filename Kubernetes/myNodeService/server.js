const express = require("express");
const app = express();

app.listen(1111, function () {
  console.log("listening on 1111");
});

app.get("/", (req, res) => {
  res.send("Hejka z Node JS");
});