import React from "react";
import Container from "../../../../../Common/Container";
import { SecondHistoryWrapper } from "./SecondHistory.style";

const SecondHistory = () => {
  return (
    <SecondHistoryWrapper>
      <Container>
        <div className="wrap">
          <div className="left">
            <img src="/images/poverty.jpg" alt="" />
          </div>
          <div className="right">
            <h4>WHO WE ARE</h4>

            <h2>History of company</h2>

            <p>
            With over 9 years of experience in this industry, our company has the capability of providing effective solutions through outsourcing various office functions for each customer. Our team of qualified personnel offers outsourcing services for companies from different sectors including Transportation and Logistics, Retail, Healthcare, Insurance, Telecommunications, Manufacturing, and others. We have been proudly providing different voice call outsourcing, non-voice BPO, data entry services, and document processing services. Our professional workforce, high technological capabilities, and innovative practices enable us to create a customized approach that meets customer needs.
            </p>

            {/* <div className="info-element">
              <div className="element">
                <img
                  className="element__img"
                  src="/images/aboutznachok.png"
                  alt=""
                />
                <h5 className="element__title">Experience</h5>
                <div className="element__line" />
                <p className="element__text">
                  Our great team of more than 1400 software experts.
                </p>
              </div>

              <div className="element">
                <img
                  className="element__img"
                  src="/images/aboutznachok.png"
                  alt=""
                />
                <h5 className="element__title">Quick Support</h5>
                <div className="element__line" />
                <p className="element__text">
                  We’ll help you test bold new ideas while sharing your.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </Container>
    </SecondHistoryWrapper>
  );
};

export default SecondHistory;
