import React from 'react'
import one from "./../../assets/images/branding/clients/one.png";
import two from "./../../assets/images/branding/clients/two.png";
import three from "./../../assets/images/branding/clients/three.png";
import four from "./../../assets/images/branding/clients/four.png";
import five from "./../../assets/images/branding/clients/five.png";
import six from "./../../assets/images/branding/clients/six.png";
import seven from "./../../assets/images/branding/clients/seven.png";
import eight from "./../../assets/images/branding/clients/eight.png";
import nine from "./../../assets/images/branding/clients/nine.png";
function OurClients() {
    return (
      <div className="our-clients py-5">
        <div className="container-fluid py-3 p-0">
            <div className="container">
            <h2 className="title text-black fs-1 ms-5 py-5">We work with all kinds of clients</h2>
            </div>
          <div className="row ">
            <div className="first d-grid d-md-flex gap-5 py-2  px-4 mx-auto px-sm-2 align-items-center">
              <div className="col d-grid gap-5">
                <img
                  src={one}
                  className="d-flex col-9 col-md-9 col-md-10 col-lg-10 mx-auto  me-md-0"
                  alt="img"
                />
                <img
                  src={three}
                  className="d-flex col-9 col-sm-6 col-md-8 col-lg-8 mx-auto  me-md-0"
                  alt="img"
                />
              </div>
              <div className="col d-grid gap-5">
                <img
                  src={two}
                  className="d-flex  mx-auto  ms-md-0 "
                  alt="img"
                />
                <img
                  src={four}
                  className="d-flex col-10 col-10 col-sm-8 col-lg-10 mx-auto  ms-md-0"
                  alt="img"
                />
              </div>
            </div>

            <div className="second d-grid d-md-flex gap-5 py-5 align-items-center">
              <img
                src={five}
                className="col-10 col-sm-8 col-md-7 col-lg-7 "
                alt="img"
              />
              <img
                src={six}
                className="col-6 col-sm-4 col-md-2 col-lg-2  mx-auto ms-md-2"
                alt="img"
              />
            </div>
            <div className="third d-grid d-md-flex gap-5 py-5 align-items-center">
              <img
                src={seven}
                className="col-7 col-md-5 mx-auto me-md-0"
                alt="img"
              />
              <img
                src={eight}
                className="col-4 d-flex col-md-4  mx-auto me-md-5"
                alt="img"
              />
            </div>
            <div className="fourth d-grid d-sm-flex gap-5 py-5 align-items-center">
              <div className="  d-flex ms-auto">
                <img
                  src={nine}
                  className=" col-10 col-md-11 ms-auto"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default OurClients;