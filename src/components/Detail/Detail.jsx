import React from "react";
import "./Detail.css";

function Detail({ image, name, rating, desc }) {
  return (
    <div className="card-info">
      <div>{name}</div>
      <div className="card-img">
        <img src={image} alt="card" />
      </div>
      <div>Rating: {rating}</div>
      <div className="card-text">{desc}</div>
    </div>
  );
}

export default Detail;
