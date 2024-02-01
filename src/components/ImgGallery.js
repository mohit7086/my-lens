import React, { useEffect, useState } from "react";
import Images from "./Img.json";
import Parlx from "./Parlx";
import { useParams } from "react-router-dom";

const GalleryStyle = {
  columnCount: 3,
  columnGap: "5px",
  position: "relative",
  top:"5px",
  marginLeft: "5px", // Add left margin
  marginRight: "5px"
  
};

const OverlayStyle = {
  backdropFilter: "blur(1.9px)",
  height: "100%",
  width: "100%",
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  top: "0%",
  flexDirection: "column",
  fontFamily: "'Comfortaa', sans-serif",

  
  // left: "10%",
  // right: "10",
  opacity: "0.8",
  transition: "transform 0.5s",
  backgroundColor: "rgba(0,0,0,0.4) ",
 

};

function ImgGallery() {
  const { GetGenre, GetAlbum } = useParams();
  const [IMG, setIMG] = useState(Images);
  const [isHoverIndex, setIsHoverIndex] = useState(null);

  useEffect(() => {
    if (GetAlbum !== undefined) {
      setIMG(Images.filter((item) => item.genre === GetGenre && item.Album === GetAlbum));
    } else if (GetGenre !== undefined) {
      setIMG(Images.filter((item) => item.genre === GetGenre));
    }
  }, [GetGenre, GetAlbum, setIMG]);

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
    transition: "filter 0.5s"
   
  });

  return (
    <>
      <div className="bg">
        <Parlx Type={`________${IMG[0]?.Album}________`} Text=" " BG={IMG[0]?.imgsource} />
      </div>
      <div className="Gallery" style={GalleryStyle}>
        {IMG.map((Img, index) => (
          <div
            className="galleryItem"
            key={Img.id}
            style={{
              marginBottom: "5px",
              position: "relative",
              
            
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img alt="..." src={Img.imgsource} style={HoverStyles(index)} />
            {(
              <div className="overlay" style={{
    ...OverlayStyle,
    opacity: isHoverIndex === index ? "1" : "0", // Opacity based on hover state
    transition: isHoverIndex === index ? "opacity 0.6s, transform 0.6s" : "opacity 0.2s, transform 0.2s" // Adjusted transition duration
  }}>
                <div className="caption" style={{fontSize:"1.7rem"}}>{Img.caption}</div>
                <div className="Album">{Img.Album}</div>
                {/* <div className="genre">{Img.genre}</div> */}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default ImgGallery;
