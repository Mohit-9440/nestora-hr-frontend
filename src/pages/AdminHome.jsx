import React, { useEffect, useState } from 'react';
import api from '../services/api';

function AdminHome() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    fetchLeaves();
  }, []);

  const fetchLeaves = async () => {
    const res = await api.get('/leaves');
    setLeaves(res.data);
  };

  const updateStatus = async (id, status) => {
    await api.patch(`/leaves/${id}`, { status });
    fetchLeaves();
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Admin Home</h2>
      {leaves.map((leave) => (
        <div key={leave._id}>
          <p>{leave.userId.name} - {leave.reason} ({leave.status})</p>
          <button onClick={() => updateStatus(leave._id, 'approved')}>Approve</button>
          <button onClick={() => updateStatus(leave._id, 'rejected')}>Reject</button>
        </div>
      ))}
    </div>
  );
}

export default AdminHome;