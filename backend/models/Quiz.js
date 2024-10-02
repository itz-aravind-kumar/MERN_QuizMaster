// models/Quiz.js
const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  quizCode: { type: Number, required: true, unique: true }, // Change here
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'questionSchema' }],
},{
  collection:'quizes'
});

module.exports = mongoose.model('quizSchema', quizSchema);
