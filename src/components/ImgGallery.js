import React, { useEffect } from "react";
import Images from "./Img.json";
import { useState } from "react";
import Parlx from "./Parlx";
import {useParams} from "react-router-dom";




const GalleryStyle = {
  columnCount: 3,
  columnGap: "5px",
  position: "relative",
  borderRadius: "3px",
  //   top:"57px"
};

const OverlayStyle = {
  // backgroundColor: "grey",
  backdropFilter: "blur(1.9px)",
  height: "auto",
  width: "80%",
  // //   zIndex: "1",
  position: "absolute",
  borderRadius: "3px",
  //   display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white", // You can adjust the text color here
  top: "50%",
  left: "10%",
  right: "10",
  //   bottom: 0,
  opacity: "0.8",
  transition: "opacity 0.2s",
};

const InfoIconStyle = {
  // backgroundColor: "blue",
  position: "absolute",
  color: "grey", // You can adjust the text color here
  right: "1%",
  bottom: "0.3%",
  opacity: "0.9",
};

function ImgGallery() {
  const {GetGenre, GetAlbum}  = useParams();

  console.log(GetAlbum);
  const [IMG, setIMG] = useState(Images);

  useEffect(() => {
    if (GetAlbum !== undefined) {
      // Filter by both genre and album
      setIMG(Images.filter((item) => item.genre === GetGenre && item.Album === GetAlbum));
    } else if (GetGenre !== undefined) {
      // Filter only by genre
      setIMG(Images.filter((item) => item.genre === GetGenre));
    }
  }, [GetGenre, GetAlbum]); // Include GetGenre and GetAlbum in the dependency array
  
  
  

  const [isHoverIndex, setIsHoverIndex] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleMouseEnter = (index) => {
    setIsHoverIndex(index);
    setShowDetails(true);
  };
  const handleMouseLeave = () => {
    setIsHoverIndex(null);
    setShowDetails(false);
  };

  const HoverStyles = (index) => {
    const isHovered = isHoverIndex === index;

    return {
      transform: isHovered ? "scale(0.95)" : "scale(1)",
      zIndex: isHovered ? "99" : "1",
      transition: isHovered ? "transform 0.2s" : "transform 0.2s",
      filter: isHovered ? "blur(1.5px)" : "blur(0)",
      opacity: "1",
    };
  };

  return (
    <>


      <div className="bg">

      
        <Parlx
          Type={`________${IMG[0].Album}________`}
          Text=" "
          BG={IMG[0].imgsource}
        />
      </div>
      <div className="Gallery" style={GalleryStyle}>
        {IMG.map((Img, index) => (
          <div
            className="galleryItem"
            key={Img.id}
            style={{
              marginBottom: "5px",
              position: "relative",
              borderRadius: "13px",
              transition:
                isHoverIndex === index ? "transform 0.2s" : "transform 0.2s",
            }}
          >
            <img alt="..." src={Img.imgsource} style={HoverStyles(index)} />

            {/* <ParlxI BG={Img.imgsource} style = {{hieght:"30vh"}}/> */}

            <div
              className="info"
              style={InfoIconStyle}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <i class="fa-solid fa-l fa-info-circle"></i>
            </div>
            {isHoverIndex === index && setShowDetails ? (
              <div className="overlay" style={{ ...OverlayStyle,
              }}>
                <div className="caption">{Img.caption}</div>
                <div className="Album">{Img.Album}</div>
                <div className="genre">{Img.genre}</div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
}

export default ImgGallery;
