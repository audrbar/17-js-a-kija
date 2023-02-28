const express = require("express");
const app = express();
const port = 3003;

const meniu = `
<a href="/">home</a>
<a href="/racoon">racoon</a>
<a href="/fox">fox</a>
<a href="/volf">volf</a>
`;

app.get("/", (req, res) => {
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
