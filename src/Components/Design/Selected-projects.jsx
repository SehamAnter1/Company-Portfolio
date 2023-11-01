import React, { useState, useEffect } from "react";
import axios from "axios"
import img1 from "./../../assets/images/WhyUs/Path.png";
import img2 from "./../../assets/images/WhyUs/Group 27.png";
import img3 from "./../../assets/images/WhyUs/Vector-1.png";
import img4 from "./../../assets/images/WhyUs/Vector-2.png";
import img5 from "./../../assets/images/WhyUs/Vector-3.png";
import img6 from "./../../assets/images/WhyUs/Vector.png";

const API_URL = "https://fakestoreapi.com/products";

function SelectedProjects() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
         const delay = setTimeout(() => {
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
         }, 20000);

         return () => clearTimeout(delay);

  }, []);

  if (isLoading) {
      return (
        <div className="selected-projects-skeleton bg-black ">
          <div className="container py-5 ">
            <div>
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
        </div>
      );
  }

    return (
      <>
        <div className="selected-projects bg-black">
          <div className="carousel-parent py-5">
            <div className="container">
              <h2 className="title text-white py-5 ">Selected projects</h2>
            </div>
            <section class="carousel">
              <div class="content carouselContent">
                <ul>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img1} alt="" />
                    </div>
                  </li>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img2} alt="ss" />
                    </div>
                  </li>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img3} alt="ss" />
                    </div>
                  </li>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img4} alt="ss" />
                    </div>
                  </li>
                </ul>
                <ul>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img5} alt="ss" />
                    </div>
                  </li>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img6} alt="ss" />
                    </div>
                  </li>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img1} alt="ss" />
                    </div>
                  </li>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img1} alt="ss" />
                    </div>
                  </li>
                </ul>
                <ul>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img1} alt="ss" />
                    </div>
                  </li>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img1} alt="ss" />
                    </div>
                  </li>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img1} alt="ss" />
                    </div>
                  </li>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img1} alt="ss" />
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            <section class="carousel carousel2">
              <div class="content carouselContent">
                <ul>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img1} alt="" />
                    </div>
                  </li>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img1} alt="ss" />
                    </div>
                  </li>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img1} alt="ss" />
                    </div>
                  </li>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img1} alt="ss" />
                    </div>
                  </li>
                </ul>
                <ul>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img1} alt="ss" />
                    </div>
                  </li>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img1} alt="ss" />
                    </div>
                  </li>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img1} alt="ss" />
                    </div>
                  </li>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img1} alt="ss" />
                    </div>
                  </li>
                </ul>
                <ul>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img1} alt="ss" />
                    </div>
                  </li>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img1} alt="ss" />
                    </div>
                  </li>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img1} alt="ss" />
                    </div>
                  </li>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img1} alt="ss" />
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            <section class="carousel">
              <div class="content carouselContent">
                <ul>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img1} alt="" />
                    </div>
                  </li>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img1} alt="ss" />
                    </div>
                  </li>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img1} alt="ss" />
                    </div>
                  </li>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img1} alt="ss" />
                    </div>
                  </li>
                </ul>
                <ul>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img1} alt="ss" />
                    </div>
                  </li>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img1} alt="ss" />
                    </div>
                  </li>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img1} alt="ss" />
                    </div>
                  </li>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img1} alt="ss" />
                    </div>
                  </li>
                </ul>
                <ul>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img1} alt="ss" />
                    </div>
                  </li>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img1} alt="ss" />
                    </div>
                  </li>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img1} alt="ss" />
                    </div>
                  </li>
                  <li>
                    <div class="carouselAvatar">
                      <img src={img1} alt="ss" />
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </>
    );
}

export default SelectedProjects;
