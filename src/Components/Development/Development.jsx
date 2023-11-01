import React from "react";
import FAQReusable from "../Design/FAQReusable";
import WhyUs from "../Design/Why-Us";
import DevelopmentNavbar from "./Development-Navbar";
import DevelopmentHeader from "./Development-Header";
import DevelopmentTech from "./Development-Tech";
import DevelopmentSupport from "./Development-Support";
import DevelopmentUnity from "./Development-Unity";
import DevelopmentWorks from "./Development-Works";

function Development() {
  return (
    <div className="development branding  design home">
      <DevelopmentNavbar />
      <DevelopmentHeader />
      <DevelopmentTech />
      <DevelopmentSupport />
      <DevelopmentUnity />
      <div className="bg-black">
        <DevelopmentWorks />
      </div>
      <div className="bg-black">
        <WhyUs />
      </div>
      <FAQReusable />
    </div>
  );
}

export default Development;
