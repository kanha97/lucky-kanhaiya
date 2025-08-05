
    // About Page Component
    function AboutPage() {
      return (
        <div className="page-container">
          <div className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">About AI Hub</h1>
              
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  AI Hub was created to provide a centralized platform for discovering and exploring the latest advancements in artificial intelligence. Our goal is to make AI accessible to everyone, from developers to creatives to business professionals.
                </p>
                <p className="text-gray-600">
                  We curate the most innovative AI models across various categories, providing detailed information, use cases, and resources to help you integrate these technologies into your projects.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">For Developers</h3>
                  <p className="text-gray-600 mb-4">
                    Access comprehensive documentation, API references, and integration guides for each model.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-800">
                      <i className="fas fa-code mr-2"></i>
                      Explore our developer resources to get started with AI integration.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">For Creatives</h3>
                  <p className="text-gray-600 mb-4">
                    Discover how AI can enhance your creative process, from generating artwork to writing assistance.
                  </p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-purple-800">
                      <i className="fas fa-paint-brush mr-2"></i>
                      See examples of AI-generated content and creative applications.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Team</h2>
                <p className="text-gray-600 mb-6">
                  AI Hub is developed by a team of AI enthusiasts, developers, and designers passionate about democratizing access to artificial intelligence technologies.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <h4 className="font-semibold text-gray-800">Alex Johnson</h4>
                    <p className="text-gray-600 text-sm">Founder & Lead Developer</p>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <h4 className="font-semibold text-gray-800">Maria Chen</h4>
                    <p className="text-gray-600 text-sm">AI Researcher</p>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <h4 className="font-semibold text-gray-800">Sam Wilson</h4>
                    <p className="text-gray-600 text-sm">UX Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    export default AboutPage;