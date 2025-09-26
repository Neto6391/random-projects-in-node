require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!\n" });
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
