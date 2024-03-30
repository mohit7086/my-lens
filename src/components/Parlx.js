import React from "react";
import { Parallax } from "react-parallax";
import Mouse from "./mouse"
import "./Parlx.css";

// JavaScript object representing the styles

  
 
  
export default function Parlx(props) {
  const { BG, Type, Text } = props;
  return (
    <div style={{bottom:"10px"}}>
      <Parallax strength={-150} bgImage={BG} bgImageStyle = {{width:'1520px',objectFit: 'cover'}} className = "parlx">
        <div className="content" >
          <div className="text-content" >
            <div className = "type1"  >{Type}</div>
            <p >{Text}</p>
          </div>
          <div className="mouse1" >
           <Mouse/>
          </div>
        </div>
      </Parallax>
    </div>
  );
}
