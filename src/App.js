import './App.css';
import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './components/Home';
import ImgGallery from './components/ImgGallery';



function App() {

  return (
    <div className="main">
    <BrowserRouter>
    <Nav style = {{ZIndex : "1000"}}/ >
      <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/ImgGallery" element={<ImgGallery />} />
      <Route path="/ImgGallery/:GetGenre" element={<ImgGallery />} />
      <Route path="/ImgGallery/:GetGenre/:GetAlbum" element={<ImgGallery  />} />

      
      </Routes>

    </BrowserRouter>
      
      
    </div>
  );    
}

export default App;
