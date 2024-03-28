import React, { useEffect, useState } from "react";
import Images from "./Img.json";
import Parlx from "./Parlx";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ImgViewer from "./ImgViewer";

import "./ImgGallery.css";
const GalleryStyle = {
 
 
};

const OverlayStyle = {
  
};

function ImgGallery() {
  const { GetGenre, GetAlbum } = useParams();
  const [isHoverIndex, setIsHoverIndex] = useState(null);
  const [IMG, setIMG] = useState(Images);
  const [showViewer, setShowViewer] = useState(false);
  const [viewID, setViewID] = useState(0);
  const [viewAlbum, setViewAlbum] = useState("");
  const [viewGenre, setViewGenre] = useState("");

  useEffect(() => {
    let filteredImages = Images;

    if (GetAlbum !== undefined) {
      filteredImages = Images.filter(
        (item) => item.genre === GetGenre && item.Album === GetAlbum
      );
    } else if (GetGenre !== undefined) {
      filteredImages = Images.filter((item) => item.genre === GetGenre);
    }

    setIMG(filteredImages);
  }, [GetGenre, GetAlbum]);

  const handleMouseEnter = (index) => {
    setIsHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setIsHoverIndex(null);
  };

  const HoverStyles = (index) => ({
    zIndex: isHoverIndex === index ? "99" : "1",
    filter: isHoverIndex === index ? "blur(1.5px)" : "blur(0)",
    opacity: "1",
    transition: "filter 0.5s, scale 75s",
    scale: isHoverIndex === index ? "2" : "1",
  });

  const handleViewer = (index) => {
    setShowViewer(true);
    console.log(showViewer);
    setViewID(index);
    setViewAlbum(GetAlbum);
    setViewGenre(GetGenre);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}

      
    >
      <div className="bg">
        <Parlx
          Type={`________${IMG[0]?.Album}________`}
          Text=" "
          BG={IMG[0]?.imgsource}
        />
      </div>
      <motion.div className="Gallery" style={GalleryStyle}
      initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}>
        {IMG.map((Img, index) => (
          <div
            className="galleryItem"
            key={Img.id}
            style={{ marginBottom: "5px", position: "relative" }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleViewer(index)} // Use the function with index
          >
            <div className="IMGC" style={{ overflow: "hidden" }}>
              <img
                alt="..."
                src={Img.imgsource}
                style={HoverStyles(index)}
                placeholder={Img.imgsource}
              />
            </div>

            <div
              className="overlay"
              style={{
                ...OverlayStyle,
                opacity: isHoverIndex === index ? "1" : "0", // Opacity based on hover state
                transition:
                  isHoverIndex === index
                    ? "opacity 0.6s, transform 0.6s"
                    : "opacity 0.2s, transform 0.2s", // Adjusted transition duration
              }}
            >
              <div className="caption" style={{ fontSize: "1.7rem" }}>
                {Img.caption}
              </div>
              <div className="Album">{Img.Album}</div>
              {/* <div className="genre">{Img.genre}</div> */}
            </div>
          </div>
        ))}
      </motion.div>

      {showViewer && (
        <motion.div
          className="ImgViewContainer"
          // onClick={() => setShowViewer(false)}
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            zIndex: "1000000",
            backgroundColor: "rgba(106 105 105 / 81%)",
            backdropFilter: "blur(15px)",
            // border: "5px solid blue",
          }}
        > 
          <motion.div
          initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0}}
            transition={{ duration: 0.4 }}
            className="ImgView"
            style={{ position: "relative", width: "100%", height: "100%",  }}
            onClick={(event) => {
    if (window.getComputedStyle(event.target).cursor !== 'pointer') {
        setShowViewer(false);
    }
}}
          >
            <ImgViewer index={viewID} Album={viewAlbum} Genre={viewGenre} />
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default ImgGallery;
