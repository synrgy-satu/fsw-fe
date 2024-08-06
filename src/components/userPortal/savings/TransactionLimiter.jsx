const TransactionLimiter = ({ label, value, handleChange }) => {
  return (
    <div>
      <p className="text-md text-primary font-bold">{label}</p>
      <div className="flex items-center">
        <p className="text-[.8rem]">
          Min <span>10.000</span>
        </p>
        <input
          type="range"
          min="10000"
          max="15000000"
          step="1000"
          value={value}
          onChange={handleChange}
          className="w-[45%] mx-2 h-3 bg-slate-300 rounded-lg appearance-none cursor-pointer slider-thumb"
        />
        <div className="text-sm flex items-center">
          Max
          <div className="ms-2 bg-white border border-primary rounded-lg p-1 w-20">
            <p className="text-center">{value}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionLimiter;