import React from 'react'

function BrandingValues() {
    return (
      <div className="branding-values py-1" id="advantages">
        <div className="container justify-content-center text-center col-md-6 col-lg-4 ">
          <h2 className="title"> A brand system equals higher value</h2>
          <p className="description">
            A brand system is something every business needs. Trust us, we’ve
            seen what branding can do. It’s the best way to impress your
            customers and paint the right image.
          </p>
          <ul className="d-grid values gap-5 mt-4 pt-5">
            <li>
              <h2 className="title">
                <strong>Brand Identity</strong>
              </h2>
            </li>
            <li>
              <h2 className="title">
                <strong>Brand Book</strong>
              </h2>
            </li>
            <li>
              <h2 className="title">
                <strong>Logotype</strong>
              </h2>
            </li>
            <li>
              <h2 className="title">
                <strong>Promo Materials</strong>
              </h2>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default BrandingValues