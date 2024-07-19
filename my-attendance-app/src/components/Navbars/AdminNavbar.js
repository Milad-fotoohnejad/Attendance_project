import React from "react";
import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function AdminNavbar() {
  return (
    <>
      <nav className="fixed top-0 right-1 z-50 md:flex-row md:flex-nowrap md:justify-end flex items-center p-4">
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown />
          </ul>
      </nav>
    </>
  );
}
