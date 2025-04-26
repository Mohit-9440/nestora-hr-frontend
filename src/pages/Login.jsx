import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post('/login', { email, password });
      localStorage.setItem('user', JSON.stringify(res.data));
      if (res.data.role === 'admin') navigate('/admin');
      else navigate('/employee');
    } catch (error) {
      alert('Invalid Credentials');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Login</h2>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <br />
      <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;