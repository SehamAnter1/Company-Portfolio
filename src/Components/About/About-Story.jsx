import React from "react";
import pen from "./../../assets/images/About/about-story-pen.png";
function AboutStory() {
  return (
    <div className="about-story" id="">
      <div className="story-content py-5">
        <div className="container py-4">
          <h2 className="title col-10 col-sm-7 col-md-6 mx-auto text-center pb-5 col-lg-4">
            The Ongoing Story of The Three Gates
          </h2>
          <div className="content mx-auto col-11 col-sm-10 col-md-8 col-lg-6 d-flex justify-content-between align-items-center position-relative ">
            <div className="first col-6">
              <h2 className="title col-8 col-sm-6 col-md-5 col-xl-7">
                Setting a clear mission
              </h2>
              <h2 className="title col-8 col-sm-6 col-md-5 col-xl-7">
                Gaining experience
              </h2>
              <h2 className="title col-8 col-sm-6 col-md-5 col-xl-7">
                Overcoming pandemic challenges
              </h2>
              <h2 className="title col-8 col-sm-6 col-md-5 col-xl-7">
                The power of now
              </h2>
            </div>
            <div className="last col-6 d-grid ">
              <p className="description col-11 col-sm-10  col-lg-9 ms-auto">
                We founded The Three Gates to bring together people who shared a
                common passion. Our goal has remained unchanged: to help
                businesses discover the true power of design.
              </p>
              <p className="description col-11 col-sm-10 col-lg-9 ms-auto">
                We cut our teeth on building digital products for major brands
                like Red Ball.
              </p>
              <p className="description col-11 col-sm-10  col-lg-9 ms-auto">
                During the COVID pandemic, we adapted to challenges quickly. Not
                only that, but we also found ways to help our clients navigate
                the new environment and achieve great results.
              </p>
              <p className="description col-11 col-sm-10  col-lg-9 ms-auto">
                We are committed to self- improvement above all else. Whatever
                the future may hold, we feel confident there will be a place for
                us in the twin worlds of design and business.
              </p>
            </div>
            <img src={pen} className="" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutStory;
