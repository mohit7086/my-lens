import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

export default function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Carousel fade>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://img.playbook.com/g7lzzrPuhjray9yisGu8pdISAOMzaW-96Hm1FRYCX5U/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzkxMDI4YWMy/LTUyOWQtNGVhZC1i/YmI5LWFlNDg2ZmY0/ODdmMw"
            alt="Image One"
            style={{ height: "100vh" }} // Set image height to 100vh
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://img.playbook.com/_ri3Q0TeErPlgkqwUtESGA3RAGlEhRHW5JpGJLXSS8M/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2I2Yzc3NGZh/LTExMjMtNGI0OS04/Y2IyLTRjMzZmNDc4/MTEyNA"
            alt="Image Two"
            style={{ height: "100vh" }} // Set image height to 100vh
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://img.playbook.com/5i4bYrqODaktOutDPXhg2egGo5OjWIHPQI8-GyDxb0I/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2YzMDJhNjRj/LWM0NGYtNDAyMC04/MmNlLTNmOWRlNjlm/MTRiNQ"
            alt="Image One"
            style={{ height: "100vh" }} // Set image height to 100vh
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://img.playbook.com/VA238oNEP34abPStFirdnmGLLrUMfqKh_wmojxMyfqg/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2M5YWZiYWYy/LTFmNmMtNDQ3Zi04/MTkyLTdhZGM2MWQ5/NTgyYw"
            alt="Image One"
            style={{ height: "100vh" }} // Set image height to 100vh
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
