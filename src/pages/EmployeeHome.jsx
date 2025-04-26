import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../components/Navbar";
import { applyLeave, getMyLeaves } from "../services/api";

function EmployeeHome() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [reason, setReason] = useState("");
  const [myLeaves, setMyLeaves] = useState([]);

  const fetchMyLeaves = async () => {
    try {
      const res = await getMyLeaves();
      setMyLeaves(res.data);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch leave history");
    }
  };

  useEffect(() => {
    fetchMyLeaves();
  }, []);

  const handleApplyLeave = async () => {
    if (!startDate || !endDate || !reason) {
      alert("Please fill all fields!");
      return;
    }

    try {
      await applyLeave({
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        reason,
      });

      alert("Leave Applied Successfully!");
      setStartDate(null);
      setEndDate(null);
      setReason("");
      fetchMyLeaves();
    } catch (error) {
      console.error(error);
      alert("Failed to apply leave");
    }
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

          {/* Leave History */}
          <div className="mt-10 space-y-4">
            <h3 className="text-2xl font-bold text-indigo-500 mb-4">
              My Leave History
            </h3>

            {myLeaves.length === 0 ? (
              <p className="text-gray-500">No leaves applied yet.</p>
            ) : (
              myLeaves.map((leave) => (
                <div
                  key={leave._id}
                  className="flex justify-between items-center bg-white p-4 rounded-lg shadow"
                >
                  <div>
                    <p className="font-semibold">{leave.reason}</p>
                    <p className="text-sm text-gray-600">
                      {new Date(leave.startDate).toLocaleDateString()} → {new Date(leave.endDate).toLocaleDateString()}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      leave.status === "approved"
                        ? "bg-green-100 text-green-700"
                        : leave.status === "rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {leave.status.charAt(0).toUpperCase() + leave.status.slice(1)}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeHome;