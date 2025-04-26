import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import EmployeeHome from './pages/EmployeeHome';
import AdminHome from './pages/AdminHome';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/employee" element={<EmployeeHome />} />
      <Route path="/admin" element={<AdminHome />} />
    </Routes>
  );
}

export default App;