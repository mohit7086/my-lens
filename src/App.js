import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import ImgGallery from './components/ImgGallery';
import Top from './components/Top';
import ImgViewer from './components/ImgViewer';
import Test from './components/Test';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import { AnimatePresence } from "framer-motion"

function App() {
 

  return (
    <div className="main">
      <BrowserRouter>
      {/* <Test/> */}
        <Nav />
        <Top />
        <AnimatePresence >
          <Routes location={window.location} key = {window.location.pathname}>
            <Route path="/about" element={<About />} />
            <Route path="/ImgViewer" element={<ImgViewer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/home" element={<Home />} />
            <Route path="/ImgGallery/:GetGenre/:GetAlbum" element={<ImgGallery />} />
            <Route path="/ImgGallery/:GetGenre" element={<ImgGallery />} />
            <Route path="/ImgGallery" element={<ImgGallery />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
}

export default App;
