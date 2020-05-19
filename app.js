require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Connection for Mongoose
const connect = () => {
  return mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

connect();

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json({ limit: "1mb" }));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
module.exports = app;
