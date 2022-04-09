import React from "react";
import profile from "../images/profile.jpg";

const About = () => {
  return (
    <div
      className="about"
    >
        <div className="sidebar">
        <img className="about-profile-picture" src={profile} alt="Profle" />
            <div className="sidebar-name">
               Noah Pang
            </div>
            <div className="sidebar-text">
                Other
            </div>
        </div>
        <div className="content">
            About
        </div>
    </div>
  );
};

export default About;