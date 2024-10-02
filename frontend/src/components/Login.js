import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Nav from './Nav';
import '../App.css'


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:9000/auth/login', { email, password });

      // Log the entire response for debugging purposes
      console.log('Response from server:', res);

      const user = res.data;
      console.log('User data:', user); // Debugging: Log the user data

      if (!user || typeof user.role === 'undefined') {
        console.error('Invalid user data:', user);
        alert('Invalid login response');
        return;
      }

      // localStorage.setItem('userId', user._id);

      if (user.role === 1) {
        navigate(`/admin-dashboard/`);
      } else if (user.role === 0) {
        navigate(`/student-dashboard/${user._id}`);
      } else {
        console.error('Unknown user role:', user.role);
        navigate('/error');
      }
    } catch (err) {
      console.error('Error during login:', err);

      // Improved error handling
      if (err.response) {
        console.error('Error response data:', err.response.data);
        alert(err.response.data.msg || 'Login failed');
      } else {
        alert('Login failed. Please try again.');
      }
    }
  };

  return (
    <div className='login'>
     
      <Nav />
      <div className='login-form mx-auto mt-5 ' style={{width:'400px', backgroundColor:'white', borderRadius:'20px'}}>
      <form onSubmit={handleSubmit} className=' pt-5 pb-3 px-3'>
        <label className='form-label '>Email</label>
        <input
          type="email"
          className='form-control mb-4' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <label className='form-label'>Password</label>
        <input
          type="password"
          className='form-control mb-4'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" className='btn btn-primary my-2 w-100'>Login</button>
        <p className='form-text fs-6 text-center'>Don't have an account ? <Link to='/register' >Sign Up</Link></p>
      </form>
      </div>
      
    </div>
  );
}
