import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion";
import Images from "./Img.json";
import "./ImgViewer.css"

export default function App({ index, Album, Genre }) {
  const [IMG, setIMG] = useState(Images);

  useEffect(() => {
   
    document.body.style.overflow = 'hidden';
   
    let filteredImages = Images;
    if (Album !== undefined) {
      filteredImages = Images.filter(
        (item) => item.genre === Genre && item.Album === Album
      );
    } else if (Genre !== undefined) {
      filteredImages = Images.filter((item) => item.genre === Genre);
    }
  
   
    setIMG(filteredImages);
  
   
    return () => {
      
      document.body.style.overflow = '';
    };
  }, [Album, Genre]); 
  

  console.log(index, Album, Genre);

  return (
    <motion.div
      
    >
      <style>
        {`
          .carousel-indicators {
            display: none;
          }
          
          
]
        `}
      </style>
      <Carousel fade>
        {IMG.slice(index)
          .concat(IMG.slice(0, index))
          .map((Img, Index) => (
            <Carousel.Item key={Index} >
              <motion.div
                className="contain"
                style={{
                  // border: "5px solid red",
                  
                }}
              >
                <motion.div
                
                  className="cont"
                  style={{
                    // border: "5px solid yellow",
                    
                  }}
                >
                  <img
                    className="d-block  "
                    src={Img.imgsource}
                    alt={`Slide ${Index + 1}`}
                    style={{
                      // height: "80%",
                      // maxWidth: "50%",
                      // display: "block",
                      // objectFit: "contain",
                      cursor: "pointer", // Apply cursor pointer only to the image
                    }}
                  />
                </motion.div>
              </motion.div>
            </Carousel.Item>
          ))}
      </Carousel>
    </motion.div>
  );
}
