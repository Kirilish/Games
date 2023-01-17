import { Link } from "react-router-dom";
import React from "react";
import "./Card.css";

function Card({ name, date, rating, image, id }) {
  return (
    <div className="card-wrapper">
      <p className="card-name">{name}</p>
      <p>{date}</p>
      <p>{rating}</p>
      <Link to={`/info/:${id}`}>
        <div className="game-img">
          <img src={image} alt="card" />
        </div>
      </Link>
    </div>
  );
}

export default Card;
