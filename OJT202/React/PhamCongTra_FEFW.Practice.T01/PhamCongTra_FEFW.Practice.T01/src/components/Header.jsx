import React from "react";
import people from "../assets/people.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-600 ">
      <Link to="/" className="flex items-center px-4 h-12 shadow text-white" >
      <img src={people} alt="people" className=" mr-2" />
      <span className="font-medium">Customer Manager</span>
      </Link>
    </div>
  );
};

export default Header;
