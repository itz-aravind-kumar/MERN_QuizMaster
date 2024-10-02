import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminNav from './AdminNav';

export default function CreateQuiz() {
  const [title, setTitle] = useState('');
  const [quizCode, setQuizCode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:9000/quiz/create-quiz', {
        title,
        quizCode,
      });
      alert('Quiz created successfully');
      console.log(res.data.msg)
      navigate(`/admin-dashboard/`);
    } catch (err) {
      console.error(err);
      alert('Failed to create quiz');
    }
  };

  return (
    <div  className='admin-dashboard' >
      <AdminNav />
      <div className='login-form mx-auto mt-5 ' style={{width:'400px', backgroundColor:'white', borderRadius:'20px'}}>
      <form onSubmit={handleSubmit} className=' pt-5 pb-3 px-3'>
        <label className='form-label '>Enter Quiz Title</label>
        <input
          type="title"
          className='form-control mb-4' 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Quiz Title"
          required
        />
        <label className='form-label'>Enter Quiz code</label>
        <input
          type="number"
          className='form-control mb-4'
          value={quizCode}
          onChange={(e) => setQuizCode(e.target.value)}
          placeholder="Quiz code"
          required
        />
        <button type="submit" className='btn btn-primary my-2 w-100'>Create Quiz</button>
      </form>
      </div>
    </div>
  );
}


{/* <div  className='admin-dashboard' >
      <form onSubmit={handleSubmit}>
        <input
        className='form-control my-3'
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Quiz Title"
          required
        />
        <input
        className='form-control my-3'
          type="number"
          value={quizCode}
          onChange={(e) => setQuizCode(e.target.value)}
          placeholder="Quiz Code"
          required
        />
        <button className='btn btn-primary w-100 my-3 ' type="submit">Create Quiz</button>
      </form>
    </div> */}