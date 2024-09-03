import React, { useState, useEffect } from "react";
import "./ProfileTransition.css";
import svgProfile from "../../Assets/home-main.svg";
import realProfile from "../../Assets/vrTrent.png";

const ProfileTransition = () => {
  const [showReal, setShowReal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowReal((prevShowReal) => !prevShowReal);
    }, 8000); // Adjust the interval as needed (10000 ms = 10 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="profile-transition">
      <img
        src={svgProfile}
        alt="SVG Profile"
        className={`profile-image svg ${showReal ? "fade-out" : "fade-in"}`}
      />
      <img
        src={realProfile}
        alt="Real Profile"
        className={`profile-image real ${showReal ? "fade-in" : "fade-out"}`}
      />
    </div>
  );
};

export default ProfileTransition;
