import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
  const { favorites } = useContext(MovieContext);
  return (
    <div className="flex min-h-screen justify-center flex-wrap gap-6 p-4 dark:bg-gray-700 bg-gray-100 ">
      {favorites.length === 0 && (
        <div className="w-full min-h-full flex justify-center items-center">
          <h1 className="text-2xl font-extrabold dark:text-white ">
            There is no movie you like...
          </h1>
        </div>
      )}
      {favorites.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default Favorites;