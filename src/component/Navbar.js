import { Link } from "react-router-dom";
import "../App.css"
    // Navigation Bar Component
    function Navbar() {
      return (
        <nav className="bg-white shadow-md py-4 px-6">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <i className="fas fa-brain text-blue-500 text-2xl"></i>
              <span className="text-xl font-bold text-gray-800">Lucky Kanhaiya AI Hub</span>
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-600 hover:text-blue-500 transition">Home</Link>
              <Link to="/models" className="text-gray-600 hover:text-blue-500 transition">Models</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-500 transition">About</Link>
            </div>
            <button className="md:hidden text-gray-600">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </nav>
      );
    }
    export default Navbar;