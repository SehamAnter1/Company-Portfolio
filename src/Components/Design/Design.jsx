import React from "react";
import DesignForPeople from "./Design-for-people";
import DesignNavbar from "./Design-Navbar";
import DesignServices from "./Design-Services";
import Designforbusiness from "./Design-for-business";
import DesignSecret from "./Design-Secret";
import WorkingProcesses from "./Working-Processes";
import WhyUs from "./Why-Us";
import FAQReusable from "./FAQReusable";
import SelectedProjects from "./Selected-projects";
import SomeCases from "./Some-Cases";

function Design() {
  return (
    <div className="design home">
      <DesignNavbar />
      <DesignForPeople />
      <DesignServices />
      <Designforbusiness />
      <DesignSecret />
      <WorkingProcesses />
      <SelectedProjects />
      <SomeCases/>
      <WhyUs />
      <FAQReusable/>
     </div>
  );
}

export default Design;
