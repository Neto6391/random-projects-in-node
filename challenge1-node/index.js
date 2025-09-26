require("dotenv").config();

const express = require("express");
const app = express();

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello, World!\n");
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
