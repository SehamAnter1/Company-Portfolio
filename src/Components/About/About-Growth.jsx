import React from 'react'
import growthimg from './../../assets/images/About/about-grow-img.png'
function AboutGrowth() {
    return (
      <div
        className="about-growth py-5 d-flex justify-content-center"
        id="team"
      >
        <div className="container">
          <div className="header">
            <h2 className="title text-center col-9 col-sm-7 col-md-4 col-xl-3 mx-auto">
              Together we make a difference
            </h2>
            <img
              src={growthimg}
              className="w-75 py-4 my-3 d-flex mx-auto"
              alt=""
            />
          </div>
          <div className="content text-center">
            <h2 className="title">Let’s grow together</h2>
            <p className="description mx-auto col-10 col-md-8 col-lg-6 col-xl-5 ">
              The Three Gates is about permanent growth. This applies to your
              business, our team, and everyone’s happiness.
            </p>
            <div className="row boxes text-center py-5 d-flex gap-5 gap-sm-0">
              <div className="box col-12  col-sm-4">
                <h2 className="title">Work with us</h2>
                <p className="description col-10  mx-auto">
                  We are here to help you achieve your business goals and create
                  an outstanding product.
                </p>
                <span className="learnmore">Learn more</span>
              </div>
              <div className="box col-12  col-sm-4">
                <h2 className="title">Collaborate </h2>
                <p className="description col-10 mx-auto">
                  Together, we can do much more. A trustworthy partnership is
                  the best way to reach the next level.
                </p>
                <span className="learnmore">Learn more</span>
              </div>
              <div className="box col-12  col-sm-4">
                <h2 className="title">Join our team</h2>
                <p className="description col-10 mx-auto">
                  Do you want to reveal your full creative potential? Do you
                  believe in bringing beauty to the digital world? So do we!
                </p>
                <span className="learnmore">Learn more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AboutGrowth