import React, { useState } from 'react';
import ImgViewer from './ImgViewer';

function Test() {
  const [showImgViewer, setShowImgViewer] = useState(false);

  const handleClick = () => {
    setShowImgViewer(true);
    console.log("Test");
  };

  return (
    <div>
      <button onClick={handleClick}>
        Click me
      </button>
      {showImgViewer && <ImgViewer Album="Moon" Genre="Astrophotography" />}
    </div>
  );
}

export default Test;
