import React from 'react';
import ArticleSection from './components/Article/ArticleSection';
import Body from './components/Body';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import './style.css'



function App() {
  
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Body />
      <ArticleSection />
      <Footer />
    </div>
  );
}

export default App;
