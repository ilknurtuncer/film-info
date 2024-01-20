import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState(
    JSON.parse(sessionStorage.getItem("favorites")) || []
  );

  const getMovies = (API) => {
    setLoading(true);

    axios
      .get(API)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));

      setLoading(false);
  };

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const addToFav = (movie) => {
    let isFavorite = favorites.some((item) => item.id === movie.id);

    if (isFavorite) {
      let newFavorites = favorites.filter((item) => item.id !== movie.id);
      setFavorites(newFavorites);
      sessionStorage.setItem("favorites", JSON.stringify(newFavorites));
    } else {
      let newFavorites = [...favorites, movie];
      setFavorites(newFavorites);
      sessionStorage.setItem("favorites", JSON.stringify(newFavorites));
    }
  };

  const values = { movies, loading, getMovies, addToFav, favorites };
  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};

export default MovieContextProvider;