import React, { useState, useEffect } from "react";
import MenuIcon from "../MenuIcon/MenuIcon";
import Button from "../Button/Button";
const Header = () => {
  const [state, setState] = useState({
    items: [
      { title: "Home", click: () => console.log("clicked") },
      { title: "About", click: () => console.log("clicked") },
      { title: "Contact", click: () => console.log("clicked") },
      { title: "Projects", click: () => console.log("clicked") },
    ],
    toogle: false,
    heightForDropDown: "",
    showMobileItems: false,
  });

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setState({ ...state, toogle: true });
    } else {
      setState({ ...state, toogle: false });
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);
  return (
    <>
      <div
        className={`z-50 ${state.toogle &&
          "bg-black"}  px-4 fixed w-full transition-all text-lg flex justify-end ${
          state.toogle
            ? `2xl:h-20 xl:h-20 lg:h-20  ${state.heightForDropDown}`
            : `2xl:h-28 xl:h-28 lg:h-28  ${state.heightForDropDown}`
        }  items-center text-white`}
      >
        <div
          className={`2xl:flex xl:flex lg:flex md:flex sm:flex hidden flex-col w-full text-white  justify-between`}
        >
          <p>
            {" "}
            <span
              style={{
                color: state.toogle ? "white" : "crimson",
              }}
              className="2xl:text-5xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-2xl"
            >
              Vinay
            </span>
            <span
              style={{
                color: state.toogle ? "crimson" : "black",
              }}
              className="text-black 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-1xl"
            >
              {" "}
              Maheshwari
            </span>
          </p>
        </div>

        <div className="lg:flex md:flex sm:flex sm:w-2/3   lg:w-2/3 md:w-2/3 hidden  justify-between">
          {state.items.map((data) => (
            <Button
              text={data.title}
              onClick={data.click}
              second
              toogle={state.toogle}
            />
          ))}
        </div>
      </div>
      <div
        className={`2xl:hidden xl:hidden lg:hidden md:hidden  bg-black px-4 py-4 fixed w-full transition-all text-lg flex flex-col items-center  h-${state.heightForDropDown}`}
      >
        <MenuIcon
          handleClick={() =>
            setState({ ...state, showMobileItems: !state.showMobileItems })
          }
          show={state.showMobileItems}
        />{" "}
        <div
          className={`2xl:hidden xl:hidden  lg:hidden md:hidden  flex flex-col w-full text-white  justify-between`}
        >
          <p>
            {" "}
            <span
              style={{
                color: "crimson",
              }}
              className=" text-2xl"
            >
              Vinay
            </span>
            <span> Maheshwari</span>
          </p>
        </div>
        <div
          className={` 2xl:hidden xl:hidden  transition-transform  lg:hidden md:hidden     ${
            state.showMobileItems
              ? "h-full transform-none"
              : "h-0 -translate-x-full"
          } flex flex-col w-full text-white  justify-between `}
        >
          {state.items.map((data) => (
            <Button text={data.title}></Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
