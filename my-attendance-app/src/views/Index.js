/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import QRCodeGenerator from "components/QRCodeGenerator.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  const sessionId = "example-session-id"; // Replace with dynamic session ID as needed

  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                QR Code for Session Attendance
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Scan the QR code below to register your attendance for the
                session.
              </p>
              <div className="mt-12">
                <QRCodeGenerator sessionId={sessionId} />
              </div>
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
