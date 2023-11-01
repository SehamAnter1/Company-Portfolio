import React from "react"; 
function AboutTogether() {
  return (
    <div className="together" id="mission">
      <div className="together-content py-5">
        <div className="container py-4">
          <h2 className="title  text-center col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4   mx-auto">
            We want to bring business and the digital world together
          </h2>
          <div className="cards py-5  col-sm-10 col-lg-8 mx-auto gap-2 d-grid">
            <div className="row d-grid d-sm-flex">
              <div className="col">
                <p className="description ">
                  In fact, this is how The Three Gates began. We were just a
                  bunch of talented Saudi and Egyptians united by a common
                  vision: creating a synergy of business and the digital world.
                </p>
              </div>
              <div className="col">
                <p className="description">
                  Ambitious much? Sure! But once we knew what we wanted, there
                  was no turning back. All we needed was some hard work.
                </p>
              </div>
            </div>
            <div className="row  d-grid d-sm-flex">
              <div className="col">
                <p className="description">
                  We were tired of stale design solutions. We felt strongly that
                  design was more than pretty pictures: it was a powerful tool
                  that could really transform business.
                </p>
              </div>
              <div className="col">
                <p className="description">
                  We believe that we’ve managed to achieve what we set out to
                  do. Today, we’re proud to bring together people who share our
                  passion for change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTogether;
