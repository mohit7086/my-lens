import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import {motion} from "framer-motion";


export default function App() {
  return (

    
    <motion.div style={{ height: "100vh" }}
    
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0,transition: {duration: 0.6}}}>
      <style>
        {`
          .carousel-indicators {
            display: none; /* Hide the default carousel indicators */
          }
        `}
      </style>
      <Carousel fade>
        <Carousel.Item interval={1200}>
          <img
            className="d-block w-100"
            src="https://img.playbook.com/g7lzzrPuhjray9yisGu8pdISAOMzaW-96Hm1FRYCX5U/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzkxMDI4YWMy/LTUyOWQtNGVhZC1i/YmI5LWFlNDg2ZmY0/ODdmMw"
            alt="First slide"
            style={{ objectFit: 'cover', height: '100vh' }} // Maintain aspect ratio and cover entire container
          />
        </Carousel.Item>
        <Carousel.Item interval={1200}>
          <img
            className="d-block w-100"
            src="https://img.playbook.com/RHMDfLzq3CigiixdQstBBabBXTgHi02GAEXCb1m5ZNM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzcyZTJjNTA5/LTVjOTktNGFjNC1h/NmU3LWVmNzUyZWJm/ZWIwYw"
            alt="First slide"
            style={{ objectFit: 'cover', height: '100vh' }} // Maintain aspect ratio and cover entire container
          />
        </Carousel.Item>
        <Carousel.Item interval={1200}>
          <img
            className="d-block w-100"
            src="https://img.playbook.com/_ri3Q0TeErPlgkqwUtESGA3RAGlEhRHW5JpGJLXSS8M/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2I2Yzc3NGZh/LTExMjMtNGI0OS04/Y2IyLTRjMzZmNDc4/MTEyNA"
            alt="Second slide"
            style={{ objectFit: 'cover', height: '100vh' }} // Maintain aspect ratio and cover entire container
          />
        </Carousel.Item>
        <Carousel.Item interval={1200}>
          <img
            className="d-block w-100"
            src="https://img.playbook.com/5i4bYrqODaktOutDPXhg2egGo5OjWIHPQI8-GyDxb0I/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2YzMDJhNjRj/LWM0NGYtNDAyMC04/MmNlLTNmOWRlNjlm/MTRiNQ"
            alt="Third slide"
            style={{ objectFit: 'cover', height: '100vh' }} // Maintain aspect ratio and cover entire container
          />
        </Carousel.Item>
        <Carousel.Item interval={1200}>
          <img
            className="d-block w-100"
            src="https://img.playbook.com/VA238oNEP34abPStFirdnmGLLrUMfqKh_wmojxMyfqg/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2M5YWZiYWYy/LTFmNmMtNDQ3Zi04/MTkyLTdhZGM2MWQ5/NTgyYw"
            alt="Fourth slide"
            style={{ objectFit: 'cover', height: '100vh' }} // Maintain aspect ratio and cover entire container
          />
        </Carousel.Item>
      </Carousel>
    </motion.div>
  );
}
