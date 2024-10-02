
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate ,Link} from 'react-router-dom';
import Nav from './Nav';
import '../App.css'


export default function Register() {

  const [name, setName] = useState();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState(); // Initialize as an empty string
  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    setRole(e.target.value); // Directly set the role as the selected value
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Convert role to number before sending to backend
      const roleNumber = role === 'admin' ? 1 : role === 'student' ? 0 : -1;

      // Check if the role is valid
      if (roleNumber === -1) {
        alert('Please select a valid role');
        return;
      }

      await axios.post('http://localhost:9000/auth/register', { name, email, password, role: roleNumber });
      alert('user registered successfully')
      navigate('/login');
    } catch (err) {
      console.error(err);
      alert(err.response.data.msg);
    }
  };

  return (
    <div className='login'>
      <Nav />
      <div className='register-form mx-auto mt-5' style={{width:'400px', backgroundColor:'white', borderRadius:'20px'}}>
      <form onSubmit={handleSubmit} className='pt-5 pb-3 px-3'>
        
      <label className='form-label '>Name</label>
        <input className='form-control mb-4' type='text' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
  
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
          <select className='form-select my-2' value={role} onChange={handleRoleChange}>
            <option value=''>Select Role</option>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" className='btn btn-primary my-2 w-100'>Register</button>
          <p className='form-text fs-6 text-center'>Already have an account ? <Link to='/login' >Sign In</Link></p>

        </form>
      </div>
      
    </div>
  );
}

