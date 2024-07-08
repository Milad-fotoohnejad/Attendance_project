/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          {/* The place to generate the QR Code */}
            <img
              alt="..."
              className="max-w-full rounded-lg shadow-lg"
              src={require("assets/img/qr_code.png")}
            />

            <div className="mt-12">
              <Link
                to="/login"
                className="bg-lightBlue-200 hover:bg-blue-600 text-gray-600 font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                Generate Today's QR Code
              </Link>
            </div>
          </div>
        </div>


        <img
          className="absolute top-0 b-auto right-0 pt-0 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src={require("assets/img/pattern_react.png")}
          alt="..."
        />
      </section>
      <Footer />
    </>
  );
}
