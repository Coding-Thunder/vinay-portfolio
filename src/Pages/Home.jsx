import React, { useState } from "react";
import { connect } from "react-redux";
import Button2 from "../components/Button2/Button2";
import { toogleAuthModal } from "../components/redux/auth/auth.action";
import HomeBanner from "../assets/images/home_banner.svg";
import MyWork from "../components/MyWork/MyWork";

const Home = ({ handleOpen }) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div className="h-screen flex lg:flex-row  xl:flex-row 2xl:flex-row md:flex-row sm:flex-row flex-col-reverse justify-around items-center p-20">
        <div className="flex flex-col justify-center items-center 2xl:items-start xl:items-start lg:items-start md:items-start sm:items-start 2xl:w-3/5 xl:w-3/5 lg:w-3/5 md:w-3/5 sm:w-3/5 w-screen">
          <h1 className="text-3xl mb-4">Start your journey </h1>
          <Button2
            loading={loading}
            text="Get Started"
            handleClick={() => handleOpen()}
          />
        </div>
        <div className="flex justify-center items-center 2xl:w-2/5 xl:w-2/5 lg:w-2/5 md:w-2/5 sm:w-2/5 w-full">
          <img className="w-full z-1" src={HomeBanner} alt="home" />
        </div>
      </div>
      <MyWork />
    </>
  );
};
const mapDispatchToProps = (dispatch) => ({
  handleOpen: () => dispatch(toogleAuthModal()),
});

export default connect(null, mapDispatchToProps)(Home);
