import React from "react";
import Whyusreusable from "./../Design/Why-Us-Reusable";
import img1 from "./../../assets/images/Layer_1-3.png";
import img2 from "./../../assets/images/Page-1-1.png";
import img3 from "./../../assets/images/Page-1.png";
import img4 from "./../../assets/images/Layer_1-1.png";
import img5 from "./../../assets/images/Layer_1.png";
import img6 from "./../../assets/images/Layer_1-2.png";

function BrandingSecret() {
  const boxes = [
    {
      alt: "d",
      imgUrl: img1,
      title: "Right on target",
      content:
        "igital product for years without worries about being outdated.Our design is ahead of time.",
    },
    {
      alt: "d",
      imgUrl: img2,
      title: "Customer-first principle",
      content:
        "At the end of the day, it’s all about the customers. They are the ones who will be the ultimate judges. We make sure your branding will appeal to the right kind of people!",
    },
    {
      alt: "d",
      imgUrl: img3,
      title: "Brand value",
      content:
        "We do our own research into your business area and market. Once we know all there is to know, we can give you exactly what your business needs.",
    },
    {
      alt: "d",
      imgUrl: img4,
      title: "Future-proof results",
      content:
        "Businesses run for years and decades. We make sure your branding doesn’t lag behind. Think of it as a long-term strategic investment.",
    },
    {
      alt: "d",
      imgUrl: img5,
      title: "Bragging rights",
      content:
        "Our branding solutions will always leave you feeling proud. You’ll want to plaster your new branding over every surface, just so everyone can see how cool it is!",
    },
    {
      alt: "d",
      imgUrl: img6,
      title: "Exceeding expectations",
      content:
        "We always go above and beyond. Why? Because we’re a team of perfectionists who love seeing their clients happy.",
    },
  ];

  return (
    <>
      <Whyusreusable
        data={boxes}
        className={"Whatisoursecret bg-black pt-5"}
        title="What's our secret?"
      />
    </>
  );
}

export default BrandingSecret;
