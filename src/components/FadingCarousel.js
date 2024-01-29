import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

const FadingCarousel = ({ images, interval }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, interval);

    return () => clearInterval(intervalId);
  }, [images, interval]);

  if (!images || images.length === 0) {
    console.error("No images provided to the FadingCarousel component.");
    return null;
  }

  return (
    <Carousel fade={true} interval={null} activeIndex={index}>
      {images.map((image, idx) => (
        <Carousel.Item key={idx}>
          <img className="d-block w-100" src={image.imgsource} alt={`Slide ${idx}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default FadingCarousel;
