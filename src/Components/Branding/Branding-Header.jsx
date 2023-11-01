import React from "react";
import brandingheader from "./../../assets/images/branding/branding-header.png";
import brandingheaderbottom from "./../../assets/images/branding/branding-header-bottom.png";
function BrandingHeader() {
  return (
    <div className="DesignForPeople branding-page-header py-4 " id="overview">
      <div className="branding-header-top-part">
        <div className="container justify-content-start position-relative">
          <img
            src={brandingheader}
            className=" mx-auto  d-flex"
            alt="design-for-people.png"
          />
          <div className="col-12 py-4 branding-page-header-content">
            <h2 className="title text-center">Branding</h2>
            <p className="description col-12 text-center mx-auto col-md-9 col-lg-8">
              The essence of your business
            </p>
          </div>
        </div>
      </div>
      <div className="branding-header-bottom-part py-5">
        <div className="container justify-content-start pt-5">
          <div className="col-12 py-4 branding-page-header-content">
            <h2 className="title text-center py-2 ">We make it</h2>
            <h2 className="title text-center description py-2">Outstanding</h2>
          </div>
        </div>
        <img
          src={brandingheaderbottom}
          className=" mx-auto  d-flex"
          alt="design-for-people.png"
        />
      </div>
    </div>
  );
}

export default BrandingHeader;
