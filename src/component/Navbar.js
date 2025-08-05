import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-gray-800 shadow-lg py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo & Brand */}
        <Link to="/" className="flex items-center space-x-3 text-white hover:text-gray-300 transition">
          <i className="fas fa-brain text-2xl text-purple-400"></i>
          <span className="text-xl font-semibold tracking-wide">Lucky Kanhaiya AI Hub</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-gray-300 hover:text-white transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/models"
            className="text-gray-300 hover:text-white transition duration-200"
          >
            Models
          </Link>
          <Link
            to="/about"
            className="text-gray-300 hover:text-white transition duration-200"
          >
            About
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button className="md:hidden text-gray-300 hover:text-white transition">
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
