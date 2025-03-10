const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  experienceTitle: {
    type: String,
    required: true,
    unique: true,
  },
  experienceDescription: {
    type: String,
    required: true,
  },
  dateExperienceStart: {
    type: Date,
  },
  dateExperienceEnd: {
    type: Date,
  },
  company: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Experience", experienceSchema);
