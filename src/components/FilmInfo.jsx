// src/components/FilmInfo.jsx

import React from 'react';

const FilmInfo = ({ film }) => {
  return (
    <div>
      <h2>{film.title}</h2>
      <p>{film.body}</p>
      <p>Rate: {film.rate}</p>
      <p>Date: {film.date}</p>
      <p>Tags: {film.tags.join(", ")}</p>
    </div>
  );
};

export default FilmInfo;
