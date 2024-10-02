// models/Question.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctOption: { type: String, required: true },
  quizCode: { type: Number, required: true }, // Change here
},{
  collection:'questions'
});

module.exports = mongoose.model('questionSchema', questionSchema);
