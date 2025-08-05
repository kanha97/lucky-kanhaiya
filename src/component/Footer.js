import { Link } from "react-router-dom";

    // Footer Component
    function Footer() {
      return (
        <footer className="bg-gray-800 text-white py-8 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">AI Hub</h3>
                <p className="text-gray-400">Discover the latest AI models and tools for your projects.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
                  <li><Link to="/models" className="text-gray-400 hover:text-white transition">Models</Link></li>
                  <li><Link to="/about" className="text-gray-400 hover:text-white transition">About</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Connect</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-twitter text-xl"></i></a>
                  <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-github text-xl"></i></a>
                  <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-linkedin text-xl"></i></a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} AI Hub. All rights reserved.</p>
            </div>
          </div>
        </footer>
      );
    }
export default Footer;