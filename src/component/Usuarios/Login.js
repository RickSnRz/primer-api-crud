// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import { useNavigate } from 'react-router-dom'; // import navigate
import './Login.css';

function Login() {

  let navigate = useNavigate();
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Hash the password
    const hashedPassword = CryptoJS.SHA256(password).toString();

    // Here you would typically validate the user's credentials and log them in
    try {
      const res = await axios.put('http://localhost:8092/api/auth/login', {
        email,
        password: hashedPassword,
      });

      if (res.status === 200) {
        console.log('Logged in successfully');
        navigate('/home'); // Redirect to /view-clients
      } else {
        console.log('Failed to log in');
      }
    } catch (error) {
      console.error('An error occurred while logging in', error);
    }
  };

  return (
    <div id="contenedor">
    <div className="contanier col-sm-20 py-5 px-5 shadow ">
    <form onSubmit={(e)=> handleSubmit(e)}>
    <div className="input-group mb-5">
      <label className="input-group-text">
        Email:
        </label>
        <input type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        className="form-control col-sm-6"
        required />
    </div>
    <div className="input-group mb-5">
      <label className="input-group-text">
        Password:
        </label>
        <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        className="form-control col-sm-6"
        required />
      
    </div>
    <div className='row mb-5'>
        <div className='col-sm-2'>
            <button type="submit" 
            className='btn btn-outline-primary btn-lg'>
                Login
            </button>
        </div>
    </div>
    </form>
    </div>
    </div>
  );
}

export default Login;