import React from 'react'
import Parlx from './Parlx'
import {motion} from "framer-motion";
const mainI =
  "https://img.playbook.com/hmm_tR0d9dUU5_C-p335x8T7Q9pR_3q_A6nJfI_OyxU/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzExOGZjODA2/LWEyNWUtNDE0Zi1h/ZGY2LTEwYjUzYWM5/ZDE3MA"

export default function Contact() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0,transition: {duration: 0.6}}}>
    <Parlx Type="________ Contact Us ________" Text = " " BG={mainI} />
    
    </motion.div>
  )
}
