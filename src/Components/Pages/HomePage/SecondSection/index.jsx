import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Container from "../../../Common/Container";
import MyLink from "../../../Common/MyLink";
import { SecondSectionWrapper } from "./SecondSection.style";
import SupportSvg from "../../../Common/Svg/SupportSvg"

const SecondSection = () => {
  return (
    <SecondSectionWrapper>
      <Container>
        <section>
          <div className="left">
            <h4>About Company</h4>

            <h2>You Are Going to Love The Work You Do</h2>

            <p>
              Learning to delegate helps you to organize your operations in more
              effective manner and be more productive. Meet your clients, work
              on the creative side of your work, attend more industry events and
              outsource time consuming and energy draining operations to us. We
              have got you covered.
            </p>

            <div className="info-element">
              <div className="element">
                <img
                  className="element__img"
                  src="/images/aboutznachok.png"
                  alt=""
                />
                <h5 className="element__title">Proven Approach</h5>
                <div className="element__line" />
                <p className="element__text">
                  Hiring, training, delivering awesome results on the high
                  quality, ensuring full circle performance review.
                </p>
              </div>

              <div className="element">
                <img
                  className="element__img"
                  src="/images/support.png"
                  alt=""
                  style={{marginBottom:18}}
                />
                <h5 className="element__title">Quick Support</h5>
                <div className="element__line" />
                <p className="element__text">
                  24/7 support to make sure the needs of your project met on
                  time.
                </p>
              </div>
            </div>
          </div>

          <div className="right">
            <img src="/images/about2.png" alt="" />
            <div className="bottom">
              <FontAwesomeIcon icon={faArrowRight} className="right-icon" />
              <MyLink to="/about/our-history">learn more about us</MyLink>
            </div>
          </div>
        </section>
      </Container>
    </SecondSectionWrapper>
  );
};

export default SecondSection;
