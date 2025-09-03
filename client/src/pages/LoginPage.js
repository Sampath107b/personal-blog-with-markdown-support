

import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

import './LoginPage.css';

const LoginPage = () => {
  const navigate=useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError]=useState('');
  const [loading,setLoading]=useState(false);

  const handleSubmit = async(event) => {
    event.preventDefault();
    setError('');
    setLoading(true);
    try{
      const response=await axios.post('http://localhost:5000/api/auth/login',{
        username, password,
      })

      localStorage.setItem('token',response.data.token);
      navigate('/admin/dashboard');
    }
    catch(err){
      console.error('login failed',err);
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Login failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
    }
  
    

  return (
    <div className="login-page">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
