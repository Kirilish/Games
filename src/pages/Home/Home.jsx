import Pagination from "./../../components/Pagination/Pagination";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import "./Home.css";

function Home() {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState('1');

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=88aca4986ffe44348baf79eb510740c5&page=${page}`)
      .then((res) => res.json())
      .then((data) => setGames(data.results));
  },[page]);

  const handlePage = (e) => {
    setPage(e.target.textContent);
  };

  return (
    <>
      <div className="cont-card">
        {games.map(({ name, released, rating, background_image, id }) => {
          return (
            <Card
              name={name}
              date={released}
              rating={rating}
              image={background_image}
              id={id}
            />
          );
        })}
      </div>
      <Pagination onClick={handlePage} />
    </>
  );
}

export default Home;
