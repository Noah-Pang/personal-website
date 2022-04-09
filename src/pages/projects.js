import React, { useState } from "react";
import AppCard from "../components/Card/Card";
import { Link } from "react-router-dom";
import realm from "../images/realm.png";
import yuxiang from "../images/yuxiang-research.png";
import Realm from "./projects/realm";

const Projects = () => {
  return (
    <div className="projects-wrapper">
      <AppCard
        button="View Project"
        title="R.E.A.L.M."
        desc='The "Real Estate Application & Listing Manager": a web app which aggregates rental listing information from multiple ILS, and makes it easy for people to find rental housing.'
        link="./realm"
        img={realm}
      />
      <AppCard
        button="View Project"
        title="Benchmarking OPE Methods"
        desc="Group research project at UCSB advised by Professor Yu-Xiang Wang on reinforcement learning and off-policy evaluation (OPE) methods."
        link="./realm"
        img={yuxiang}
      />
      <AppCard
        button="View Project"
        title="Hello"
        desc="You are me"
        link="./realm"
        img="https://images.unsplash.com/photo-1647755353498-d67d415b7db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
      />
      <AppCard
        button="View Project"
        title="Hello"
        desc="You are me"
        link="./realm"
        img="https://images.unsplash.com/photo-1647755353498-d67d415b7db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
      />
    </div>
  );
};

export default Projects;
