// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useLocation } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function TakeQuiz() {
//   const { id } = useParams();
//   const query = new URLSearchParams(useLocation().search);
//   const quizCode = query.get('quizCode');
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState({});
//   const [score, setScore] = useState(null);

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const res = await axios.get(`http://localhost:9000/quiz/questions/${quizCode}`);
//         setQuestions(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchQuestions();
//   }, [quizCode]);

//   const handleAnswerChange = (questionId, optionIndex) => {
//     setAnswers({ ...answers, [questionId]: optionIndex });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let calculatedScore = 0;
//     questions.forEach(question => {
//       if (question.options[answers[question._id]] === question.correctOption) {
//         calculatedScore += 10;
//       }
//     });
//     setScore(calculatedScore);
//     try {
//       await axios.post('http://localhost:9000/result/record-result', {
//         student: id,
//         quiz: quizCode,
//         score: calculatedScore
//       });
//       alert('Quiz submitted successfully');
//     } catch (err) {
//       console.error(err);
//       alert('Error submitting quiz');
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Quiz: {quizCode}</h2>
//       <form onSubmit={handleSubmit}>
//         {questions.map((question, index) => (
//           <div key={question._id} className="mt-4">
//             <h5>{index + 1}. {question.text}</h5>
//             {question.options.map((option, optIndex) => (
//               <div key={optIndex} className="form-check">
//                 <input 
//                   type="radio" 
//                   className="form-check-input" 
//                   name={`question${index}`} 
//                   value={optIndex} 
//                   onChange={() => handleAnswerChange(question._id, optIndex)} 
//                 />
//                 <label className="form-check-label">
//                   {option}
//                 </label>
//               </div>
//             ))}
//           </div>
//         ))}
//         <button type="submit" className="btn btn-primary mt-3">Submit Quiz</button>
//       </form>
//       {score !== null && (
//         <div className="mt-4">
//           <h3>Quiz Result</h3>
//           <p>You scored {score} out of {questions.length * 10}</p>
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // Make sure to import the custom CSS
import StudentNav from './StudentNav';

export default function TakeQuiz() {
  const { id } = useParams();
  const query = new URLSearchParams(useLocation().search);
  const quizCode = query.get('quizCode');
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get(`http://localhost:9000/quiz/questions/${quizCode}`);
        setQuestions(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchQuestions();
  }, [quizCode]);

  const handleAnswerChange = (questionId, optionIndex) => {
    setAnswers({ ...answers, [questionId]: optionIndex });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let calculatedScore = 0;
    questions.forEach(question => {
      if (question.options[answers[question._id]] === question.correctOption) {
        calculatedScore += 10;
      }
    });
    setScore(calculatedScore);
    try {
      await axios.post('http://localhost:9000/result/record-result', {
        student: id,
        quiz: quizCode,
        score: calculatedScore
      });
      alert('Quiz submitted successfully');
    } catch (err) {
      console.error(err);
      alert('Error submitting quiz');
    }
  };

  return (
    <div className="h-100 take-quiz px-3 pt-3">
         <StudentNav />
      <h2 className='text-center quiz-heading'>Quiz : {quizCode}</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={question._id} className="mt-4 question-display">
            <h5 className='question-font'>{index + 1}. {question.text}</h5>
            <div className="options question-font">
              {question.options.map((option, optIndex) => (
                <div 
                  key={optIndex} 
                  className={`option-box option-${optIndex + 1} ${answers[question._id] === optIndex ? 'selected' : ''}`}
                  onClick={() => handleAnswerChange(question._id, optIndex)}
                >
                  {String.fromCharCode(65 + optIndex)}. {option}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className='mx-auto my-3 d-flex justify-content-center'>
          <button type="submit" className="submit-button">Submit Quiz</button>
        </div>
      </form>
      {score !== null && (
        <div className="score-display mt-4">
          
          <p className='text-center score'> You scored {score} out of {questions.length * 10}</p>
        </div>
      )}
    </div>
  );
}
