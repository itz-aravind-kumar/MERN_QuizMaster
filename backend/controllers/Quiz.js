const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz');
const Question = require('../models/Question');

// Create Quiz
router.post('/create-quiz', async (req, res) => {
  const { title, quizCode} = req.body;

  try {
    const newQuiz = new Quiz({ title, quizCode });
    await newQuiz.save();
    res.json({ msg: 'Quiz created successfully', newQuiz });
  } catch (err) {
    if (err.code === 11000) { // Duplicate key error
      res.status(400).json({ msg: 'Quiz code already exists. Please choose a different code.' });
    } else {
      if (err.code === 11000) { // Duplicate key error
        res.status(400).json({ msg: 'Quiz code already exists. Please choose a different code.' });
      } else {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
      }
    }
  }
});
//-----------------------------------------------------------------------------
// Add Question
router.post('/add-question', async (req, res) => {
    const { text, options, correctOption, quizCode } = req.body;
  
    try {
      // Create a new question
      const question = new Question({
        text,
        options,
        correctOption,
        quizCode
      });
  
      // Save the question
      await question.save();
  
      // Find the quiz by quizCode and update it to include the new question
      const quiz = await Quiz.findOneAndUpdate(
        { quizCode },
        { $push: { questions: question._id } },
        { new: true }
      );
  
      if (!quiz) {
        return res.status(404).json({ msg: 'Quiz not found' });
      }
  
      res.json({ msg: 'Question added successfully', quiz });
    } catch (err) {
      res.status(500).json({ msg: 'Server error' });
    }
  });
  
//-------------------------------------------------------------------

//getAllquizes
router.get('/quiz/:quizCode',async (req, res) => {
  try {
    const quiz = await Quiz.find({quizCode:req.params.quizCode});
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

//--------------------------------------------------------------------
// Get all quizzes for  admin
router.get('/quizzes', async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

//------------------------------------------------------------------------------

// Get questions for a quiz
router.get('/questions/:quizCode', async (req, res) => {
  try {
    // const quizCode = req.params.quizCode;
    // console.log('Received quizCode param:', quizCode); // Log the received param

    const questions = await Question.find({ quizCode:req.params.quizCode });

    res.json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// Delete question
router.delete('/question/:id', async (req, res) => {
  try {
    const question = await Question.findByIdAndDelete(req.params.id);
    if (question) {
      await Quiz.findOneAndUpdate(
        { quizCode: question.quizCode },
        { $pull: { questions: question._id } },
        { new: true }
      );
      res.json({ msg: 'Question deleted successfully' });
    } else {
      res.status(404).json({ msg: 'Question not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// controllers/quizController.js



// Fetch questions by quiz code


 module.exports = router;
