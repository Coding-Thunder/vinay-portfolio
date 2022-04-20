import React, { useState } from "react";

const WorkCard = ({
  text,
  children,
  link,
  ColorClass,
  hover = 20,
  upWards = 0,
}) => {
  const [effect, setEffect] = useState(false);
  return (
    <a
      href={link}
      className={`m-12 h-fit w-fit translate-y-${upWards}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        onMouseOver={() => setEffect(true)}
        className="cursor-pointer mt-2 flex items-center relative  w-96 h-96  overflow-hidden border-2 rounded-3xl shadow-2xl "
      >
        <div className="w-96 p-5 h-auto bottom-0 right-0 absolute">{text} </div>
        <div
          onMouseOver={() => setEffect(true)}
          className={` w-full  rounded-lg shadow-lg  h-full top-0 right-0 absolute transition-transform ${ColorClass} flex justify-center items-center ${effect &&
            `hover:-translate-y-${hover}`}`}
        >
          {children}
        </div>
      </div>
    </a>
  );
};

export default WorkCard;
