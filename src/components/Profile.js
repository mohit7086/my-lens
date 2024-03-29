import React, { useEffect, useState } from "react";

function Profile() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const lowerDivHeight = Math.min(100, scrollPosition / 7) + "vh";

  return (
    <>
      <div className="container" style={{ padding: "20px", width:"100vw" }}>
        <div
          className="lower-div"
          style={{
            height: lowerDivHeight,
            //   backgroundColor: "yellow",
            aspectRatio: "1.99",
            left: "55%",
            position: "relative",
            transform: "translate(-50%) ",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "10px",
            //   backgroundImage: `url(${imageUrl})`,
          }}
        >
          <div
            className="profile"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "90%",
              // backgroundColor: "blue",
              padding: "20px",
              
            }}
          >
            <img
              src="https://img.playbook.com/4ZqFRhaC2JR46PvYDsyUTbfa4B7WUFjVVNkvpuBAMwY/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2VjNzM2N2Mw/LTE1ZTUtNDYyNS1i/MDcxLWZjMGEwZDBj/MTI4NQ"
              alt="profile"
              style={{
                width: "45%",
                height: "auto",
                position: "absolute",
                left: "55%",
                transform: "translate(-50%)",
                filter: "drop-shadow(0 0 0.76rem gray)",
              }}
            />
          </div>
        </div>
      </div>

      
    </>
  );
}

export default Profile;
