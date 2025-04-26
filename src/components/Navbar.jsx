import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="bg-white/20 backdrop-blur-md p-4 flex justify-between items-center shadow-md">
      <div className="text-2xl font-extrabold text-white drop-shadow-md">
        NestoraHR
      </div>
      <div className="flex items-center gap-4">
        <span className="text-white font-semibold">{user?.name ? `Welcome, ${user.name}` : "Welcome"}</span>
        <button
          onClick={handleLogout}
          className="bg-white text-indigo-600 px-4 py-1 rounded-lg hover:bg-indigo-100 font-bold transition duration-300"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;