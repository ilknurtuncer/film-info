import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";

import { AuthContext } from "../context/AuthContext";
import Favorites from "../pages/Favorites";

const AppRouter = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/details/:id"
          element={currentUser ? <MovieDetail /> : <Navigate to="/login" />}
        />
        <Route
          path="/favorites"
          element={currentUser ? <Favorites /> : <Navigate to="/login" />}
        />
      </Routes>

      <Footer />
    </>
  );
};

export default AppRouter;