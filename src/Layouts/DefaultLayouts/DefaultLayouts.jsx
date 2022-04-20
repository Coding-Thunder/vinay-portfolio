import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LoginModal from "../../components/LoginModal/LoginModal";

const DefaultLayouts = ({ component: Component, parentClass }) => {
  return (
    <>
      <LoginModal />
      <div className={parentClass}>
        <Header />
        <Component />
        <Footer />
      </div>
    </>
  );
};

export default DefaultLayouts;
