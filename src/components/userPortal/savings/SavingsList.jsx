import { FaAngleDown } from "react-icons/fa6";

const SavingsList = ({
  handleClick,
  handleSelected,
  isClicked,
  account,
  isActive,
}) => {
  return (
    <div
      className={`py-2 px-5 text-slate-500 rounded-lg border z-30 bg-white cursor-pointer 
      hover:bg-primary-background ${
        isActive ? "border-primary border-[2px]" : ""
        }`}
    >
      <div
        className="grid grid-cols-12"
        onClick={() => {
          handleClick();
          handleSelected(account);
        }}
      >
        <div className="col-span-8">
          <p className="px-2">
            {account.accountNumber}
            <span className="ms-2 me-4">({account.userName})</span>
          </p>
        </div>
        <div className="col-span-4 flex items-center justify-end">
          <div>
            <img
              src={`/images/${account.accountType}.png`}
              alt="Savings Icon"
              style={{ height: "18px" }}
              className="me-4 w-auto"
            />
          </div>
          {isActive && (
            <FaAngleDown
              className={`${
                isClicked ? "transform duration-500 rotate-180 ease-out" : ""
              }`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SavingsList;