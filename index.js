const express = require("express");
const app = express();

const mongoose = require("mongoose");
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongo: ", process.env.MONGO_URI);
  });
