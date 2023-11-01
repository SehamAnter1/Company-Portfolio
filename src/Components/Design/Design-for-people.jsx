import React from 'react'
import DesignHeader from "./../../assets/images/DesignHeader.PNG";

function DesignForPeople() {
    return (
      <div className="DesignForPeople py-4" id="overview">
        <div className="container justify-content-start ">
          <div className="col-12 col-lg-9 py-4">
            <h2 className="title ">Design for people</h2>
            <p className="description col-12 col-md-9 col-lg-8">
              Our creative design solutions are for people, not for machines.
              Yet made by people and machines.
            </p>
          </div>
        </div>
        <img
          src={DesignHeader}
          className=" mx-auto h-100 w-100 d-flex"
          height={400}
          alt="design-for-people.png"
        />
      </div>
    );
}

export default DesignForPeople;