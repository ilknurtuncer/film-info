import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Video from "../components/Video";

const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const MovieDetail = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [videoKey, setVideoKey] = useState();

  const { id } = useParams();

  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;

  useEffect(() => {
    axios
      .get(movieDetailBaseUrl)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err));
    axios
      .get(videoUrl)
      .then((res) => setVideoKey(res.data.results[0].key))
      .catch();
  }, [movieDetailBaseUrl,videoUrl]);

  return (
    <div className="min-h-screen grid place-items-center font-mono dark:bg-gray-700 bg-gray-100 text-center" key={id}>
      <div className="bg-white rounded-md dark:bg-gray-800 shadow-lg">
        <div className="md:flex px-4 leading-none max-w-4xl">
          <div className="flex-none ">
            <img
              src={
                movieDetails
                  ? baseImageUrl + movieDetails.backdrop_path
                  : defaultImage
              }
              alt="pic"
              className="h-80 w-80 rounded-md transform -translate-y-4 border-4 dark:border-gray-300 border-gray-500 shadow-lg"
            />
          </div>
          <div className="flex-col dark:text-gray-300">
            <p className="pt-4 text-2xl font-bold">{movieDetails.title}</p>
            <hr className="hr-text" />
            <div className="text-md flex justify-between px-4 my-2">
              <span className="font-bold">
                2h 2min | Crime, Drama, Thriller
              </span>
              <span className="font-bold" />
            </div>
            <p className="hidden md:block px-4 my-4 text-sm text-left">
              {movieDetails.overview}
            </p>
          </div>
        </div>
        {/* ************* VİDEO ************* */}
        <div className="flex justify-between items-center px-4 mb-4 w-full">
          <div className="w-full my-3">
           {videoKey && <Video videoKey={videoKey} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;