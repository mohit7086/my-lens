import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import ImgGallery from './components/ImgGallery';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home/>} />
          {/* Define your ImgGallery routes based on your requirements */}
          <Route path="/ImgGallery" element={<ImgGallery />} />
          <Route path="/ImgGallery/:GetGenre" element={<ImgGallery />} />
          <Route path="/ImgGallery/:GetGenre/:GetAlbum" element={<ImgGallery />} />
        </Routes>
      </BrowserRouter>
    </div>
  );    
}

export default App;
