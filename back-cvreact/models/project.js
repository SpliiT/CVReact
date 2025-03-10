const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
    unique: true,
  },
  projectDescription: {
    type: String,
    required: true,
  },
  dateProject: {
    type: Date,
  },
  projectLink: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Project", projectSchema);
