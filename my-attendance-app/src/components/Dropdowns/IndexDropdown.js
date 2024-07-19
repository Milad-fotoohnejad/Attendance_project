import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";

const IndexDropdown = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = useRef(null);
  const popoverDropdownRef = useRef(null);

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const handleClickOutside = (event) => {
    if (
      popoverDropdownRef.current &&
      !popoverDropdownRef.current.contains(event.target) &&
      btnDropdownRef.current &&
      !btnDropdownRef.current.contains(event.target)
    ) {
      closeDropdownPopover();
    }
  };

  useEffect(() => {
    if (dropdownPopoverShow) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownPopoverShow]);

  return (
    <>
      <a
        className="hover:text-blueGray-500 text-blueGray-200 bg-lightBlue-600 rounded px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        Dashboard
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "text-base z-50 float-left bg-lightBlue-600 bg-opacity-80 py-3 list-none text-left rounded shadow-2xl min-w-48"
        }
      >
        <Link
          to="/admin/dashboard"
          className="text-md py-2 border-b border-white px-4 font-normal block w-full whitespace-nowrap text-white hover:text-blueGray-500"
        >
          Dashboard
        </Link>
        <Link
          to="/admin/settings"
          className="text-md py-2 border-b border-white px-4 font-normal block w-full whitespace-nowrap text-white hover:text-blueGray-500"
        >
          Settings
        </Link>
        <Link
          to="/profile"
          className="text-md py-2 px-4 font-normal block w-full whitespace-nowrap text-white hover:text-blueGray-500"
        >
          Profile
        </Link>
      </div>
    </>
  );
};

export default IndexDropdown;
