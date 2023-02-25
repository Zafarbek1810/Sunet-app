import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaRegular, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Container from "../../../Common/Container";
import { SecondSectionWrapper } from "./SecondSection.style";

const SecondSection = () => {
  return (
    <SecondSectionWrapper>
        <Container>
             
      <section>
        <div className="left">
          <h4> About Company</h4>

          <h2>Your Partner for Software Innovation</h2>

          <p>
            Engitech is the partner of choice for many of the world’s leading
            enterprises, SMEs and technology challengers. We help businesses
            elevate their value through custom software development, product
            design, QA and consultancy services.
          </p>

          <div className="info-element">
            <div className="element">
              <img className="element__img" src="/images/aboutznachok.png" alt="" />
              <h5 className="element__title">Experience</h5>
              <div className="element__line"/>
              <p className="element__text">Our great team of more than 1400 software experts.</p>
            </div>

            <div className="element">
              <img className="element__img" src="/images/aboutznachok.png" alt="" />
              <h5 className="element__title">Quick Support</h5>
              <div className="element__line"/>
              <p className="element__text">We’ll help you test bold new ideas while sharing your.</p>
            </div>
          </div>
        </div>

        <div className="right">
            <div>
                <img src="/images/about1.png" alt="" />
            </div>
            <div className="bottom">
            <FontAwesomeIcon icon={faArrowRight} className="right-icon" />
            <a href="#">learn more about us</a>
            </div>
        </div>
      </section>
      </Container>
    </SecondSectionWrapper>
  );
};

export default SecondSection;
