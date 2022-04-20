import React from "react";

const Button = ({ text, toogle, second }) => {
  return (
    <>
      {" "}
      {second ? (
        <button className={toogle ? "text-white" : "text-black"}>{text}</button>
      ) : (
        <h1
          role={"button"}
          className="mt-2 w-full  hover:bg-white hover:text-black p-2  rounded text-white"
        >
          {text}
        </h1>
      )}
    </>
  );
};

export default Button;
