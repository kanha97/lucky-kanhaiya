import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css"

    // Models Page Component
    function ModelsPage() {
      const [activeTab, setActiveTab] = useState('text');
      const navigate = useNavigate();
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
      const handleTabChange = (tab) => {
        setActiveTab(tab);
        navigate(`/models/${tab}`);
      };
      
      return (
        <div className="page-container">
          <div className="container mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">AI Model Collection</h1>
            
            <div className="border-b border-gray-200 mb-8">
              <div className="flex space-x-8">
                <button
                  onClick={() => handleTabChange('text')}
                  className={`pb-3 px-1 ${activeTab === 'text' ? 'active-tab' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <i className="fas fa-comment-dots mr-2"></i>
                  Text Models
                </button>
                <button
                  onClick={() => handleTabChange('image')}
                  className={`pb-3 px-1 ${activeTab === 'image' ? 'active-tab' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <i className="fas fa-image mr-2"></i>
                  Image Models
                </button>
                <button
                  onClick={() => handleTabChange('video')}
                  className={`pb-3 px-1 ${activeTab === 'video' ? 'active-tab' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <i className="fas fa-video mr-2"></i>
                  Video Models
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {aiModels[activeTab].map(model => (
                <Link 
                  to={model.link} 
                  key={model.id}
                  className="model-card bg-white rounded-lg shadow-md p-6 transition cursor-pointer"
                >
                  <div className={`text-4xl mb-4 ${activeTab === 'text' ? 'text-blue-500' : activeTab === 'image' ? 'text-purple-500' : 'text-green-500'}`}>
                    <i className={`fas ${model.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{model.name}</h3>
                  <p className="text-gray-600 mb-4">{model.description}</p>
                  <div className="text-blue-500 font-medium hover:underline">View Details →</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      );
    }
    export default ModelsPage;