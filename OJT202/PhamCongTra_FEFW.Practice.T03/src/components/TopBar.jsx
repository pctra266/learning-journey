import React from 'react';

const TopBar = ({
  search,
  onSearchChange,
  sort,
  onSortChange,
  view,
  onViewChange,
  total
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-6">
      <div className="flex flex-1 items-center space-x-4 mb-4 md:mb-0">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={e => onSearchChange(e.target.value)}
          className="w-full md:w-64 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="flex items-center border border-gray-300 rounded">
          <button
            onClick={() => onViewChange('grid')}
            className={`p-2 ${view === 'grid' ? 'text-blue-600' : 'text-gray-500'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 3a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 12a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2H5zM12 3a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2V5a2 2 0 00-2-2h-3zM12 12a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3z" />
            </svg>
          </button>
          <div className="h-6 border-l border-gray-300" />
          <button
            onClick={() => onViewChange('list')}
            className={`p-2 ${view === 'list' ? 'text-blue-600' : 'text-gray-500'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <span className="text-gray-700 font-medium">{total} Products Found</span>
      </div>

      <div className="flex items-center space-x-2">
        <label className="text-gray-600">Sort by:</label>
        <select
          value={sort}
          onChange={e => onSortChange(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">None</option>
          <option value="price">Price</option>
          <option value="name">Name</option>
          <option value="id">ID</option>
        </select>
      </div>
    </div>
  );
};

export default TopBar;
