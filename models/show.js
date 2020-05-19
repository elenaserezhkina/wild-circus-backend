const mongoose = require("mongoose");

// Show schema
const showSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  artists: [
    {
      name: { type: String },
    },
  ],
  reviews: [
    {
      name: { type: String },
      text: { type: String },
    },
  ],
  isFavorite: { type: Boolean, default: false },
});

const Show = mongoose.model("Show", showSchema);

module.exports = Show;
