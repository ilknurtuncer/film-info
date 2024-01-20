import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Switch from "./Switch";
import Fav from "./Fav";
import { MovieContext } from "../context/MovieContext";

const Navbarcopy = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const { currentUser, logOut } = useContext(AuthContext);
  const dropdownRef = useRef(null);

  const { favorites } = useContext(MovieContext);
  const fav = favorites.length;

  console.log(mobileMenu);

  const toggleDropdown = () => {
    setIsOpenDropDown(!isOpenDropDown);
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpenDropDown(false);
    }
  };

  useEffect(() => {
    if (isOpenDropDown) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
  }, [isOpenDropDown]);

  return (
    <nav className="sticky top-0 z-50 bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href={"/"} className="flex items-center gap-4">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={30}
              width={30}
              viewBox="0 0 576 512"
              fill={darkMode ? "#fff" : "#000"}
            >
              <path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" />
            </svg>
          </span>

          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Movie App
          </span>
        </a>
        {!currentUser && (
          <div className="flex gap-10 dark:text-white  md:order-2">
            <Link to={"/login"}>Login</Link>
            <Link to={"/register"}>Register</Link>
            <Switch darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        )}
        {currentUser && (
          <div
            className="flex items-center gap-2 md:gap-8 md:order-2 relative "
            ref={dropdownRef}
          >
            <button
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full"
              onClick={toggleDropdown}
            >
              <img
                className="w-8 h-8 rounded-full"
                src={
                  currentUser?.photoURL ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzPb_pSj-ir-9eB6mi0lVJdQP1KKHiB8fRBS1CbmOXGd9Z1FEGMJHbEKhahwhWLGSaEXY&usqp=CAU"
                }
                alt="user photo"
              />
            </button>

            {/* Dropdown menu */}
            {isOpenDropDown && (
              <div
                className={`absolute top-6 right-10  z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">
                    {currentUser?.displayName}
                  </span>
                  <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                    {currentUser?.email}
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li onClick={logOut}>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            )}
            <Fav fav={fav} />
            <Switch darkMode={darkMode} setDarkMode={setDarkMode} />
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}
        {mobileMenu && (
          <div
            className={`fixed w-[100wh] h-[100vh]  inset-0 top-[4.5rem] bottom-0 left-0 right-0 z-0 transition-colors overflow-y-hidden ${
              mobileMenu ? "visible bg-black/50 " : "invisible"
            } `}
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <div className="items-center justify-between w-full md:flex md:w-auto md:order-1"  onClick={(e) => e.stopPropagation()}>
              <ul className="flex flex-col font-medium p-4 md:p-0  border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="/"
                    className="block py-2 pl-3 pr-4  dark:text-white dark:active:bg-blue-700  active:bg-blue-700  hover:bg-gray-100 md:hover:bg-transparent md:dark:hover:bg-transparent rounded md:bg-transparent dark:hover:bg-gray-700 md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded  dark:active:bg-blue-700  active:bg-blue-700  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded  dark:active:bg-blue-700  active:bg-blue-700  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700  dark:active:bg-blue-700  active:bg-blue-700 "
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700  dark:active:bg-blue-700  active:bg-blue-700 "
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbarcopy;