import React from "react";
import Images from "./Img.json";
import { Link } from "react-router-dom";
import "./Dropdown2.css";

import "./Nav.css";

export default function Dropdown(props) {
  const { GenreName, dropDownHeight } = props;

  const AlbumStyle = {
    // backgroundColor: "rgba(33, 50, 50, 0.641)",
    width: "200px",
    position: "absolute",
    top: `${dropDownHeight * 25}px`,
    right: "-90%",
    padding: "5px",
  };

  const uniqueAlbums = new Set();

  return (
    <div>
      <ul className="Album" style={AlbumStyle}>
        {Images.filter((item) => item.genre === GenreName).map((item) => {
          const albumName = item.Album;

          // Check if the album is already added to the set
          if (!uniqueAlbums.has(albumName)) {
            uniqueAlbums.add(albumName);

            // Render the album only if it's unique
            return (
              <li style={{ cursor: "pointer" }} key={albumName}>
                
                <Link to={`/ImgGallery/${GenreName}/${albumName}`}> {albumName} </Link>
              </li>
            );
          }

          return null; // Skip rendering for duplicate albums
        })}
      </ul>
    </div>
  );
}
