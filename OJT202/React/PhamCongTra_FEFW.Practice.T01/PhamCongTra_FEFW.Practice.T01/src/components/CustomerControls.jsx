import React from 'react';
import { FaThLarge, FaListUl } from "react-icons/fa";

const CustomerControls = ({ viewMode, setViewMode, filter, setFilter }) => {
    return (
        <div className="flex justify-between mb-4 items-center flex-wrap gap-4">
          {/* View mode toggle */}
          <div className="flex items-center space-x-4">
            {/* Card View */}
            <label
              className={`flex items-center space-x-1 cursor-pointer ${
                viewMode !== "card" ? "opacity-50" : ""
              }`}
            >
              <input
                type="radio"
                value="card"
                checked={viewMode === "card"}
                onChange={() => setViewMode("card")}
                className="hidden"
              />
              <FaThLarge className={`text-lg ${viewMode === "card" ? "text-black" : "text-gray-500"}`} />
              <span className={viewMode === "card" ? "text-black" : "text-gray-500"}>
                Card View
              </span>
            </label>
      
            <label
              className={`flex items-center space-x-1 cursor-pointer ${
                viewMode !== "list" ? "opacity-50" : ""
              }`}
            >
              <input
                type="radio"
                value="list"
                checked={viewMode === "list"}
                onChange={() => setViewMode("list")}
                className="hidden"
              />
              <FaListUl className={`text-lg ${viewMode === "list" ? "text-black" : "text-gray-500"}`} />
              <span className={viewMode === "list" ? "text-black" : "text-gray-500"}>
                List View
              </span>
            </label>
          </div>
      
          <div className="flex items-center space-x-2">
            <label className="flex items-center space-x-2">
              <span>Filter:</span>
              <input
                type="text"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder="First or Last name"
                className="border border-gray-300 rounded px-2 py-1"
              />
            </label>
          </div>
        </div>
      );
};

export default CustomerControls;
