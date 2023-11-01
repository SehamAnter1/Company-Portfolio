import React from "react";
import headerfirst from "./../../assets/images/About/header-first.png";
import headerlast from "./../../assets/images/About/header-last.png";
import aboutheaderbottom from "./../../assets/images/logo.png";
function AboutHeader() {
  return (
    <div className="DesignForPeople about-page-header  py-5 " id="overview">
      <div className="about-header-top-part m py-5">
        <div className="container pb-5 justify-content-start position-relative">
          <h2 className="title text-center col-10 col-sm-8 col-md-8 col-lg-6 col-xxl-4 mx-auto">
            The Three Gates is really all about
          </h2>
          <img
            src={headerfirst}
            className=" mx-auto d-flex"
            alt="design-for-people.png"
          />
        </div>
      </div>
      <div className="about-header-bottom-part mt-5 py-5">
        <img
          src={headerlast}
          className=" mx-auto  d-flex w-auto"
          alt="design-for-people.png"
        />
        <h2 className="title col-10 col-sm-7 col-md-4 col-lg-3 col-xxl-3 mx-auto py-4 text-center">
          Love. Design & Branding are our primary languages, but there’s more.
        </h2>
      </div>
    </div>
  );
}

export default AboutHeader;
