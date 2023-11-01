import React from "react";
import Whyusreusable from "./Why-Us-Reusable";
import img1 from "./../../assets/images/WhyUs/Path.png";
import img2 from "./../../assets/images/WhyUs/Group 27.png";
import img3 from "./../../assets/images/WhyUs/Vector-1.png";
import img4 from "./../../assets/images/WhyUs/Vector-2.png";
import img5 from "./../../assets/images/WhyUs/Vector-3.png";
import img6 from "./../../assets/images/WhyUs/Vector.png";

function WhyUs() {
  const boxes = [
    {
      alt: "d",
      imgUrl: img1,
      title: "Business-centered approach",
      content:
        "Everything we do is geared toward your strategic goals. Essentially, our designs are an effective way to make your business successful.",
    },
    {
      alt: "d",
      imgUrl: img2,
      title: "Strong marketing tools",
      content:
        "Marketing and design are inextricably linked. We know just how to make them complement each other.",
    },
    {
      alt: "d",
      imgUrl: img3,
      title: "Close communication",
      content:
        "We have found that keeping in touch with our clientsaccounts for 60% of a givenproject’s success.",
    },
    {
      alt: "d",
      imgUrl: img4,
      title: "Meeting the deadlines",
      content:
        "We hate falling behind on a project just as much as our clients. That’s why we never do it.",
    },
    {
      alt: "d",
      imgUrl: img5,
      title: "Future-proof results",
      content:
        "Fads are fine, but some things are timeless. We make every effort to stay on the cutting edge of design.",
    },
    {
      alt: "d",
      imgUrl: img6,
      title: "Exceeding Expectations",
      content:
        "You know why we really care about your success? Because it motivates us like nothing else! So it’s a win-win situation.",
    },
  ];

  return (
    <>
      <div id="advantages">
        <Whyusreusable
          data={boxes}
          className={"Whatisoursecret design-why-us py-5 "}
          title="Why us?"
        />
      </div>
    </>
  );
}

export default WhyUs;
