import React from 'react'
import Efficiency from './../../assets/images/About/about-value1.png'
import Team from './../../assets/images/About/about-value2.png'
import Growth from './../../assets/images/About/about-value3.png'
import Fun from './../../assets/images/About/about-value4.png'
import Freedom from './../../assets/images/About/about-value5.png'
function AboutValues() {
  return (
    <div className="about-values py-5" id="values">
      <div className="container pb-3">
        <h2 className="title mx-auto text-center py-5">
          The values that define us
        </h2>
        <ul className="items col-10 col-md-8 mx-auto">
          <li className="item d-flex">
            <div className="first col-6">
              <h2 className="title col-6">
                The Three Gates is <span>Efficiency</span>
              </h2>
            </div>
            <div className="last col-6">
              <img src={Efficiency} className="customize" alt="img" />
            </div>
          </li>
          <li className="item">
            <div className="first  col-6">
              <h2 className="title">
                The Three Gates is <span>Team</span>
              </h2>
            </div>
            <div className="last  col-6">
              <img src={Team} className="customize" alt="img" />
            </div>
          </li>
          <li className="item">
            <div className="first  col-6">
              <h2 className="title">
                The Three Gates is <span>Growth</span>
              </h2>
            </div>
            <div className="last  col-6">
              <img src={Growth} alt="img" />
            </div>
          </li>
          <li className="item">
            <div className="first  col-6">
              <h2 className="title">
                The Three Gates is <span>Fun</span>
              </h2>
            </div>
            <div className="last  col-6">
              <img src={Fun} alt="img" />
            </div>
          </li>
          <li className="item">
            <div className="first  col-6">
              <h2 className="title">
                The Three Gates is <span>Freedom</span>
              </h2>
            </div>
            <div className="last  col-6">
              <img src={Freedom} alt="img" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutValues