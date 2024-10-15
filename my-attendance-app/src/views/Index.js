/*eslint-disable*/
import React, { useState } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import SessionForm from "components/Forms/SessionForm.js"; // Assuming the form is here

export default function Index() {
  const [showForm, setShowForm] = useState(false); // Control the display of the form

  // Function to handle showing the form when "Get Started" is clicked
  const handleGetStartedClick = () => {
    setShowForm(true);
  };

  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              {showForm ? (
                <SessionForm />
              ) : (
                <>
                  <h2 className="font-semibold text-4xl text-blueGray-600">
                    Welcome to Atten:D
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    Please click on the button below to generate a QR code for this session.
                  </p>
                  <div className="mt-12">
                    <button
                      onClick={handleGetStartedClick}
                      className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-800 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                    >
                      Get started
                    </button>
                  </div>
                </>
              )}
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
