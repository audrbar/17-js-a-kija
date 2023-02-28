const express = require("express");
const app = express();
const port = 3003;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/racoon", (req, res) => {
  res.send("Hello Racoon!");
});

app.get("/Fox", (req, res) => {
  res.send("Hello Fox!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
