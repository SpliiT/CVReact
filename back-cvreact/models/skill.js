const mongoose = require("mongoose");

const skillsSchema = new mongoose.Schema({
  skillName: {
    type: String,
    required: true,
    unique: true,
  },
  skillPicture: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Skill", skillsSchema);
