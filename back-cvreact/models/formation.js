const mongoose = require("mongoose");

const formationSchema = new mongoose.Schema({
  formationTitle: {
    type: String,
    required: true,
    unique: true,
  },
  formationDescription: {
    type: String,
    required: true,
  },
  dateFormationStart: {
    type: Date,
  },
  dateFormationEnd: {
    type: Date,
  },
  school: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Formation", formationSchema);
