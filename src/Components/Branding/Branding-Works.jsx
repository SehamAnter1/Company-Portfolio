import React, { useState, useEffect } from "react";
import axios from "axios";
import img1 from "./../../assets/images/WhyUs/Path.png";
import img2 from "./../../assets/images/WhyUs/Group 27.png";
import img3 from "./../../assets/images/WhyUs/Vector-1.png";
import img4 from "./../../assets/images/WhyUs/Vector-2.png";
import img5 from "./../../assets/images/WhyUs/Vector-3.png";
import img6 from "./../../assets/images/WhyUs/Vector.png";

const API_URL = "https://fakestoreapi.com/products";

function BrandingWorks() {
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
      <div className="some-cases  works py-5"  id="cases">
        <div className="container py-5">
          <div className="px-5">
            <h2 className="title text-black fs-2">Our Works</h2>
            <p className="description text-black col-10 col-md-7 col-lg-4">
              You don’t have to take our word for anything. Here, take a look at
              some of the stuff we’ve done. It perfectly showcases our approach,
              our values, and our work ethic.
            </p>
          </div>
          <ul>
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

export default BrandingWorks;
