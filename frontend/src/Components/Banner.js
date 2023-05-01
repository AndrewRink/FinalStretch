import React, { useState, useEffect } from 'react';
import { Alert } from "react-bootstrap"


function Banner({ message, showBanner, setShowBanner }) {
  useEffect(() => {
    let timeoutId;
    if (showBanner) {
      timeoutId = setTimeout(() => {
        setShowBanner(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timeoutId);
    }
  }, [showBanner, setShowBanner]);

  return (
    <div>
      <Alert className="alert-banner" show={showBanner} variant="success" onClose={() => setShowBanner(false)} dismissible>
        {message}
      </Alert>
    </div>
  );
}

export default Banner;