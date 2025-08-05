import { Link, useParams } from "react-router-dom";
import "../App.css"

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
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Model Not Found</h1>
          <p className="text-gray-400 mb-6">The requested AI model could not be found.</p>
          <Link to="/models" className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-medium">
            Back to Models
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center mb-8">
          <Link to="/models" className="text-gray-400 hover:text-blue-500 mr-4">
            <i className="fas fa-arrow-left"></i>
          </Link>
          <h1 className="text-3xl font-bold">{model.name}</h1>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className={`text-6xl mb-6 ${category === 'text' ? 'text-blue-500' : category === 'image' ? 'text-purple-400' : 'text-green-400'}`}>
                <i className={`fas ${model.icon}`}></i>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg mb-6 border border-gray-700">
                <h3 className="font-semibold text-white mb-2">Quick Facts</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><i className="fas fa-tag mr-2"></i> Category: {category.charAt(0).toUpperCase() + category.slice(1)}</li>
                  <li><i className="fas fa-calendar mr-2"></i> Released: 2023</li>
                  <li><i className="fas fa-code mr-2"></i> API Available: Yes</li>
                </ul>
              </div>
              <a
                href={`https://example.com/${model.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-medium transition"
              >
                Visit Official Site
              </a>
            </div>

            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold mb-4">About {model.name}</h2>
              <p className="text-gray-300 mb-6">
                {model.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
              </p>

              <h3 className="text-xl font-semibold mb-3">Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  "Advanced " + category + " generation capabilities",
                  "High-quality output with fine-tuned parameters",
                  "Developer-friendly API documentation",
                  "Regular updates and improvements"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold mb-3">Use Cases</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: "Content Creation", desc: "Generate articles, stories, and marketing copy." },
                  { title: "Creative Design", desc: "Create unique visuals and artwork from text." },
                  { title: "Education", desc: "Enhance learning with interactive materials." }
                ].map((useCase, i) => (
                  <div key={i} className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                    <h4 className="font-medium text-white mb-2">{useCase.title}</h4>
                    <p className="text-gray-400 text-sm">{useCase.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelDetailPage;
