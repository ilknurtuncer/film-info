// src/pages/Main.jsx

import React, { useState } from 'react';
import { data } from '../helper/data';
import FilmInfo from '../components/FilmInfo';
import FilmYear from '../components/FilmYear';
import './Main.css'; // Yeni stil dosyasını ekliyoruz

const Main = () => {
  const [selectedFilm, setSelectedFilm] = useState(null);

  const handleYearClick = (film) => {
    setSelectedFilm(film);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="film-list">
          <h1>Film List</h1>
          {data.map((film) => (
            <div key={film.id}>
              <FilmYear film={film} onYearClick={handleYearClick} />
            </div>
          ))}
        </div>
        <div className="selected-film">
          <h1>Selected Film</h1>
          {selectedFilm && <FilmInfo film={selectedFilm} />}
        </div>
      </div>
    </div>
  );
};

export default Main;


