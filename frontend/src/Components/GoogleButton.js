import React from "react";

function GoogleButton() {
  const handleButtonClick = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  return (
    <button onClick={handleButtonClick}>
     Log in with Google
    </button>
  );
}

export default GoogleButton;






