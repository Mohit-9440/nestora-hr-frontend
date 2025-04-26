import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { applyLeave as applyLeaveAPI } from "../services/api";

function EmployeeHome() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");

  const handleApplyLeave = async () => {
    await applyLeaveAPI({
      userId: user.id,
      startDate,
      endDate,
      reason,
    });
    alert("Leave Applied");
  };

  return (
    <>
      {" "}
      <Navbar />
      <div className="p-6">
        <h2>Employee Home</h2>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <input
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Reason"
        />
        <button onClick={handleApplyLeave}>Apply Leave</button>
      </div>
    </>
  );
}

export default EmployeeHome;
