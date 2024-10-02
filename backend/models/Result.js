const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resultSchema = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: 'userSchema',
    required: true
  },
  quiz: {
    type: Number,
    ref: 'quizSchema',
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['attempted', 'not attempted'],
    default: 'attempted'
  }
},{
    collection:'results'
});

module.exports = mongoose.model('resultSchema', resultSchema);
