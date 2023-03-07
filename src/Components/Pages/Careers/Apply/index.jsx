import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import BannerCareers from "./BannerCareers";
import Form from "./Form";

const Careers = () => {
  return (
    <>
      <Header />
      <div className="main-content">
        <BannerCareers />
        <Form/>
      </div>
      <Footer />
    </>
  );
};

export default Careers;
