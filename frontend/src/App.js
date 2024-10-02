
import './App.css';
import {HashRouter,Routes,Route} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import Register from './components/Register';
import Login from './components/Login';
import AdminDashBoard from './components/AdminDashBoard.js';
import StudentDashBoard from './components/StudentDashBoard.js';
import Home from './components/Home.js'
import CreateQuiz from './components/CreateQuiz.js';
import AddQuestion from './components/AddQuestion.js';
import QuizList from './components/QuizList.js';
import QuizQuestions from './components/QuizQuestions.js'
import TakeQuiz from './components/TakeQuiz.js';
import AdminResults from './components/AdminResults.js';



function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student-dashboard/:id" element={<StudentDashBoard />} />
          <Route path="/admin-dashboard" element={<AdminDashBoard />} /> 
          <Route path="/create-quiz" element={<CreateQuiz />} /> 
          <Route path="/add-question" element={<AddQuestion />} /> 
          <Route path="/quiz-list" element={<QuizList />} />
          <Route path="/quizcode/questions/:quizCode" element={<QuizQuestions />} />
          <Route path="/take-quiz/:id" element={<TakeQuiz />} />
          <Route path="/admin-results" element={<AdminResults />} />

       
        </Routes>
      </HashRouter>
      
    </div>
  );
}

export default App;
