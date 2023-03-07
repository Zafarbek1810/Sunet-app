import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import BannerHowWork from "./Banner";
import SecondHowWork from "./SecondHowWork";
import Steps from "./Steps";

const HowWork = () => {
  return (
    <>
      <Header />
      <BannerHowWork />
      <SecondHowWork />
      <Steps/>
      <Footer />
    </>
  );
};

export default HowWork;
