import React from 'react'

import desktop from "./../../assets/images/Development/desktop.png";
import mobilefirst from "./../../assets/images/Development/mobilefirst.png";
import mobilelast from "./../../assets/images/Development/mobilelast.png";
function DevelopmentTech() {
  return (
    <div className="development-header">
      <div className="container">
        <div
          className="web desktop py-5 mt-5 d-grid justify-content-center text-center align-items-center mx-auto"
          id="desktop"
        >
          <h2 className="title">Desktop Dev</h2>
          <p className="description  col-10 col-sm-9 col-lg-6  col-xl-5 col-xxl-5  mx-auto">
            We develop all kinds of custom desktop designs: websites, landing
            pages, web applications with dashboards, whatever. There’s no limit
            to what can be done.
          </p>
          <img src={desktop} className="w-75 mx-auto" alt="web" />
        </div>
        <div className="web mobile py-5  d-grid justify-content-center text-center align-items-center mx-auto" id='mobile'>
          <h2 className="title">Mobile Dev</h2>
          <p className="description  col-10 col-sm-9 col-lg-8  col-xl-8 col-xxl-5  mx-auto">
            Every business needs a mobile app. There’s no way around it. More
            importantly, what they need is an app that functions flawlessly.
            That’s something we can deliver, whether for iOS, Android, or both
            platforms.
          </p>
          <div className="content d-grid  d-sm-flex text-start  py-5 col-10 col-sm-9 col-lg-9  col-xl-9 col-xxl-8  mx-auto">
            <div className="left col-6">
              <h3 className="title">Anything is possible</h3>
              <p className="description">
                At The Three Gates, the word “impossible” is banned. We can
                build any app and make it easy-to-use and enjoyable to users.
              </p>
              <img src={mobilefirst} alt="img" />
            </div>
            <div className="right col-6  d-flex justify-content-end">
              <img src={mobilelast} className="" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevelopmentTech