require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const artistRoutes = require("./routes/artist");
const showRoutes = require("./routes/show");

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

app.use("/shows", showRoutes);
app.use("/artists", artistRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
module.exports = app;
