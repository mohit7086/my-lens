import React from "react";
import { Parallax } from "react-parallax";

// JavaScript object representing the styles
const styles = {
    content: {
      height: '100vh',
      color: 'rgb(243, 241, 241)',
      backgroundSize: 'cover',
    },
    textContent: {
      position: 'absolute',
      left: '50%',
      top: '80%',
      transform: 'translate(-50%, -50%)',
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
    <div>
      <Parallax strength={-200} bgImage={BG}>
        <div className="content" style = {styles.content}>
          <div className="text-content" style = {styles.textContent}>
            <h3 style = {styles.textContentH3}>{Type}</h3>
            <p style = {styles.textContentP}>{Text}</p>
          </div>
        </div>
      </Parallax>
    </div>
  );
}
