import React from 'react';

const Sidebar = ({ categories, companies, filters, onFilterChange, onClear }) => {
  return (
    <aside className="w-64 p-4 bg-white shadow rounded space-y-6">
      <div>
        <h3 className="font-semibold mb-2">Category</h3>
        {['All', ...categories].map(cat => (
          <label key={cat} className="block">
            <input
              type="radio"
              name="category"
              value={cat.toLowerCase()}
              checked={filters.category === cat.toLowerCase()}
              onChange={e => onFilterChange('category', e.target.value)}
              className="mr-2"
            />
            {cat}
          </label>
        ))}
      </div>

      <div>
        <h3 className="font-semibold mb-2">Company</h3>
        {['All', ...companies].map(comp => (
          <label key={comp} className="block">
            <input
              type="radio"
              name="company"
              value={comp.toLowerCase()}
              checked={filters.company === comp.toLowerCase()}
              onChange={e => onFilterChange('company', e.target.value)}
              className="mr-2"
            />
            {comp}
          </label>
        ))}
      </div>

      <button
        onClick={onClear}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Clear All Filter
      </button>
    </aside>
  );
};

export default Sidebar;
