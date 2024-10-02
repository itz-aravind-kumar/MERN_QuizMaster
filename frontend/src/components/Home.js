import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav'; // Assuming you have a separate Nav component
import '../App.css';
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Nav />
      <header className="hero-section">
        <div className="container text-center">
          <h1 className=" welcome-font">Welcome to Quiz Master</h1>
          <p className="caption-font">Test Your Knowledge, Challenge Yourself !!</p>
          <div className="mt-5">
            <Link to="/login" className=" btn btn-warning btn-lg mx-2" style={{textShadow:'none'}}>Start Quiz</Link>
            <Link to="/register" className=" btn btn-warning btn-lg mx-2 " style={{textShadow:'none'}}>Register</Link>
          </div>
        </div>
      </header>
      
      <section className="features-section text-center py-5">
        <div className="container">
          <div className="row">
          <div className="col-md-4">
              <div className="card">
                <div className="card-body p-0">
                  <h5 className="card-title p-3" style={{backgroundColor:'#3156A4',color:'white'}}>Personalized Quizes</h5>
                  <p className="card-text p-3">Tailor your quiz experience by selecting quizzes based on your interests and skill level. Track your progress and see how you improve over time. Experoence our personlized User dashboards</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body p-0">
                  <h5 className="card-title p-3 " style={{backgroundColor:'#3156A4',color:'white'}}>Admin Dashboard</h5>
                  <p className="card-text p-3">Admins can create, edit, and manage quizzes with ease. View student scores and performance analytics to better understand how users are engaging with your quizzes.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body p-0">
                  <h5 className="card-title p-3" style={{backgroundColor:'#3156A4',color:'white'}}>Real-Time Feedback</h5>
                  <p className="card-text p-3">Get instant feedback on quiz submissions. Understand your strengths and areas for improvement with detailed score reports and feedback on each question.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      

      <footer className="footer-section py-4">
        <div className="container text-center">
          <p>&copy; 2024 Quiz Master. All rights reserved.</p>
          <div>
            <a href="#" className="mx-2" style={{textDecoration:'none'}}>Privacy Policy</a>
            <a href="#" className="mx-2" style={{textDecoration:'none'}}>Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
