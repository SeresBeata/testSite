const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello! This is my test site! Nice to see you here!");
});

app.listen(port, "0.0.0.0", () => {
  console.log("Listening on Port " + port);
});
