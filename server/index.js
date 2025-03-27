const express = require("express");
const mongoose = require("mongoose");

const app = express()

app.get("/", (req, res) => {
  res.send("Hello World");});

app.listen(5000, () => {
    console.log("Server is running on Port 5000");
});
const ATLAS_URI = "mongodb+srv://jai251926:jai251926@cluster0.irgwh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));