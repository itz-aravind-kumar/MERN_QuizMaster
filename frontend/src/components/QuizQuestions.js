// components/admin/QuizQuestions.js
import AdminNav from './AdminNav';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function QuizQuestions() {
  const { quizCode } = useParams();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get("http://localhost:9000/quiz/questions/"+quizCode);
        setQuestions(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchQuestions();
  }, [quizCode]);

  const handleDelete = async (questionId) => {
    try {
      await axios.delete(`http://localhost:9000/quiz/question/${questionId}`);
      setQuestions(questions.filter((question) => question._id !== questionId));
      alert('Question deleted successfully');
    } catch (err) {
      console.error(err);
      alert('Failed to delete question');
    }
  };

  return (
    <div className='admin-dashboard'>
      <AdminNav />
      <div className='mx-5 mt-3'>
      <table className='table table-striped mt-5'>
        <thead>
          <tr>
            <th className='text-center'>Question ID</th>
            <th className='text-center'>Text</th>
            <th className='text-center'>Option 1</th>
            <th className='text-center'>Option 2</th>
            <th className='text-center'>Option 3</th>
            <th className='text-center'>Option 4</th>
            <th className='text-center'>Correct Option</th>
            <th className='text-center'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question._id}>
              <td>{question._id}</td>
              <td>{question.text}</td>
              <td>{question.options[0]}</td>
              <td>{question.options[1]}</td>
              <td>{question.options[2]}</td>
              <td>{question.options[3]}</td>
              <td>{question.correctOption}</td>
              <td>
                <button className='btn btn-danger'  onClick={() => handleDelete(question._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
    </div>
  );
}

export default QuizQuestions;
