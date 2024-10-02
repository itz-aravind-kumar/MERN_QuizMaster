import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNav from './AdminNav';

function QuizList() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const res = await axios.get('http://localhost:9000/quiz/quizzes');
        setQuizzes(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div className=' admin-dashboard'>
      <AdminNav />
      <div className='mx-5 mt-3'>
      <table className='table table-striped' >
        <thead>
          <tr>
            <th className='text-center'>Quiz Code</th>
            <th className='text-center'>Quiz Title</th>
            <th className='text-center'>No of Questions</th>
            <th className='text-center'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {quizzes.map((quiz) => (
            <tr key={quiz._id}>
              <td className='text-center'>{quiz.quizCode}</td>
              <td className='text-center'>{quiz.title}</td>
              <td className='text-center'>{quiz.questions.length}</td>
              <td className='text-center'>
                <Link className='btn btn-primary' to={`/quizcode/questions/${quiz.quizCode}`}>View Questions</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

     
      
    </div>
  );
}

export default QuizList;