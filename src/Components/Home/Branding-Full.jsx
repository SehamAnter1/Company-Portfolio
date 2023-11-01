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

function BrandingBranding(id) {
  return (
    <>
      <HomeReusable
        id={id}
        className={"home home-branding mt-5 "}
        alt="home-branding"
        title={"branding"}
        description={
          "Sure, every brand is unique. The question is do your customers realize it? We’ll make sure they do."
        }
        page={"/branding"}
      />
      <div className="home-branding-full pb-5"></div>
    </>
  );
}

export default BrandingBranding;
