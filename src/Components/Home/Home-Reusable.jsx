import React from "react";
import { NavLink } from "react-router-dom";

function HomeReusable({ className, photoUrl, alt, title, description, id ,page}) {
  return (
    <div id={id} className={className}>
      <div className="container mt-3">
        <div className="home-about pt-4 col-12 col-md-8 col-lg-6 mx-auto d-flex justify-content-center align-items-center text-center flex-column">
          <h1 className="title text-capitalize">{title}</h1>
          <p className="description col-10 mx-auto ">{description}</p>
          <NavLink className="link" to={page}>
            Learn more{" "}
            <i className="fa-solid fa-angle-left fa-rotate-180 icon"></i>
          </NavLink>
        </div>
        {photoUrl && (
          <img
            className="d-flex home-reusable-img py-5 mx-auto"
            src={photoUrl}
            alt={alt}
          />
        )}
      </div>
    </div>
  );
}

export default HomeReusable;
