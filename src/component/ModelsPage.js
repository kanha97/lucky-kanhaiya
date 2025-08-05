import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

// Models Page Component
function ModelsPage() {
  const [activeTab, setActiveTab] = useState('text');
  const navigate = useNavigate();

  const aiModels = {
    text: [
      { id: 'gpt-4', name: 'GPT-4', description: 'Advanced text generation model', link: '/models/text/gpt-4', icon: 'fa-comment-dots' },
      { id: 'claude', name: 'Claude', description: 'AI assistant by Anthropic', link: '/models/text/claude', icon: 'fa-robot' },
      { id: 'llama', name: 'LLaMA', description: 'Open source language model', link: '/models/text/llama', icon: 'fa-book' },
      { id: 'palm', name: 'PaLM', description: 'Google Pathways Language Model', link: '/models/text/palm', icon: 'fa-google' }
    ],
    image: [
      { id: 'dalle', name: 'DALL·E 3', description: 'Text-to-image generation', link: '/models/image/dalle', icon: 'fa-image' },
      { id: 'midjourney', name: 'Midjourney', description: 'AI art generation', link: '/models/image/midjourney', icon: 'fa-paint-brush' },
      { id: 'stable-diffusion', name: 'Stable Diffusion', description: 'Open source image model', link: '/models/image/stable-diffusion', icon: 'fa-magic' },
      { id: 'imagen', name: 'Imagen', description: 'Google text-to-image model', link: '/models/image/imagen', icon: 'fa-images' }
    ],
    video: [
      { id: 'sora', name: 'Sora', description: 'Text-to-video generation', link: '/models/video/sora', icon: 'fa-video' },
      { id: 'runway', name: 'Runway', description: 'AI video editing tools', link: '/models/video/runway', icon: 'fa-film' },
      { id: 'pika', name: 'Pika', description: 'AI video generation', link: '/models/video/pika', icon: 'fa-play-circle' },
      { id: 'synthesia', name: 'Synthesia', description: 'AI video avatars', link: '/models/video/synthesia', icon: 'fa-user-tie' }
    ]
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(`/models/${tab}`);
  };

  return (
    <div className="page-container bg-black min-h-screen text-white">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-white mb-8">AI Model Collection</h1>

        <div className="border-b border-gray-700 mb-8">
          <div className="flex space-x-8">
            <button
              onClick={() => handleTabChange('text')}
              className={`pb-3 px-1 transition ${activeTab === 'text' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-white'}`}
            >
              <i className="fas fa-comment-dots mr-2"></i>
              Text Models
            </button>
            <button
              onClick={() => handleTabChange('image')}
              className={`pb-3 px-1 transition ${activeTab === 'image' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400 hover:text-white'}`}
            >
              <i className="fas fa-image mr-2"></i>
              Image Models
            </button>
            <button
              onClick={() => handleTabChange('video')}
              className={`pb-3 px-1 transition ${activeTab === 'video' ? 'text-green-400 border-b-2 border-green-400' : 'text-gray-400 hover:text-white'}`}
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
              className="model-card bg-gray-900 rounded-lg shadow hover:shadow-xl hover:bg-gray-800 p-6 transition"
            >
              <div className={`text-4xl mb-4 ${activeTab === 'text' ? 'text-blue-400' : activeTab === 'image' ? 'text-purple-400' : 'text-green-400'}`}>
                <i className={`fas ${model.icon}`}></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{model.name}</h3>
              <p className="text-gray-400 mb-4">{model.description}</p>
              <div className="text-blue-400 font-medium hover:underline">View Details →</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ModelsPage;
