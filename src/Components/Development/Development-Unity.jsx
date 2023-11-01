import React from 'react'
import unity from './../../assets/images/Development/unitybg.png'
function DevelopmentUnity() {
  return (
    <div className="unity bg-black position-relative">
      <div className="">
        <img src={unity} className="w-100" alt="img" />
        <div className="abs">
          <h2 className="title">Building Brand Unity</h2>
          <p className="description  col-12 col-sm-8    col-md-6 col-lg-5 me-auto ">
            Brand unity is a way to project a consistent vision to your
            customers. We’re always ready to handle it on all levels.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DevelopmentUnity