import React, { useState, useEffect } from "react";
import axios from "axios";
import img1 from "./../../assets/images/WhyUs/Path.png";
import img2 from "./../../assets/images/WhyUs/Group 27.png";
import img3 from "./../../assets/images/WhyUs/Vector-1.png";
import img4 from "./../../assets/images/WhyUs/Vector-2.png";
import img5 from "./../../assets/images/WhyUs/Vector-3.png";
import img6 from "./../../assets/images/WhyUs/Vector.png";

const API_URL = "https://fakestoreapi.com/products";

function SomeCases() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="some-cases-skeleton bg-black">
        <div className="container py-5">
          <div className="skeleton-loader skeleton-box ">
            <div className="skeleton-img "></div>
            <div className="loader-content">
              <div className="skeleton-avatar"></div>
              <div className="skeleton-content">
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line small"></div>
              </div>
            </div>
          </div>
          <div className="skeleton-loader skeleton-box ">
            <div className="skeleton-img "></div>
            <div className="loader-content">
              <div className="skeleton-avatar"></div>
              <div className="skeleton-content">
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line small"></div>
              </div>
            </div>
          </div>
          <div className="skeleton-loader skeleton-box ">
            <div className="skeleton-img "></div>
            <div className="loader-content">
              <div className="skeleton-avatar"></div>
              <div className="skeleton-content">
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line small"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="some-cases bg-black py-5 " id="cases">
        <div className="container py-5 ">
          <h2 className="title text-white fs-2">
            Some cases we <br></br> are proud of
          </h2>
          <p className="discription col-10 col-sm-8 col-md-5 col-lg-3">
            Check out these cases to see how we work and what we achieve. A
            picture speaks a thousand words!
          </p>
          <ul className="">
            {products.map((product) => (
              <li key={product.id}>
                <img
                  src={product.image}
                  className="w-100 my-5"
                  height={500}
                  alt=""
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default SomeCases;
