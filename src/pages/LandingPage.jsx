import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-indigo-100 via-white to-indigo-200 min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center flex-grow px-6 pt-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-700 leading-tight mb-6">
          Welcome to NestoraHR
        </h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mb-8">
          Simplifying Leave Management and Employee Experience. Empower your HR
          operations with seamless digital workflows.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Login
          </button>
          <button
            onClick={() => window.scrollTo({ top: 900, behavior: "smooth" })}
            className="bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-100 font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Features Section */}
      <section
        id="features"
        className="py-16 px-6 bg-white shadow-inner rounded-t-3xl"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-indigo-700 mb-8">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-indigo-100 p-6 rounded-2xl shadow hover:shadow-md transition">
              <h3 className="text-2xl font-semibold mb-4">
                Simple Leave Application
              </h3>
              <p className="text-gray-600">
                Employees can apply for leaves quickly with start-end dates and
                reasons.
              </p>
            </div>
            <div className="bg-indigo-100 p-6 rounded-2xl shadow hover:shadow-md transition">
              <h3 className="text-2xl font-semibold mb-4">Admin Dashboard</h3>
              <p className="text-gray-600">
                Admins can approve, reject, and monitor employee leaves
                seamlessly.
              </p>
            </div>
            <div className="bg-indigo-100 p-6 rounded-2xl shadow hover:shadow-md transition">
              <h3 className="text-2xl font-semibold mb-4">
                Secure Authentication
              </h3>
              <p className="text-gray-600">
                Secure JWT based login system keeping employee data safe and
                reliable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 px-6 bg-gradient-to-t from-indigo-100 via-white to-indigo-200"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-indigo-700 mb-6">
            About NestoraHR
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            NestoraHR is built for modern organizations aiming to digitally
            transform their HR operations. Our mission is to eliminate
            paperwork, bring transparency to leave management, and give
            employees and HR teams a smooth platform to collaborate better.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        © 2025 NestoraHR. All rights reserved.
      </footer>
    </div>
  );
}

export default LandingPage;
