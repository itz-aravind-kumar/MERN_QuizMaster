const express = require('express');
const router = express.Router();
const Result = require('../models/Result');
const User = require('../models/User');

// Record a result
router.post('/record-result', async (req, res) => {
  const { student, quiz, score } = req.body;

  try {
    // Check if the result already exists
    let result = await Result.findOne({ student, quiz });
    if (result) {
      // If the result exists, update the score and status
      result.score = score;
      result.status = 'attempted';
    } else {
      // If the result does not exist, create a new one
      result = new Result({ student, quiz, score });
    }

    await result.save();
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});
//-----------------------------------------------------------------------------------------------------
// Get all results
router.get('/results', async (req, res) => {
  try {
    const results = await Result.find().populate('student', 'name');
    console.log(results)
    res.status(200).json(results);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});
//--------------------------------------------------------------------------------------------------------------
// Get results for a specific quiz
router.get('/results/:quizCode', async (req, res) => {
  try {
    const results = await Result.find({ quiz: req.params.quizCode }).populate('student', 'name');
    res.status(200).json(results);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

// Get results for a specific student
router.get('/user-results/:studentId', async (req, res) => {
  try {
    const results = await Result.find({ student: req.params.studentId }).populate('quiz', 'title');
    res.status(200).json(results);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

module.exports = router;
