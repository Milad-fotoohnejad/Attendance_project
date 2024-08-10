import React from "react";

export default function FooterAdmin() {
  return (
    <>
      <footer className="absolute bottom-0 left-0 right-0 block py-4">
        <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center md:justify-between pt-6 pb-6 justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © {new Date().getFullYear()} Atten:D{" "}
              <a
                href=""
                className="text-blueGray-500 hover:text-blueGray-800"
              >
                by DevNest Studio
              </a>
            </div>
          </div>
        </div>
        </div>
      </footer>
    </>
  );
}
