import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className='bg-black text-white py-1.5 space-x-4 px-4'>
      <NavLink
        to="/users"
        className={({ isActive }) =>
          isActive ? "text-white font-bold" : " text-gray-300"
        }
      >
        Users
      </NavLink>
      <NavLink
        to="/photos"
        className={({ isActive }) =>
          isActive ? "text-white font-bold" : " text-gray-300"
        }
      >
        Photos
      </NavLink>
    </nav>
  );
};

export default Header;
