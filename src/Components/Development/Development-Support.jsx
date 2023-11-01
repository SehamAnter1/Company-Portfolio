
import React from "react";

import support from "./../../assets/images/Development/support.png";
function DevelopmentSupport() {
  return (
    <div className="support development-header bg-black ">
      <div className="container">
        <div className="web mobile py-5  d-grid justify-content-center text-center align-items-center mx-auto">
          <div className="content d-grid   text-start  py-5 col-10 col-sm-9 col-md-12 col-lg-9  col-xl-9 col-xxl-8  mx-auto">
            <h2 className="title">Full Project Support</h2>
            <img src={support} className="w-100" alt="img" />
            <div className="d-grid d-md-flex gap-3 gap-md-0 mx-md-5">
              <div className="left col-6">
                <h2 className="subtitle">Fast changes</h2>
                <p className="description col-10 me-auto ">
                  It’s a cliché to say we live in a rapidly changing world. But
                  the market is indeed evolving fast, and businesses that don’t
                  adapt go extinct. We’re always willing to update the existing
                  product to suit your new vision.
                </p>
              </div>
              <div className="right col-6 ">
                <h3 className="subtitle">Continuous improvements</h3>
                <p className="description col-10 me-auto">
                  Even perfectionists like us have to accede that there’s no
                  limit to perfection. We know all too well that updates are not
                  always synonymous with improvements. Our mission at The Three
                  Gates is to provide a consistent enhancement curve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevelopmentSupport;