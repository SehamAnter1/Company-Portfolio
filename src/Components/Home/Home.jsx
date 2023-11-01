import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import AcceptCookies from "./AcceptCookies";
import HomeReusable from "./Home-Reusable";
import Header from "./Header";
import homedesign from "./../../assets/images/home-design.jpg";
import homedevelopment from "./../../assets/images/home-development.png";
import BrandingBranding from "./Branding-Full";
function Home() {
  //  animation :fade
  // State to manage the visibility of each element
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  // Function to check the visibility of each element on scroll
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const fade1 = document.getElementById("fade1");
    const fade3 = document.getElementById("fade3");
    if (fade1) {
      const fade1TopPosition = fade1.getBoundingClientRect().top;
      setIsVisible1(fade1TopPosition < windowHeight);
    }

    if (fade3) {
      const fade3TopPosition = fade3.getBoundingClientRect().top;
      setIsVisible3(fade3TopPosition < windowHeight);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //

  const [cookiesAccepted, setCookiesAccepted] = useState(
    localStorage.getItem("cookiesAccepted") === "true"
  );

  useEffect(() => {
    if (cookiesAccepted) {
      localStorage.setItem("cookiesAccepted", "true");
    }
  }, [cookiesAccepted]);

  const handleCookiesAccepted = (accepted) => {
    setCookiesAccepted(accepted);
  };

  return (
    <div>
      {/* home components */}
      {/* cookies */}
      {!cookiesAccepted && (
        <AcceptCookies
          visible={!cookiesAccepted}
          onAccept={handleCookiesAccepted}
        />
      )}

      <Header />

      <HomeReusable
        id="fade1"
        className={`home home-design my-5 pb-4 fade-in ${
          isVisible1 ? "is-visible" : ""
        }`}
        photoUrl={homedesign}
        alt="home-design"
        title={"Web Design"}
        description={
          " we’re pretty sure everyone wants higher conversion rates and batter recognition. Don’t worry, we got you covered!"
        }
        page={"/design"}
      />

      <BrandingBranding
        id="fade2"
        className={`home home-branding py-3 pb-5`}
      />

      <HomeReusable
        id="fade3"
        className={`home home-development mb-5 py-5 pb-5 fade-in ${
          isVisible3 ? "is-visible" : ""
        }`}
        photoUrl={homedevelopment}
        alt="home-development"
        title={"development"}
        description={
          "Got an awesome idea? You’re halfway there! Now let us make a fully functioning product out of it."
        }
        page={"/development"}
      />

 
    </div>
  );
}

export default Home;
