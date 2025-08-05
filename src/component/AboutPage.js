import "../App.css";

// About Page Component
function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-gray-100">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-6">
            About Lucky Kanhaiya AI Hub
          </h1>

          {/* Mission Section */}
          <div className="bg-gray-800 rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Our Mission
            </h2>
            <p className="text-gray-300 mb-6">
              Lucky Kanhaiya AI Hub was created to provide a centralized
              platform for discovering and exploring the latest advancements in
              artificial intelligence. Our goal is to make AI accessible to
              everyone — developers, creatives, and business professionals.
            </p>
            <p className="text-gray-300">
              We curate the most innovative AI models across various categories,
              offering detailed insights, use cases, and resources to help you
              integrate these technologies into your projects.
            </p>
          </div>

          {/* Audience Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Developers */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                For Developers
              </h3>
              <p className="text-gray-300 mb-4">
                Access comprehensive documentation, API references, and
                integration guides for each model.
              </p>
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-blue-400">
                  <i className="fas fa-code mr-2"></i>
                  Explore our developer resources to get started with AI
                  integration.
                </p>
              </div>
            </div>

            {/* Creatives */}
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                For Creatives
              </h3>
              <p className="text-gray-300 mb-4">
                Discover how AI can enhance your creative process, from
                generating artwork to writing assistance.
              </p>
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-purple-300">
                  <i className="fas fa-paint-brush mr-2"></i>
                  See examples of AI-generated content and creative
                  applications.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              The Team
            </h2>
            <p className="text-gray-300 mb-6">
              Lucky Kanhaiya AI Hub is developed by a passionate team of AI
              enthusiasts, developers, and designers committed to making AI
              technology accessible and impactful.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Member 1 */}
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4"></div>
                <h4 className="font-semibold text-white">Alex Johnson</h4>
                <p className="text-gray-400 text-sm">Founder & Lead Developer</p>
              </div>
              {/* Member 2 */}
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4"></div>
                <h4 className="font-semibold text-white">Maria Chen</h4>
                <p className="text-gray-400 text-sm">AI Researcher</p>
              </div>
              {/* Member 3 */}
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4"></div>
                <h4 className="font-semibold text-white">Sam Wilson</h4>
                <p className="text-gray-400 text-sm">UX Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
