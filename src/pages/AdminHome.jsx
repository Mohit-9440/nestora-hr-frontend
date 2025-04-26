import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getAllLeaves, approveLeave } from "../services/api";

function AdminHome() {
  const [leaves, setLeaves] = useState([]);

  const fetchLeaves = async () => {
    try {
      const res = await getAllLeaves();
      setLeaves(res.data);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch leaves");
    }
  };

  useEffect(() => {
    fetchLeaves();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await approveLeave(id, status);
      fetchLeaves(); // Refresh leaves after status change
    } catch (error) {
      console.error(error);
      alert("Failed to update leave status");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg space-y-6">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6">
            Admin Dashboard - Manage Leaves
          </h2>

          {leaves.length === 0 ? (
            <p className="text-gray-600 text-center">No leave applications found.</p>
          ) : (
            <div className="space-y-4">
              {leaves.map((leave) => (
                <div
                  key={leave._id}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-300"
                >
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-gray-800">
                      {leave.userId?.name}
                    </span>
                    <span className="text-gray-600">{leave.reason}</span>
                    <span
                      className={`mt-1 text-sm font-semibold ${
                        leave.status === "approved"
                          ? "text-green-600"
                          : leave.status === "rejected"
                          ? "text-red-500"
                          : "text-yellow-500"
                      }`}
                    >
                      {leave.status.charAt(0).toUpperCase() + leave.status.slice(1)}
                    </span>
                  </div>

                  <div className="flex gap-2 mt-4 md:mt-0">
                    <button
                      onClick={() => updateStatus(leave._id, "approved")}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateStatus(leave._id, "rejected")}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AdminHome;