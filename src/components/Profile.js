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
      <div className="container" style={{ height: "90vh", padding: "20px" }}>
        <div
          className="lower-div"
          style={{
            height: lowerDivHeight,
            //   backgroundColor: "yellow",
            aspectRatio: "1.99",
            left: "50%",
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
              src="https://img.playbook.com/G1AWnzTei2AdedYBM4FHkXMthi-gdw6b_taFwcvQP08/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2RiY2EyYjZl/LWQ5NjYtNDU5OC1i/YWZiLWMwMGVkNDVh/OTVjMQ"
              alt="profile"
              style={{
                width: "30%",
                height: "auto",
                position: "absolute",
                left: "50%",
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
