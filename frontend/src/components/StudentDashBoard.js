// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../App.css'

// export default function StudentDashboard() {
//   const { id } = useParams();
//   const [user, setUser] = useState({});
//   const [quizzes, setQuizzes] = useState([]);
//   const [selectedQuiz, setSelectedQuiz] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await axios.get(`http://localhost:9000/auth/user/${id}`);
//         setUser(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchUser();
//   }, [id]);

//   useEffect(() => {
//     const fetchQuizzes = async () => {
//       try {
//         const res = await axios.get('http://localhost:9000/quiz/quizzes');
//         setQuizzes(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchQuizzes();
//   }, []);

//   const handleTakeQuiz = () => {
//     if (selectedQuiz) {
//       navigate(`/take-quiz/${id}?quizCode=${selectedQuiz}`);
//     } else {
//       alert('Please select a quiz.');
//     }
//   };

//   return (
//     <div className=" student-dashboard">
//       <h2 className='user-greet'>Welcome {user.name}</h2>
//       <div className="mt-4">
//         <label htmlFor="quizSelect">Select Quiz:</label>
//         <select 
//           id="quizSelect" 
//           className="form-control" 
//           value={selectedQuiz} 
//           onChange={(e) => setSelectedQuiz(e.target.value)}
//         >
//           <option value="">Select Quiz</option>
//           {quizzes.map(quiz => (
//             <option key={quiz._id} value={quiz.quizCode}>{quiz.title}</option>
//           ))}
//         </select>
//       </div>
//       <button className="btn btn-primary mt-3" onClick={handleTakeQuiz}>Take Quiz</button>
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import StudentNav from './StudentNav';

export default function StudentDashboard() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [quizzes, setQuizzes] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:9000/auth/user/${id}`);
        setUser(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUser();
  }, [id]);

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

  const handleTakeQuiz = () => {
    if (selectedQuiz) {
      navigate(`/take-quiz/${id}?quizCode=${selectedQuiz}`);
    } else {
      alert('Please select a quiz.');
    }
  };

  return (
    <div className="student-dashboard container-fluid">
      <StudentNav />
      <h2 className='user-greet'>Welcome {user.name}</h2>
      <div className="mt-4">
        <label className='label-font'>Select Quiz:</label>
        <select 
          id="quizSelect" 
          className="form-control mt-2 w-50 mx-auto" 
          value={selectedQuiz} 
          onChange={(e) => setSelectedQuiz(e.target.value)}
        >
          <option value="">Select Quiz</option>
          {quizzes.map(quiz => (
            <option key={quiz._id} value={quiz.quizCode}>{quiz.title}</option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary mt-3" onClick={handleTakeQuiz}>Take Quiz</button>
    </div>
  );
}
