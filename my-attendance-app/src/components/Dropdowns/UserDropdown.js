import React from "react";
import { createPopper } from "@popperjs/core";
import { Link } from "react-router-dom";

const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <div className="">
        <a
          className="text-blueGray-500"
          href="#pablo"
          ref={btnDropdownRef}
          onClick={(e) => {
            e.preventDefault();
            dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
          }}
        >
          <div className="flex items-center">
            <span className="w-12 h-12 text-sm text-white bg-blueGray-200 rounded-full">
              <img
                alt="..."
                className="w-full rounded-full align-middle border-none shadow-lg"
                src={require("assets/img/team-1-800x800.jpg")}
              />
            </span>
          </div>
        </a>
        <div
          ref={popoverDropdownRef}
          className={
            (dropdownPopoverShow ? "block " : "hidden ") +
            "bg-white text-base z-50 pl-3 pt-6 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
          }
        >
          <div className="">
            <div className="mb-2">
              <a
                className="bg-red-400 hover:text-blueGray-300 text-xs font-bold uppercase px-4 py-2 rounded outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                href="#pablo"
                onClick={(e) => e.preventDefault()}

              >
                <i className="fa-solid fa-arrow-right-from-bracket"></i> Log Out
              </a>
            </div>
            <div className="mb-2 ml-2">
              <Link
                className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                to="/profile"
              >
                <i className="fas fa-user-circle text-blueGray-400 text-sm"></i>{" "}
                Profile Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDropdown;
