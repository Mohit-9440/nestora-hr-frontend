import React, { useState } from 'react';
import api from '../services/api';

function EmployeeHome() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');

  const applyLeave = async () => {
    await api.post('/leaves', {
      userId: user.id,
      startDate,
      endDate,
      reason,
    });
    alert('Leave Applied');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Employee Home</h2>
      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      <input value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Reason" />
      <button onClick={applyLeave}>Apply Leave</button>
    </div>
  );
}

export default EmployeeHome;