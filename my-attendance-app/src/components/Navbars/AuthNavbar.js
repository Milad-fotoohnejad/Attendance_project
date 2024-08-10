/*eslint-disable*/
import React from "react";
// components

export default function Navbar(props) {
  return (
    <>
      <style jsx>{`
        @keyframes rainbow-text-animation {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

        .rainbow-text {
          background: linear-gradient(
            270deg,
            #ffafbd,
            #ffc3a0,
            #fffcab,
            #c9ffbf,
            #a0c4ff,
            #d4a0ff,
            #ffafbd
          );
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: rainbow-text-animation 10s ease-in-out infinite;
        }
      `}</style>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 shadow-xl">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-center">
          <div className="w-full relative flex justify-center lg:w-auto lg:static lg:block lg:justify-start">
            <div
              to="/"
              className="rainbow-text text-4xl font-thin leading-relaxed inline-block py-2 whitespace-nowrap uppercase"
            >
              Atten:D
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
