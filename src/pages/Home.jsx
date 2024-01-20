import { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";
import { AuthContext } from "../context/AuthContext";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { movies, loading, getMovies } = useContext(MovieContext);
  const { currentUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm("");
    } else {
      getMovies(FEATURED_API);
    }
  };

  return (
    <div className="dark:bg-gray-700 bg-gray-100">
      {currentUser && (
        <form className="max-w-screen-sm mx-auto pt-4" onSubmit={handleSubmit}>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm  text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
              placeholder="Search a movie..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value.trim())}
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Search
            </button>
          </div>
        </form>
      )}
      <div className="flex justify-center flex-wrap gap-6 p-4 h-full">
        {loading ? (
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52"
            role="status"
          >
            <span className="visually-hidden">Loading</span>
          </div>
        ) : (
          movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
        )}
      </div>
    </div>
  );
};

export default Home;