import { Link, useParams } from "react-router-dom";
import "../App.css"
    // Model Detail Page Component
    function ModelDetailPage() {
      const { category, id } = useParams();
      const aiModels = {
      text: [
        { id: 'gpt-4', name: 'GPT-4', description: 'Advanced text generation model', link: '/models/gpt-4', icon: 'fa-comment-dots' },
        { id: 'claude', name: 'Claude', description: 'AI assistant by Anthropic', link: '/models/claude', icon: 'fa-robot' },
        { id: 'llama', name: 'LLaMA', description: 'Open source language model', link: '/models/llama', icon: 'fa-book' },
        { id: 'palm', name: 'PaLM', description: 'Google Pathways Language Model', link: '/models/palm', icon: 'fa-google' }
      ],
      image: [
        { id: 'dalle', name: 'DALL·E 3', description: 'Text-to-image generation', link: '/models/dalle', icon: 'fa-image' },
        { id: 'midjourney', name: 'Midjourney', description: 'AI art generation', link: '/models/midjourney', icon: 'fa-paint-brush' },
        { id: 'stable-diffusion', name: 'Stable Diffusion', description: 'Open source image model', link: '/models/stable-diffusion', icon: 'fa-magic' },
        { id: 'imagen', name: 'Imagen', description: 'Google text-to-image model', link: '/models/imagen', icon: 'fa-images' }
      ],
      video: [
        { id: 'sora', name: 'Sora', description: 'Text-to-video generation', link: '/models/sora', icon: 'fa-video' },
        { id: 'runway', name: 'Runway', description: 'AI video editing tools', link: '/models/runway', icon: 'fa-film' },
        { id: 'pika', name: 'Pika', description: 'AI video generation', link: '/models/pika', icon: 'fa-play-circle' },
        { id: 'synthesia', name: 'Synthesia', description: 'AI video avatars', link: '/models/synthesia', icon: 'fa-user-tie' }
      ]
    };
      const model = aiModels[category]?.find(m => m.id === id);
      
      if (!model) {
        return (
          <div className="page-container">
            <div className="container mx-auto px-6 py-12 text-center">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Model Not Found</h1>
              <p className="text-gray-600 mb-6">The requested AI model could not be found.</p>
              <Link to="/models" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition">
                Back to Models
              </Link>
            </div>
          </div>
        );
      }
      
      return (
        <div className="page-container">
          <div className="container mx-auto px-6 py-12">
            <div className="flex items-center mb-8">
              <Link to="/models" className="text-gray-500 hover:text-blue-500 mr-4">
                <i className="fas fa-arrow-left"></i>
              </Link>
              <h1 className="text-3xl font-bold text-gray-800">{model.name}</h1>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className={`text-6xl mb-6 ${category === 'text' ? 'text-blue-500' : category === 'image' ? 'text-purple-500' : 'text-green-500'}`}>
                    <i className={`fas ${model.icon}`}></i>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <h3 className="font-semibold text-gray-800 mb-2">Quick Facts</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li><i className="fas fa-tag mr-2"></i> Category: {category.charAt(0).toUpperCase() + category.slice(1)}</li>
                      <li><i className="fas fa-calendar mr-2"></i> Released: 2023</li>
                      <li><i className="fas fa-code mr-2"></i> API Available: Yes</li>
                    </ul>
                  </div>
                  <a 
                    href={`https://example.com/${model.id}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-500 text-white text-center py-3 rounded-lg font-medium hover:bg-blue-600 transition"
                  >
                    Visit Official Site
                  </a>
                </div>
                
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">About {model.name}</h2>
                  <p className="text-gray-600 mb-6">
                    {model.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span>Advanced {category} generation capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span>High-quality output with fine-tuned parameters</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span>Developer-friendly API documentation</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span>Regular updates and improvements</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Use Cases</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">Content Creation</h4>
                      <p className="text-gray-600 text-sm">Generate articles, stories, and marketing copy.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">Creative Design</h4>
                      <p className="text-gray-600 text-sm">Create unique visuals and artwork from text.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">Education</h4>
                      <p className="text-gray-600 text-sm">Enhance learning with interactive materials.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default ModelDetailPage;