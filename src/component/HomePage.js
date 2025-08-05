import { Link } from "react-router-dom";

// Home Page Component
function HomePage() {
  return (
    <div className="page-container bg-gradient-to-b from-black via-gray-900 to-gray-800 min-h-screen text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore the World of AI
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover cutting-edge AI models across text, image, and video generation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Text Models */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl hover:ring-2 hover:ring-blue-400 transition">
            <div className="text-blue-400 mb-4">
              <i className="fas fa-comment-dots text-4xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Text Models</h3>
            <p className="text-gray-400 mb-4">
              Advanced language models for conversation, writing, and analysis.
            </p>
            <Link to="/models/text" className="text-blue-400 hover:underline">
              Explore Text Models →
            </Link>
          </div>

          {/* Image Models */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl hover:ring-2 hover:ring-purple-400 transition">
            <div className="text-purple-400 mb-4">
              <i className="fas fa-image text-4xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Image Models</h3>
            <p className="text-gray-400 mb-4">
              Generate stunning visuals from text prompts with AI art models.
            </p>
            <Link to="/models/image" className="text-purple-400 hover:underline">
              Explore Image Models →
            </Link>
          </div>

          {/* Video Models */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl hover:ring-2 hover:ring-green-400 transition">
            <div className="text-green-400 mb-4">
              <i className="fas fa-video text-4xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Video Models</h3>
            <p className="text-gray-400 mb-4">
              Create and edit videos with AI-powered tools and generators.
            </p>
            <Link to="/models/video" className="text-green-400 hover:underline">
              Explore Video Models →
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-700 p-8 rounded-lg text-center shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Get Started with AI</h2>
          <p className="text-gray-300 mb-6">
            Whether you're a developer, designer, or content creator, our curated collection of AI models can enhance your workflow.
          </p>
          <Link
            to="/models"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Browse All Models
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
