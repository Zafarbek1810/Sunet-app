import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import BannerEmp from "./BannerEmp";
import SecondEmp from "./SecondEmp";

const Employer = () => {
  return (
    <>
      <Header />
      <div className="main">
        <BannerEmp/>
        <SecondEmp/>
      </div>
      <Footer />
    </>
  );
};

export default Employer;
