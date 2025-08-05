import { Link } from "react-router-dom";

// Footer Component - Dark Theme
function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-10 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Lucky Kanhaiya AI Hub</h3>
            <p className="text-gray-400">Explore innovative AI models and tools for development and creativity.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="/models" className="text-gray-400 hover:text-blue-400 transition duration-300">Models</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-400 transition duration-300">About</Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Connect</h4>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-sky-400 transition duration-300">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-100 transition duration-300">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Lucky Kanhaiya AI Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
