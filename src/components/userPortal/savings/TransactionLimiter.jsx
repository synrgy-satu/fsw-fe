/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const TransactionLimiter = ({ label, value }) => {
  const [newValue, setValue] = useState(Number(value));
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--range-value",
      `${((newValue - 10000) / (15000000 - 10000)) * 100}%`
    );
  }, [newValue]);

  if (!isFocus) {
    if (newValue < 10000) setValue(10000);
    if (newValue > 15000000) setValue(15000000);
  }

  const handleNewValue = (event) => {
    setValue(Number(event.target.value));
  };

  return (
    <div className="-my-1">
      <p className="text-sm text-primary font-bold">{label}</p>
      <div className="flex items-center">
        <p className="text-[.8rem]">
          Min <span>10.000</span>
        </p>
        <div className="relative w-[45%] mx-2 h-3">
          <input
            type="range"
            min="10000"
            max="15000000"
            step="10000"
            value={newValue}
            onChange={handleNewValue}
            className="absolute w-full h-3 bg-transparent rounded-lg appearance-none cursor-pointer z-20"
          />
          <div className="absolute w-full h-3 bg-gray-300 rounded-lg">
            <div
              className="h-3 bg-primary rounded-lg opacity-60"
              style={{
                width: `calc(${
                  ((newValue - 10000) / (15000000 - 10000)) * 100
                }%)`,
              }}
            ></div>
          </div>
        </div>
        <div className="text-sm flex items-center">
          Max
          <input
            className={`[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
              ms-2 bg-white p-1 w-20 text-center rounded-md border ${
                newValue < 10000 || newValue > 15000000
                  ? "border-red-600 border-2 text-red-600 font-bold"
                  : "border-primary"
              }`}
            value={newValue}
            placeholder="0"
            max="15000000"
            step="10000"
            onChange={handleNewValue}
            onFocus={() => setIsFocus(!isFocus)}
            type="text"
          />
        </div>
      </div>
      <style jsx>{`
        input[type="range"] {
          accent-color: #272d87;
        }

        .range-container {
          position: relative;
          width: 100%;
        }

        .range-slider {
          --range-value: ${((newValue - 10000) / (15000000 - 10000)) * 100}%;
        }

        .range-slider::-webkit-slider-runnable-track {
          width: 100%;
          height: 8px;
          background: transparent;
          z-index: 1;
        }

        .range-slider::-moz-range-track {
          width: 100%;
          height: 8px;
          background: transparent;
          z-index: 1;
        }

        .range-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          background: #272d87;
          border-radius: 50%;
          cursor: pointer;
          margin-top: -6px;
          z-index: 2;
          position: relative;
        }

        .range-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #272d87;
          border-radius: 50%;
          cursor: pointer;
          z-index: 2;
          position: relative;
        }

        .range-container::before,
        .range-container::after {
          content: "";
          position: absolute;
          height: 8px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 0;
          border-radius: 5px;
        }

        .range-container::before {
          background: #272d87;
          width: var(--range-value);
          left: 0;
        }

        .range-container::after {
          background: #d1d5db;
          width: calc(100% - var(--range-value));
          right: 0;
        }
      `}</style>
    </div>
  );
};

export default TransactionLimiter;
