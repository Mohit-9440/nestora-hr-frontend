import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-indigo-100 via-white to-indigo-200 min-h-screen flex flex-col overflow-x-hidden">
      {/* Soft Background Blur */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-indigo-300 via-purple-300 to-indigo-300 opacity-30 rounded-b-full blur-3xl z-0"></div>

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center text-center flex-grow px-6 pt-28">
        <h1
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg"
          data-aos="fade-up"
        >
          Welcome to{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            NestoraHR
          </span>
        </h1>
        <p
          className="text-gray-700 text-lg md:text-xl max-w-2xl mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Streamline Leave Management, simplify HR workflows, and empower your
          employees with a modern, secure platform.
        </p>
        <div className="flex gap-4" data-aos="fade-up" data-aos-delay="400">
          <button
            onClick={() => navigate("/login")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105 duration-300"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-100 font-bold py-3 px-6 rounded-lg transition transform hover:scale-105 duration-300"
          >
            Signup
          </button>
        </div>
      </div>

      {/* Section Divider */}
      <div className="relative w-full">
        <svg
          className="w-full h-32 md:h-48"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L80,122.7C160,149,320,203,480,229.3C640,256,800,256,960,229.3C1120,203,1280,149,1360,122.7L1440,96V320H1360C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320H0Z"
          ></path>
        </svg>
      </div>

      {/* Key Features Section */}
      <section
        id="features"
        className="py-16 px-6 bg-white rounded-t-3xl shadow-inner"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="text-4xl font-bold text-indigo-700 mb-8"
            data-aos="fade-up"
          >
            Key Features
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {[
              {
                title: "Simple Leave Application",
                desc: "Apply leaves in seconds. Easy start/end dates and reason submission.",
              },
              {
                title: "Admin Dashboard",
                desc: "Approve, reject, and manage leaves with a powerful dashboard.",
              },
              {
                title: "Secure Authentication",
                desc: "Protected with JWT-based secure login, ensuring employee data safety.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-indigo-100 p-6 rounded-2xl shadow hover:shadow-2xl hover:scale-105 transform transition duration-300"
                data-aos="zoom-in"
                data-aos-delay={idx * 150}
              >
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose NestoraHR */}
      <section className="py-20 px-6 bg-gradient-to-t from-indigo-50 via-white to-indigo-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className="text-4xl font-bold text-indigo-700 mb-6"
            data-aos="fade-up"
          >
            Why Choose NestoraHR?
          </h2>
          <p
            className="text-lg text-gray-700 mb-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Because your HR team deserves more than Excel sheets and manual
            workflows.
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {[
              {
                title: "Simplicity",
                desc: "Clean interface, minimal steps, zero confusion.",
              },
              { title: "Speed", desc: "Apply or approve leaves in seconds." },
              {
                title: "Security",
                desc: "Enterprise-grade security and data encryption.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex-1 bg-white p-6 rounded-2xl shadow hover:shadow-xl hover:scale-105 transform transition duration-300"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                <h3 className="text-xl font-bold text-indigo-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl font-bold text-indigo-700 mb-6"
            data-aos="fade-up"
          >
            Our Vision
          </h2>
          <p
            className="text-lg text-gray-700 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            At NestoraHR, we dream of a world where employee management is
            stress-free, fast, and efficient. We empower organizations to create
            transparent, engaging HR systems that bring the best out of their
            people.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm bg-gradient-to-t from-white via-indigo-50 to-white mt-10">
        © 2025 NestoraHR. Crafted with 💙 for HR Teams.
      </footer>
    </div>
  );
}

export default LandingPage;
