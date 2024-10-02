import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNav from './AdminNav';

function AddQuestion() {
  
  const [text, setText] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [option4, setOption4] = useState('');
  const [correctOption, setCorrectOption] = useState('');
  const [quizCode, setQuizCode] = useState();
  const [quizCodes, setQuizCodes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuizCodes = async () => {
      try {
        const res = await axios.get('http://localhost:9000/quiz/quizzes');
        setQuizCodes(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchQuizCodes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:9000/quiz/add-question', {
        text,
        options: [option1, option2, option3, option4],
        correctOption,
        quizCode: Number(quizCode), // Ensure quizCode is a number
      });
      alert(res.data.msg);
      navigate(`/admin-dashboard/`);
    } catch (err) {
      console.error(err);
      alert('Failed to add question');
    }
  };

  return (
    <div className="admin-dashboard" style={{height:'100%'}}>
      <AdminNav />
      <form onSubmit={handleSubmit} className='w-50 mx-auto p-5 mt-3 ' style={{background:'rgb(204, 200, 200)'}}>
        <div className="mb-3">
          <label htmlFor="questionText" className="form-label fs-5" >Question Text</label>
          <input
            type="text"
            className="form-control"
            id="questionText"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter the question text"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="option1" className="form-label fs-5">Option 1</label>
          <input
            type="text"
            className="form-control"
            id="option1"
            value={option1}
            onChange={(e) => setOption1(e.target.value)}
            placeholder="Enter option 1"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="option2" className="form-label fs-5">Option 2</label>
          <input
            type="text"
            className="form-control"
            id="option2"
            value={option2}
            onChange={(e) => setOption2(e.target.value)}
            placeholder="Enter option 2"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="option3" className="form-label fs-5">Option 3</label>
          <input
            type="text"
            className="form-control"
            id="option3"
            value={option3}
            onChange={(e) => setOption3(e.target.value)}
            placeholder="Enter option 3"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="option4" className="form-label fs-5">Option 4</label>
          <input
            type="text"
            className="form-control"
            id="option4"
            value={option4}
            onChange={(e) => setOption4(e.target.value)}
            placeholder="Enter option 4"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="correctOption" className="form-label fs-5">Correct Option</label>
          <select
            className="form-select"
            id="correctOption"
            value={correctOption}
            onChange={(e) => setCorrectOption(e.target.value)}
            required
          >
            <option value="">Select the correct option</option>
            <option value={option1}>{option1}</option>
            <option value={option2}>{option2}</option>
            <option value={option3}>{option3}</option>
            <option value={option4}>{option4}</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="quizCode" className="form-label">Quiz Code</label>
          <select
            className="form-select"
            id="quizCode"
            value={quizCode}
            onChange={(e) => setQuizCode(e.target.value)}
            required
          >
            <option value="">Select a quiz code</option>
            {quizCodes.map((quiz) => (
              <option key={quiz._id} value={quiz.quizCode}>{quiz.quizCode} - {quiz.title}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-100">Add Question</button>
      </form>
    </div>
  );
}

export default AddQuestion;
