import React, { useState } from "react";

const AcceptCookies = ({ onAccept }) => {
  const [visible, setVisible] = useState(true);

  const handleAcceptCookies = () => {
    setVisible(false);
    if (onAccept) {
      onAccept();
    }
  };

  return (
    visible && (
      <div className="accept-cookies-section">
        <div className="container mt-3">
          <div className="row justify-content-center align-items-center">
            <div className=" text-md-center accept-cookies d-flex justify-content-space-between">
              <p>We use cookies to improve your browsing experience</p>
              <span
                className="accept-cookies-btn link"
                onClick={handleAcceptCookies}
              >
                Accept All Cookies
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default AcceptCookies;
