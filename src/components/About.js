import React from "react";
import Profile from "./Profile";
import Parlx from "./Parlx";
// import main2 from "../Sun2.jpg"

const mainI =
  "https://img.playbook.com/_ri3Q0TeErPlgkqwUtESGA3RAGlEhRHW5JpGJLXSS8M/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2I2Yzc3NGZh/LTExMjMtNGI0OS04/Y2IyLTRjMzZmNDc4/MTEyNA";

function About() {
  return (
    <div className="aboutSec">
      {/* <Parlx Type="________ About Me ________" Text="Mohit Kumar" BG={main2} /> */}
      <Parlx Type="________ About Me ________" Text="Mohit Kumar" BG={mainI} />
      <div className="t2" >
        <Profile />
      </div>
      <div
        className="profileD"
        style={{
          textAlign: "center",
          left: "50%",
          transform: "translate(-50%) ",
          position: "absolute",
          backgroundColor: "rgba(128, 128, 128, 0.564)",
          bordeRadius: "5px ",
          padding: "10px",
        }}
      >
        Exquisite Amid the Extraordinary Aarzoo Khurana, is a Wildlife
        Photographer and mentor. She strives to find beauty in the elements of
        nature and paint through the lens colours of nature in all their
        splendour. Her photos are a dance of light and shadows portraying some
        of the most engaging moments one might witness in the wild. Exquisite
        Amid the Extraordinary Aarzoo Khurana, is a Wildlife Photographer and
        mentor. She strives to find beauty in the elements of nature and paint
        through the lens colours of nature in all their splendour. Her photos
        are a dance of light and shadows portraying some of the most engaging
        moments one might witness in the wild. Exquisite Amid the Extraordinary
        Aarzoo Khurana, is a Wildlife Photographer and mentor. She strives to
        find beauty in the elements of nature and paint through the lens colours
        of nature in all their splendour. Her photos are a dance of light and
        shadows portraying some of the most engaging moments one might witness
        in the wild. Exquisite Amid the Extraordinary Aarzoo Khurana, is a
        Wildlife Photographer and mentor. She strives to find beauty in the
        elements of nature and paint through the lens colours of nature in all
        their splendour. Her photos are a dance of light and shadows portraying
        some of the most engaging moments one might witness in the wild.
        Exquisite Amid the Extraordinary Aarzoo Khurana, is a Wildlife
        Photographer and mentor. She strives to find beauty in the elements of
        nature and paint through the lens colours of nature in all their
        splendour. Her photos are a dance of light and shadows portraying some
        of the most engaging moments one might witness in the wild. Exquisite
        Amid the Extraordinary Aarzoo Khurana, is a Wildlife Photographer and
        mentor. She strives to find beauty in the elements of nature and paint
        through the lens colours of nature in all their splendour. Her photos
        are a dance of light and shadows portraying some of the most engaging
        moments one might witness in the wild.
      </div>
    </div>
  );
}

export default About;
