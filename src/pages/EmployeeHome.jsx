import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../components/Navbar";
import { applyLeave as applyLeaveAPI } from "../services/api";

function EmployeeHome() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [reason, setReason] = useState("");

  const handleApplyLeave = async () => {
    if (!startDate || !endDate || !reason) {
      alert("Please fill all fields!");
      return;
    }

    await applyLeaveAPI({
      userId: user.id,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      reason,
    });

    alert("Leave Applied Successfully!");

    setStartDate(null);
    setEndDate(null);
    setReason("");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg space-y-6">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6">
            Apply for Leave
          </h2>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Start Date */}
              <div className="relative w-full">
                <DatePicker
                  wrapperClassName="w-full"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select Start Date"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  popperClassName="z-50"
                />
              </div>

              {/* End Date */}
              <div className="relative w-full">
                <DatePicker
                  wrapperClassName="w-full"
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select End Date"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  popperClassName="z-50"
                />
              </div>
            </div>

            <input
              type="text"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Reason for Leave"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <button
              onClick={handleApplyLeave}
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 rounded-lg transition duration-300"
            >
              Apply Leave
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeHome;
