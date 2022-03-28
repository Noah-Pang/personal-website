import React from "react";
import profile from "../images/profile.jpg";
import "../App.scss"

const Home = () => {
  return (
    <>
        <div className="profile-container">
            <img className="profile-picture" src={profile} alt="Profle" />
            <div className="intro-text">
            <div className="intro-title">Hello! My name is Noah Pang.</div>
                I'm currently a 4th year undergraduate at the University of California, Santa Barbara, 
                studying computer science, math, and Chinese. I have research interests broadly in machine learning, and
                more specifically in natural language processing, computer vision, and reinforcement learning.
            </div>
        </div>
        
    </>
  );
};

export default Home;
