import React from 'react'

function ContactSubFooter() {
    return (
      <div className="ContactSubFooter ">
        <div className="container py-5 mx-auto">
          <div className="subfooterparent py-5">
            <h2 className="title">We're here</h2>
            <div className="d-grid content">
              <ul className="col ">
                <li className="heading">Head office</li>
                <li className="item">
                  <p className="">
                    {" "}
                    16192 Coastal Highway, Lewes, Delaware 19958 USA Phone: +1
                    302 208 67 18
                  </p>
                </li>
              </ul>
              <ul className="col">
                <li className="heading">Office</li>
                <li className="item">
                  <p>
                    29V, Yaroslaviv Val Street, Kyiv, 02000 Egypt Phone: +380
                    (63) 345 71 83
                  </p>
                </li>
              </ul>
              <ul className="col">
                <li className="heading">Partners</li>
                <li className="item">
                  <p> New York - Andrew Mazok Phone: +1 347 393 40 90</p>
                </li>
              </ul>
              <ul className="col">
                <li className="heading">Social</li>
                <li className="item">
                  <p>
                    <a href="https://www.instagram.com/the.three.gates/">
                      Instagram,
                    </a>
                    <a
                      className="footer-item"
                      href="/https://www.facebook.com/the.three.gate/"
                    >
                      Facebook,
                    </a>
                    <a
                      className="footer-item"
                      href="https://www.linkedin.com/company/thethreegates/ "
                    >
                      LinkedIn,
                                    </a>
                                    <br></br>
                    <a
                      className="footer-item"
                      href="https://twitter.com/TheThreegates"
                    >
                      Twitter,
                    </a>
                    <a className="footer-item" href="/">
                      Snapchat
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="office"></div>
      </div>
    );
}

export default ContactSubFooter