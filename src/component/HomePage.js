import { Link } from "react-router-dom";
    // Home Page Component
    function HomePage() {
      return (
        <div className="page-container">
          <div className="container mx-auto px-6 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Explore the World of AI</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover cutting-edge AI models across text, image, and video generation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="text-blue-500 mb-4">
                  <i className="fas fa-comment-dots text-4xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Text Models</h3>
                <p className="text-gray-600 mb-4">Advanced language models for conversation, writing, and analysis.</p>
                <Link to="/models/text" className="text-blue-500 font-medium hover:underline">Explore Text Models →</Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="text-purple-500 mb-4">
                  <i className="fas fa-image text-4xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Image Models</h3>
                <p className="text-gray-600 mb-4">Generate stunning visuals from text prompts with AI art models.</p>
                <Link to="/models/image" className="text-purple-500 font-medium hover:underline">Explore Image Models →</Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="text-green-500 mb-4">
                  <i className="fas fa-video text-4xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Video Models</h3>
                <p className="text-gray-600 mb-4">Create and edit videos with AI-powered tools and generators.</p>
                <Link to="/models/video" className="text-green-500 font-medium hover:underline">Explore Video Models →</Link>
              </div>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Get Started with AI</h2>
              <p className="text-gray-600 mb-6">
                Whether you're a developer, designer, or content creator, our curated collection of AI models can enhance your workflow.
              </p>
              <Link to="/models" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition">
                Browse All Models
              </Link>
            </div>
          </div>
        </div>
      );
    }
export default HomePage;