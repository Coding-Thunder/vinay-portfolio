import React from "react";

const Button2 = ({ text, handleClick, loading }) => {
  return (
    <div className="w-fit bg-black flex items-center justify-center px-4 py-2 rounded">
      {loading && (
        <div class="rounded mr-2 animate-spin ease duration-300 w-5 h-5 border-2 border-white" />
      )}
      <button onClick={handleClick} className="text-2xl text-white ">
        {text}
      </button>
    </div>
  );
};

export default Button2;
