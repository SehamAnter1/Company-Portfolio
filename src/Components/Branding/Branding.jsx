import React from 'react'
import BrandingNavbar from './Branding-Navbar';
import BrandingHeader from './Branding-Header';
import BrandingBranding from "../Home/Branding-Full";
import BrandingValues from './Branding-Values';
import FAQReusable from '../Design/FAQReusable';
import BrandingWorks from './Branding-Works';
import WhyUs from '../Design/Why-Us';
import BrandingElements from './Branding-Elements';
import BrandingSecret from './Branding-Our-Secret';
import OurClients from "./Branding-Clients";

function Branding() {
    return (
      <div className="branding design home">
        <BrandingNavbar />
        <BrandingHeader />
        <BrandingBranding />
        <BrandingValues />
        <BrandingElements />
        <BrandingSecret />
        <OurClients />
        <BrandingWorks />
        <WhyUs />
        <FAQReusable />
      </div>
    );
}

export default Branding;