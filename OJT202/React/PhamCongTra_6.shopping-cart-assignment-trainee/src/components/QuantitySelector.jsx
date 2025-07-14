const QuantitySelector = ({ value, onChange }) => {
  const MIN = 1;
  const MAX = 99;

  return (
    <div className="flex items-center gap-2">
      <button
        className="px-2 py-1 border rounded disabled:opacity-50 cursor-pointer"
        onClick={() => onChange(Math.max(MIN, value - 1))}
        disabled={value <= MIN}
      >
        -
      </button>
      <span className="w-6 text-center">{value}</span>
      <button
        className="px-2 py-1 border rounded disabled:opacity-50 cursor-pointer"
        onClick={() => onChange(Math.min(MAX, value + 1))}
        disabled={value >= MAX}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
