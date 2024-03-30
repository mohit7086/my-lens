import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion";
import HomeImg from "./Home.json";
import "./Home.css";

export default function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setImages(HomeImg);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <motion.div
      style={{ height: "100vh" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.7 } }}
    >
      <style>
        {`
          .carousel-indicators {
            display: none; /* Hide the default carousel indicators */
          }
        `}
      </style>
      <Carousel fade>
        {images.map((item) => (
          
          <Carousel.Item key={item.id} >
          <div className="content1">
          <div className="Contain">
            <img
              className="d-block "
              src={item.imgsrc}
              alt={`Slide ${item.id + 1}`}
              
            />
            </div>
           
          </div>
          
            
          </Carousel.Item>
          
          
        ))}
      </Carousel>
    </motion.div>
  );
}
