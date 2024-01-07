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
                    1111 Coastal Highway, Lewes, Delaware 3232 USA Phone: +1
                    1111
                  </p>
                </li>
              </ul>
              <ul className="col">
                <li className="heading">Office</li>
                <li className="item">
                  <p>
                    29V, Yaroslaviv Val Street, Kyiv, 02000 Egypt Phone:
                    +201021723617
                  </p>
                </li>
              </ul>
              <ul className="col">
                <li className="heading">Partners</li>
                <li className="item">
                  <p> New York - Andrew Mazok Phone:+11111111</p>
                </li>
              </ul>
              <ul className="col">
                <li className="heading">Social</li>
                <li className="item">
                  <p>
                    <a href="/">Instagram,</a>
                    <a className="footer-item" href="/">
                      Facebook,
                    </a>
                    <a className="footer-item" href="/">
                      LinkedIn,
                    </a>
                    <br></br>
                    <a className="footer-item" href="/">
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