import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 shadow">
      <Link 
        to="/" 
        className="flex items-center px-4 h-12 text-white space-x-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round"
            d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16zM12 4.5v15M3.27 6.96l8.73 5.04 8.73-5.04M3.27 17.04l8.73-5.04 8.73 5.04"
          />
        </svg>
        <span className="font-medium text-lg">The Furniture</span>
      </Link>
    </header>
  );
};

export default Header;
