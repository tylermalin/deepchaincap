import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import StudioModelPage from './pages/StudioModelPage';
import FocusAreasPage from './pages/FocusAreasPage';
import VenturesPage from './pages/VenturesPage';
import NewsPage from './pages/NewsPage';
import JoinUsPage from './pages/JoinUsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-black text-white font-sans">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/studio-model" element={<StudioModelPage />} />
              <Route path="/focus-areas" element={<FocusAreasPage />} />
              <Route path="/ventures" element={<VenturesPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/join-us" element={<JoinUsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;