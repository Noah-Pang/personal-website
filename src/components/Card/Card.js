import React, { useState } from "react";
import profile from "../../images/profile.jpg";
import { Button, Card, Description, Image, Title } from "./CardElements.js";
import { Link } from "react-router-dom";

const AppCard = (props) => {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} className="card__image" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.desc}</p>
      </div>
      <Link
        to={props.link}
        className="card__btn"
        style={{ textDecoration: "none", textAlign: "center" }}
      >
        {props.button}
      </Link>
    </div>
  );
};

export default AppCard;
