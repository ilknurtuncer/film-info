import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import MovieContextProvider from "./context/MovieContext";
import AuthContextProvider from "./context/AuthContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <MovieContextProvider>
          <AppRouter />
          <ToastContainer />
        </MovieContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;