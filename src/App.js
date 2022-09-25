import React, { useEffect, useState } from "react";
import "./index.scss";
import { Collection } from "./Collection";

const cats = [
  { name: "Все" },
  { name: "Море" },
  { name: "Горы" },
  { name: "Архитектура" },
  { name: "Города" },
];

function App() {
  const [collections, setCollections] = useState([]);
  const [searchValue, setSearcValue] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const category = categoryId ? `category=${categoryId}` : "";

    setIsLoading(true);
    fetch(
      `https://632ffe75591935f3c8882a5c.mockapi.io/photos?page=${page}&limit=4&${category}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCollections(data);
      })
      .catch((err) => console.warn(err))
      .finally(() => setIsLoading(false));
  }, [categoryId, page]);

  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          {cats.map((obj, index) => (
            <li
              key={obj.name}
              onClick={() => setCategoryId(index)}
              className={index === categoryId ? "active" : ""}
            >
              {obj.name}
            </li>
          ))}
        </ul>
        <input
          value={searchValue}
          onChange={(e) => setSearcValue(e.target.value)}
          className="search-input"
          placeholder="Поиск по названию"
        />
      </div>
      <div className="content">
        {isLoading ? (
          <h2>Идет загрузка...</h2>
        ) : (
          collections
            .filter((obj) =>
              obj.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((obj, index) => (
              <Collection key={index} name={obj.name} images={obj.photos} />
            ))
        )}
      </div>
      <ul className="pagination">
        {[...Array(5)].map((_, index) => (
          <li
            key={index}
            onClick={() => setPage(index + 1)}
            className={index + 1 === page ? "active" : ""}
          >
            {index + 1}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
