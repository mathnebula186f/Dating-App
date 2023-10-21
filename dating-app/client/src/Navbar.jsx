import React from "react";
import PropTypes from "prop-types";

function Navbar({ setShow }) {
  return (
    <nav className="bg-gray-500 p-4">
      <div className="flex items-center justify-between">
        <img
          src="https://img.freepik.com/premium-vector/hearts-couple-hug-logo-design-vector-love-dating-marriage-wedding-valentines-day-icon_35051-130.jpg"
          alt="Logo"
          className="h-16 w-16 rounded-full"
        />
        <ul className="flex space-x-4">
          <li>
            <button
              onClick={() => setShow(0)}
              className="text-white cursor-pointer font-bold text-lg px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-800"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => setShow(1)}
              className="text-white cursor-pointer font-bold text-lg px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-800"
            >
              Profile
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  setShow: PropTypes.func.isRequired,
};

export default Navbar;
