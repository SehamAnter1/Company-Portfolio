import React from 'react'
import AboutNavbar from './About-Navbar';
import AboutHeader from './About-Header';
import AboutTogether from './About-Together';
import AboutGrowth from './About-Growth';
import AboutValues from './About-Values';
import AboutClients from './About-Clients';
import AboutStory from './About-Story';

function About() {
  return (
      <div className="about development branding design home" >
          <AboutNavbar />
          <AboutHeader/>
          <AboutTogether/>
          <AboutValues />
      <AboutClients />
      <AboutStory/>
          <AboutGrowth/>
    </div>
  );
}

export default About