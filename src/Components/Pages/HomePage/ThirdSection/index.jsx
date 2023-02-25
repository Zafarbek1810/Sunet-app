import {
  faAngleRight,
  faArrowRight,
  faRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CountUp from "react-countup";
import Container from "../../../Common/Container";
import MyLink from "../../../Common/MyLink";
import CompSvg from "../../../Common/Svg/CompSvg";
import { BottomStyle, ThirdSectionWrapper } from "./ThirdSection.style";

const card = [
  {
    id: "01",
    title: "Product Design",
    descr:
      "Our product design service lets you prototype, test and validate your ideas",
    icon: <CompSvg />,
  },
  {
    id: "02",
    title: "Development",
    descr:
      "Our product design service lets you prototype, test and validate your ideas.",
    icon: <CompSvg />,
  },
  {
    id: "03",
    title: "Data Analytics",
    descr:
      "Our product design service lets you prototype, test and validate your ideas.",
    icon: <CompSvg />,
  },
  {
    id: "04",
    title: "Cyber Security",
    descr:
      "Our product design service lets you prototype, test and validate your ideas.",
    icon: <CompSvg />,
  },
];

const ThirdSection = () => {
  return (
    <>
      <ThirdSectionWrapper>
        <Container>
          <div className="wrap">
            <p className="subtitle"> WHY CHOOSE US</p>
            <h3 className="title">
              Design the Concept of Your Business Idea Now
            </h3>
            <div className="cards">
              {card.map((v, i) => (
                <div key={i} className="card">
                  <span>{v.id}</span>
                  <h6>{v.title}</h6>
                  <p>{v.descr}</p>
                  <MyLink to="/#" className="link">
                    <FontAwesomeIcon icon={faArrowRight} />
                    Learn More
                  </MyLink>
                  <div className="icon">{v.icon}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </ThirdSectionWrapper>
      <BottomStyle>
        <Container>
        <div className="bottom">
          <div className="twoCard">
            <div className="count">
              <CountUp end={15} duration={2} suffix="+" />
            </div>
            <h4 className="title">Countries Worldwide</h4>
            <p className="descr">
              To succeed, every software solution must be deeply integrated into
              the existing tech environment..
            </p>
          </div>
          <div className="twoCard">
            <div className="count">
              <CountUp end={23} duration={2} suffix="k" />
            </div>
            <h4 className="title">Happy Customers</h4>
            <p className="descr">
              To succeed, every software solution must be deeply integrated into
              the existing tech environment..
            </p>
          </div>
        </div>
        </Container>
      </BottomStyle>
    </>
  );
};

export default ThirdSection;
