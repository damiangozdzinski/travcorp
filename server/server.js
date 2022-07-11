require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5003;

// * Mock data * //
const mockData = require("./data/travels.json");

app.get("/travels-data", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json(mockData);
});

app.listen(port, () => {
  console.log(`Server starts on ${port}`);
});