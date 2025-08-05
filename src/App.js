import logo from './logo.svg';
import './App.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Navbar from './component/Navbar';
import HomePage from './component/HomePage';
import ModelsPage from './component/ModelsPage';
import ModelDetailPage from './component/ModelDetailPage';
import AboutPage from './component/AboutPage';
import Footer from './component/Footer';

function App() {
      return (
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/models" element={<ModelsPage />} />
              <Route path="/models/:category" element={<ModelsPage />} />
              <Route path="/models/:category/:id" element={<ModelDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
            <Footer/>
          </div>
        </BrowserRouter>

      );
    }

export default App;
