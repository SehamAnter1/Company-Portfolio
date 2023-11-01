import React from 'react'
import examplefirst from './../../assets/images/branding/example-first.png'
import examplelast from './../../assets/images/branding/example-last.png'
import fontfirst from './../../assets/images/branding/font-first.png'
import fontlast from './../../assets/images/branding/font-last.png'
import color from './../../assets/images/branding/color-img.png'
function BrandingElements() {
    return (
      <div className="branding-elements bg-black py-5" id="elements">
        <div className="container text-center py-3">
          <div className="header   col-md-8 col-lg-6 mx-auto mb-5">
            <h2 className="title text-center">Elements of Branding</h2>
            <p className="description text-center">
              The logo encapsulates the idea behind the brand. We know how to
              make it work for you. Colors add a touch of soul that will
              resonate better with your customers.
            </p>
          </div>

          <p className="p-0 m-0 fs-5 col-md-8 col-lg-8 text-white text-start  mx-auto ">
            The Three Gates <span className="text-muted">Example</span>
          </p>
          <div className="example col-md-10 col-lg-8   mx-auto "></div>

          <div className="example d-grid d-md-flex justify-content-space-between align-items-center py-5 col-md-10 col-lg-8 px-3 mx-auto">
            <div className="col-12 col-md-5 me-auto">
              <img src={examplefirst} className="w-md-100" alt="img" />
            </div>
            <div className="col-12 col-md-7 me-auto">
              <img
                src={examplelast}
                className="w-75 d-flex mx-auto"
                height={66}
                alt="img"
              />
            </div>
          </div>

          <div className="example mx-auto col-md-10 col-lg-8">
            <p className="p-0 m-0 fs-5 text-white text-start   ">Font</p>
            <div className="font  d-grid d-md-flex justify-content-space-between align-items-center py-5  px-3  ">
              <div className="col-12 col-md-5 me-auto ">
                <img
                  src={fontfirst}
                  width={181}
                  height={158}
                  className=""
                  alt="img"
                />
              </div>
              <div className="col-12 col-md-6 ms-auto">
                <img
                  src={fontlast}
                  width={390}
                  height={174}
                  className="w-100"
                  alt="img"
                />
              </div>
            </div>
          </div>

          <div className="example color mx-auto col-md-10 col-lg-8">
            <p className="p-0 m-0 fs-5 text-white text-start   ">Color</p>
            <div className="col-md-12 d-flex justify-content-space-between align-items-center py-5  px-3  ">
              <img
                src={color}
                width={634}
                height={437}
                className="mx-auto"
                alt="img"
              />
            </div>
          </div>
          <div className="example col-md-10 col-lg-8   mx-auto "></div>
        </div>
      </div>
    );
}

export default BrandingElements