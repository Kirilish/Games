import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Screenshots.css";

function Screenshots() {
  const [screens, setScreens] = useState([]);
  const params = useParams();
  const id = params.id.slice(1);

  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games/${id}/screenshots?key=88aca4986ffe44348baf79eb510740c5`
    )
      .then((res) => res.json())
      .then((data) => setScreens(data.results));
  }, [id]);

  return (
    <div className="screen-cont">
      {screens.map((i) => {
        return (
          <div>
            <img src={i.image} alt={i.image} />
          </div>
        );
      })}
    </div>
  );
}

export default Screenshots;
