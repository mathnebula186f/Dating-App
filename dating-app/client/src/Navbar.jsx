import React from 'react';
import PropTypes from 'prop-types';

function Navbar({ setShow }) {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <a onClick={() => setShow(0)} className="text-white hover:text-blue-700 cursor-pointer">Home</a>
        </li>
        <li>
          <a onClick={() => setShow(1)} className="text-white hover:text-blue-700 cursor-pointer">Profile</a>
        </li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  setShow: PropTypes.func.isRequired,
};

export default Navbar;
