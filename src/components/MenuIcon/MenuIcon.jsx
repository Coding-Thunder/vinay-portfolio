import React from "react";

const MenuIcon = ({ handleClick, show }) => {
  return (
    <button onClick={handleClick} className="text-white absolute right-2 ">
      <div
        className={`bg-white transition-all ${
          show ? "w-10" : "w-5"
        } h-0.5 m-1 ${show && "rotate-45"}`}
      ></div>
      <div
        className={`bg-white  transition-all${
          show ? "w-10" : "w-5"
        } h-0.5 m-1 ${show && "-rotate-45"}`}
      ></div>
      {!show && <div className="transition-all bg-white w-5 h-0.5 m-1"></div>}
    </button>
  );
};

export default MenuIcon;
