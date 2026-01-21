const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  registration_number: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone_number: {
    type: Number,
    required: true,
  },
  Branch: {
    type: String,
    required: true,
  },
  Year: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  technical: {
    type: String,
    required: true,
  },
  nontechnical: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const student = mongoose.model("student", studentSchema);
module.exports = student;
