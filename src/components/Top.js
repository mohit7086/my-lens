import React, { useState, useEffect } from 'react';
import './Top.css';

function Top() {
  const [showScroll, setShowScroll] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 0) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goTop = () => {
    window.scrollTo({ top: 0 });
  };

  const totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollProgress = (scrollY / totalScrollableHeight) * 100;

  const topStyle = {
    display: showScroll ? 'grid' : 'none',
    position: 'fixed',
    bottom: 0,
    right: 0,
    margin: '1rem',
    cursor: 'pointer',
    background: `conic-gradient(rgb(90, 97, 99) ${scrollProgress}%, rgb(208, 190, 190) ${scrollProgress}%)`,
  };

  return (
    <div className='top' style={topStyle}>
      <div className="progress">
        <i className="fa-solid fa-arrow-up fa-large" onClick={goTop}></i>
      </div>
    </div>
  );
}

export default Top;
