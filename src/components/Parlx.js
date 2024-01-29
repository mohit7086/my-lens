import React from "react";
import { Parallax } from "react-parallax";
import Mouse from "./mouse"

// JavaScript object representing the styles
const styles = {
    content: {
      height: '100vh',
      color: 'rgb(243, 241, 241)',
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    textContent: {
      position: 'relative',
      // left: '50%',
      // top: '80%',
      // transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      backgroundColor: 'rgba(128, 128, 128, 0)',
      borderRadius: '5px',
      padding: '8px',
    },
    textContentH3: {
      fontSize: '50px',
      fontWeight: 7,
      marginBottom: '17px',
    },

    textContentP:{
        fontSize: '35px',
        fontWeight: '0.8'
    }
  };
  
 
  
export default function Parlx(props) {
  const { BG, Type, Text } = props;
  return (
    <div style={{bottom:"10px"}}>
      <Parallax strength={-200} bgImage={BG}>
        <div className="content" style = {styles.content}>
          <div className="text-content" style = {styles.textContent}>
            <h3 style = {styles.textContentH3}>{Type}</h3>
            <p style = {styles.textContentP}>{Text}</p>
          </div>
          <div className="mouse1" style = {{position : "relative", width:"100vw", display:"flex",height:"50px", justifyContent:"center",bottom:"10px"}}>
           <Mouse/>
          </div>
        </div>
      </Parallax>
    </div>
  );
}
