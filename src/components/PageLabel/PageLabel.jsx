import React from "react";

const PageLabel = ({ text1, text2 }) => {
  return (
    <h1 className="font-bold text-5xl m-auto w-fit mb-10">
      {text1} <span className="text-white bg-black p-2 ">{text2}</span>
    </h1>
  );
};

export default PageLabel;
