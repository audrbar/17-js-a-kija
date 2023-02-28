const express = require("express");
const app = express();
const port = 3003;

const meniu = `
<a href="/home">home</a>
<a href="/racoon">racoon</a>
<a href="/fox">fox</a>
<a href="/volf">volf</a>
`;

// Server Side rendering

app.get("/home", (req, res) => {
  res.send(`
  ${meniu}
  <h1>Hello World!</h1>`);
});

app.get("/racoon", (req, res) => {
  res.send(`
    ${meniu}
    <h1>Hello Racoon!</h1>`);
});

app.get("/Fox", (req, res) => {
  res.send(`
    ${meniu}
    <h1>Hello Fox!</h1>`);
});

app.get("/Volf", (req, res) => {
  res.send(`
    ${meniu}
    <h1>Hello Volf!</h1>`);
});

// API

app.get("/api/home", (req, res) => {
  res.json({ title: "Hello Forest" });
});

app.get("/api/racoon", (req, res) => {
  res.json({ title: "Hello Racoon" });
});

app.get("/api/fox", (req, res) => {
  res.json({ title: "Hello Fox" });
});

app.get("/api/volf", (req, res) => {
  res.json({ title: "Hello Volf" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
