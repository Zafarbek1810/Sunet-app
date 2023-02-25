import React from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { OurHistoryWrapper } from "./OurHistory.style";
import HistoryBanner from "./Sections/Banner";
import SecondHistory from "./Sections/SecondHistory";
import ThirdHistory from "./Sections/ThirdHistory";

const OurHistory = () => {
  return (
    <OurHistoryWrapper>
      <Header />
      <div className="main-content">
        <HistoryBanner />
        <SecondHistory/>
        <ThirdHistory/>
      </div>
      <Footer />
    </OurHistoryWrapper>
  );
};

export default OurHistory;
