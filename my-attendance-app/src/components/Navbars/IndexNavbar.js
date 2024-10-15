/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Format the time and date
  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow-xl">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-blueGray-700 text-2xl font-thin leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              Atten:D
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <div className="text-blueGray-700 text-lg font-normal flex items-center justify-center space-x-4 bg-lightBlue-100 p-4 rounded-lg shadow-lg">
            <div className="flex items-center space-x-2">
              <i className="far fa-calendar-alt text-blueGray-600 text-xl mr-1"></i> {/* Optional Date Icon */}
              <p className="text-xl">{formatDate(currentTime)}</p> {/* Date Display */}
            </div>
            <div className="h-8 border-l-2 border-blueGray-300"></div> {/* Divider */}
            <div className="flex items-center space-x-2">
              <i className="far fa-clock text-blueGray-600 text-xl ml-3 mr-1"></i> {/* Optional Clock Icon */}
              <p className="text-xl font-normal tracking-wider">{formatTime(currentTime)}</p> {/* Time Display */}
            </div>
          </div>

          <div
            className={
              "lg:flex items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <IndexDropdown />
              </li>

              <li className="flex items-center">
                <Link
                  className="bg-red-400 hover:text-blueGray-300 text-xs font-bold uppercase px-4 py-2 rounded outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                  to="/auth/login"
                >
                  <i className="fa-solid fa-arrow-right-from-bracket mr-1"></i>
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
