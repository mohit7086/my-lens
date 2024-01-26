import React from "react";
import Images from "./Img.json";
import "./Nav.css";
import { useState } from "react";
import Dropdown2 from "./Dropdown2";
import { Link } from "react-router-dom";

export default function Dropdown() {
  const [Genres, setGenres] = useState(null);
  const [Index, setIndex] = useState(null);
  

  const GenSet = (i, index) => {
    setGenres(i);
    setIndex(index);
   
  };

  const NGenSet = (i, index) => {
    setGenres(null);
    setIndex(null);
  };

  const showAlbum = true;

  const allGenres = Images.map((item) => item.genre);
  const uniqueGenres = [...new Set(allGenres)];

  console.log(uniqueGenres);

  const list = uniqueGenres.map((item, index) => (
    <li key={index} onMouseEnter={() => GenSet(item, index)}>
      <Link to={`/ImgGallery/${item}`}>{item}</Link>
    </li>
  ));

  return (
    <div style={{ display: "flex" }}>
      <div>
        <ul className="Genre">{list}</ul>
      </div>
      <div>
        {showAlbum ? (
          <Dropdown2 GenreName={Genres} dropDownHeight={Index} />
        ) : null}
      </div>
    </div>
  );
}
