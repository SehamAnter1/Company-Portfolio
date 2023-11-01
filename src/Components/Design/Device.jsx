import React from 'react'
import device1 from "./../../assets/images/design-device1.png"
import device2 from "./../../assets/images/design-device2.png"
import device3 from "./../../assets/images/design-device3.png"
function Device() {
  return (
    <div className="device py-5">
      <div className="container">
        <h2 className="title text-white mb-3 fs-1">Design for Any Device</h2>
        <div className="images py-5 d-flex  ">
          <div className="img col-2">
            {" "}
            <img src={device2} className="w-100 " alt="device" />
          </div>
          <div className="img col-8">
            {" "}
            <img src={device1} className="w-100" alt="device" />
          </div>
          <div className="img col-2">
            {" "}
            <img src={device3} className="w-100 " alt="device" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Device;

