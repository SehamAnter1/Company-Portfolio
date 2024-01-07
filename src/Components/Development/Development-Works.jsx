import React, { useState, useEffect } from "react";
import axios from "axios";
const API_URL = "https://fakestoreapiserver.reactbd.com/photos";

function DevelopmentWorks() {
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
      <div className="some-cases-skeleton bg-black py-3">
        <div className="container ">
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
      <div className="some-cases  works py-3" id="cases">
        <div className="container">
          <ul>
            {products.map((product) => (
              <li key={product._id}>
                <img
                  src={product.url}
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

export default DevelopmentWorks;
