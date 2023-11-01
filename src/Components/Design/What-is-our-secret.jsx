import React from "react";
import Whyusreusable from "./Why-Us-Reusable";
import img1 from "./../../assets/images/Layer_1-3.png";
import img2 from "./../../assets/images/Page-1-1.png";
import img3 from "./../../assets/images/Page-1.png";
import img4 from "./../../assets/images/Layer_1-1.png";
import img5 from "./../../assets/images/Layer_1.png";
import img6 from "./../../assets/images/Layer_1-2.png";


function Whatisoursecret() {
  const boxes = [
    {
      alt: "d",
      imgUrl: img1,
      title: "Timeless design",
      content: "Run your digital product for years without worries about being outdated. Our design is ahead of time.",
    },
    {
      alt: "d",
      imgUrl: img2,
      title: "Business-oriented solutions",
      content: "We help our clients succeed concentrating our efforts on business goals and striving to achieve them no matter what.",
    },
    {
      alt: "d",
      imgUrl: img3,
      title: "Deep research",
      content: "We do our own research into your business area and market. Once we know all there is to know, we can give you exactly what your business needs.",
    },
    {
      alt: "d",
      imgUrl:img4,
      title: "Reliable partner",
      content: "Our relationship with you is 100% transparent and built on trust. We believe friendliness is key to any successful long-term partnership.",
    },
    {
      alt: "d",
      imgUrl: img5,
      title: "Out-of-the-box design",
      content: "What we offer are custom-built solutions. We love experimenting and breaking rules! No boring old templates here.",
    },
    {
      alt: "d",
      imgUrl: img6,
      title: "Increasing value",
      content: "Do you want to increase the value of your product? How about more customer loyalty and engagement? We know you do, so we create design strategies to do just that!",
    },
  ];

 
  
  return (
    <>
      <Whyusreusable
        data={boxes}
        className={"Whatisoursecret pt-5"}
        title="What's our secret?"
      />
    </>
  );
}

export default Whatisoursecret;






