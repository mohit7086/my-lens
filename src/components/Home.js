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
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
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
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://img.playbook.com/g7lzzrPuhjray9yisGu8pdISAOMzaW-96Hm1FRYCX5U/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzkxMDI4YWMy/LTUyOWQtNGVhZC1i/YmI5LWFlNDg2ZmY0/ODdmMw"
            alt="Image One"
            style={{ height: "100vh" }} // Set image height to 100vh
          />
          <Carousel.Caption>
            <h3>Label</h3>
            <p>Sample T</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
