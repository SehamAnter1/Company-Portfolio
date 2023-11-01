import React from "react";
import HomeReusable from "./Home-Reusable";
import ipad from "./../../assets/images/home-branding-ipad-air2.png";
import mobile from "./../../assets/images/home-branding-mobile.png";
import carddark from "./../../assets/images/home-branding-card-dark.png";
import card from "./../../assets/images/home-branding-card.png";
import ereaser from "./../../assets/images/home-branding-ereaser.png";
import mug from "./../../assets/images/home-branding-mug.png";
import pen from "./../../assets/images/home-branding-pen.png";
import speaker from "./../../assets/images/home-branding-speaker.png";
import watch from "./../../assets/images/home-branding-watch.png";

function Brandingalt(id) {
  return (
    <>
      <HomeReusable
        id={id}
        className={"home home-branding mt-5 py-3 pb-5"}
        alt="home-branding"
        title={"branding"}
        description={
          "Sure, every brand is unique. The question is do your customers realize it? We’ll make sure they do."
        }
      />
      <div className="home-branding-images pb-5">
        <div className="container">
          <div className="row">
            <div className="col branding-main-column d-flex home-branding-height">
              <div className="col d-grid aligncontent">
                <img className="w-100 box" src={mug} alt="mug" />
                <img className="w-100  " src={card} alt="card" />
                <img className="w-100  " src={carddark} alt="carddark" />
              </div>
              <div className="col d-grid aligncontent  ">
                <img className="w-100 " height={350} src={pen} alt="pen" />
                <img
                  className="w-100 "
                  height={125}
                  src={ereaser}
                  alt="ereaser"
                />
              </div>
            </div>
            <div className="col branding-main-column d-flex home-branding-height">
              <img className="w-100" src={ipad} alt="ipad" />
            </div>
            <div className="col branding-main-column d-flex home-branding-height">
              <div className="col d-grid aligncontent">
                <img className="w-100" src={mobile} alt="mobile" />
                <img className="w-100 " src={speaker} alt="speaker" />
              </div>
              <div className="col   branding-main-column d-flex home-branding-height">
                <img className="w-100" src={watch} alt="watch" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brandingalt;