// src/components/FilmYear.jsx

import React from 'react';

const FilmYear = ({ film, onYearClick }) => {
  return (
    <p onClick={() => onYearClick(film)} style={{ cursor: 'pointer' }}>
      {film.date}
    </p>
  );
};

export default FilmYear;

