import React from "react";
import { Parallax } from "react-parallax";

// JavaScript object representing the styles
// const styles = {
//     content: {
      
//       color: 'rgb(243, 241, 241)',
//     },
//     // textContent: {
//     //   position: 'absolute',
//     //   left: '50%',
//     //   top: '80%',
//     //   transform: 'translate(-50%, -50%)',
//     //   textAlign: 'center',
//     //   backgroundColor: 'rgba(128, 128, 128, 0)',
//     //   borderRadius: '5px',
//     //   padding: '8px',
//     // },
//     // textContentH3: {
//     //   fontSize: '50px',
//     //   fontWeight: 7,
//     //   marginBottom: '17px',
//     // },

//     // textContentP:{
//     //     fontSize: '35px',
//     //     fontWeight: '0.8'
//     // }
//   };
  
 
  
export default function ParlxI(props) {
  const { BG} = props;
  return (
    <div style={{hieght:"30vh"}}>
      <Parallax strength={-200} bgImage={BG}>
      </Parallax>
    </div>
  );
}
