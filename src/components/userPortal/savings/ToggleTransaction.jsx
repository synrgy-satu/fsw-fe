// eslint-disable-next-line react/prop-types
const ToggleTransaction = ({ label, isChecked, handleToggle }) => {
  return (
    <div className="flex items-center space-x-2 justify-between">
      <p className="text-[.74rem] text-primary">{label}</p>
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleToggle}
            className="sr-only"
          />
          <div className={`block h-6 w-10 rounded-full border border-primary ${isChecked ? 'bg-primary-background' : 'bg-primary'}`}></div>
          <div
            className={`dot absolute left-0 top-0 h-6 w-6 rounded-full transition-transform ${isChecked ? 'translate-x-4 bg-primary' : 'bg-primary-background border border-primary'}`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default ToggleTransaction;