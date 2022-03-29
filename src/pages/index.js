import React from "react";
import profile from "../images/profile.jpg";
import { GrLinkedin} from "react-icons/gr";
import {FaGithub} from "react-icons/fa";
import "../App.scss";

const Home = () => {
  return (
    <>
      <div className="profile-container">
        <div className="profile-pic-media-container">
          <img className="profile-picture" src={profile} alt="Profle" />
          <div className="intro-social-media">
            <a href="https://www.linkedin.com/in/noah-pang-6a14a9207/">
              <GrLinkedin color="000"size="5rem"/>
            </a>
            <span></span>
            <a href="https://github.com/Noah-Pang">
              <FaGithub color="000" size="5rem"/>
            </a>
          </div>
        </div>

        <div className="intro-text">
          <div className="intro-title">Hello! My name is Noah Pang.</div>
          I'm currently a 4th year undergraduate at the University of
          California, Santa Barbara, studying computer science, math, and
          Chinese. I have research interests broadly in machine learning, and
          more specifically in natural language processing, computer vision, and
          reinforcement learning.
        </div>
      </div>
    </>
  );
};

export default Home;
