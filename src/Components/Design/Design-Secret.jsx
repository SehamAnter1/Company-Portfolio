import React from 'react'
import designsecretview from "./../../assets/images/design-secret-view.png";
import Whatisoursecret from './What-is-our-secret';
import Device from './Device';
function DesignSecret() {
    return (
      <div className="design-secret py-5 d-grid  gap-5">
        <div className="view d-flex justify-content-center  py-5">
          <div className="container py-5">
            <img
              className="w-75 d-flex mx-auto"
              src={designsecretview}
              alt="designsecretview"
            />
          </div>
        </div>
        <div className="circle d-flex mx-auto w-100 py-5">
          <div className="container d-grid gap-5">
            <div className="row  justify-content-space-around col-10 mx-auto">
              <span className="btn circle-btn col ">Growth</span>
              <span className="btn circle-btn col">Innovation</span>
            </div>
            <div className="row justify-content-space-around">
              <span className="btn circle-btn col">Efficiency</span>
              <span className="btn circle-btn col  ">Synetgy</span>
              <span className="btn circle-btn col">Awareness</span>
            </div>
            <div className="row justify-content-space-around col-10 mx-auto">
              <span className="btn circle-btn col">Loyalty</span>
              <span className="btn circle-btn col">Trust</span>
            </div>
          </div>
            </div>
        <Whatisoursecret />
        <Device/>
      </div>
    );
}

export default DesignSecret