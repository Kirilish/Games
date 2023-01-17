import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "../../components/Detail/Detail";

function Info() {
  const [detail, setDetail] = useState({});
  const params = useParams();
  const id = params.id.slice(1);
  const {name, background_image, metacritic, description_raw} = detail

  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games/${id}?key=88aca4986ffe44348baf79eb510740c5`
    )
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, []);

  return (
    <div>
      <Detail
        name={name}
        image={background_image}
        rating={metacritic}
        desc={description_raw}
        id={id}
      />
    </div>
  );
}

export default Info;
