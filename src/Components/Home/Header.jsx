import React, { useRef, useState } from "react";

function Header() {
  // const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, y: 0 });

  // const handleMouseMove = (e) => {
 
  //   const { offsetX, offsetY } = e;
  //   setBackgroundPosition({ x: -offsetX, y: -offsetY });
  // };

  // const handleMouseLeave = () => {
  //   setBackgroundPosition({ x: 0, y: 0 });
  // };
  return (
    <div
      className="home-header"
      // onMouseMove={handleMouseMove}
      // onMouseLeave={handleMouseLeave}
      // style={{
      //   "--offsetX": backgroundPosition.x + "px",
      //   "--offsetY": backgroundPosition.y + "px",
      // }}
    >
      <div className="container pt-2">
        <div className="design-about py-4 col-12 col-md-8 col-lg-6 mx-auto d-flex justify-content-center align-items-center text-center flex-column">
          <h2 className="title text-uppercase mt-4">KAIYI NEW VISION</h2>
          <p className="description "> The one that is perfect for you</p>
          <a href="/" className="btn header-btn text-white">
            Learn more
          </a>
        <span className="other text-white py-3">What we do best</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
