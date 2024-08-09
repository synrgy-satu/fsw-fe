const ToggleTransaction = ({ label, isChecked, handleToggle }) => {
  return (
    <div className="flex items-center space-x-4">
      <p className="text-sm text-primary">{label}</p>
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleToggle}
            className="sr-only"
          />
          <div className={`block h-8 w-14 rounded-full border border-primary ${isChecked ? 'bg-primary' : 'bg-primary-background'}`}></div>
          <div
            className={`dot absolute left-1 top-1 h-6 w-6 rounded-full transition-transform ${isChecked ? 'translate-x-6 bg-white' : 'bg-primary'}`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default ToggleTransaction;