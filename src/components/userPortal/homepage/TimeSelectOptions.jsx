/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { FaAngleDown } from "react-icons/fa6";

const TimeSelectOption = ({
  className,
  selected,
  handleSelect,
  handleClickWindow,
  isClicked,
},
) => {
  const dropdownRef = useRef(null);
  const times = ["1 Tahun", "6 Bulan", "3 Bulan", "1 Bulan"];

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        handleClickWindow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, handleClickWindow]);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target))
      handleClickWindow(false);
  };

  return (
    <div className={`${className}`} ref={dropdownRef}>
      <div
        className="bg-primary text-white rounded-md cursor-pointer
            relative group"
        onClick={() => {
          handleClickWindow(!isClicked);
        }}
      >
        <div className="grid grid-cols-12 items-center divide-x-2">
          <div className="col-span-9 text-center">
            {selected === false ? (
              <p>Pilih Periode</p>
            ) : (
              <p className="p-2">{times[selected] + " Terakhir"}</p>
            )}
          </div>
          <div className="col-span-3 py-3 flex justify-center group-hover:rounded-md group-hover:bg-indigo-950">
            <FaAngleDown
              className={`text-xl ${
                isClicked ? "rotate-180 duration-200 transform" : ""
              }`}
            />
          </div>
        </div>

        {isClicked && (
          <ul className="absolute z-20 left-0 right-0 top-11 border border-primary rounded-md">
            {times.map((time, index) => (
              // eslint-disable-next-line react/jsx-key
              <li
                className="py-2 px-3 bg-white text-primary rounded-md cursor-pointer
            hover:bg-indigo-100 text-center border-slate-200 border"
                onClick={() => {
                  handleSelect(index);
                }}
              >
                {time + " Terakhir "}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TimeSelectOption;
