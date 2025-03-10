const mongoose = require("mongoose");

const hobbySchema = new mongoose.Schema({
  hobbyName: {
    type: String,
    required: true,
    unique: true,
  },
  hobbyDescription: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Hobby", hobbySchema);
