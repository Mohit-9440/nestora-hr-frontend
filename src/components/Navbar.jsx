import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="bg-white/20 backdrop-blur-md p-4 flex justify-between items-center shadow-lg">
      <div className="flex items-center gap-2">
        {/* Logo Circle */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-extrabold w-12 h-12 flex items-center justify-center rounded-full text-2xl shadow-md">
          NH
        </div>

        {/* Logo Text */}
        <div className="flex flex-col leading-none">
          <span className="text-2xl font-extrabold tracking-wide">
            <span className="text-indigo-400">Nestora</span>
            <span className="text-pink-300">HR</span>
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-white font-semibold hidden sm:inline">
          {user?.name ? `Welcome, ${user.name}` : "Welcome"}
        </span>
        <button
          onClick={handleLogout}
          className="bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100 font-bold transition-all duration-300"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
