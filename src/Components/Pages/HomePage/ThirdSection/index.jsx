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
import ProcesSvg from "../../../Common/Svg/ProcesSvg";
import QualitySvg from "../../../Common/Svg/QualitySvg";
import ReadySvg from "../../../Common/Svg/ReadySvg";
import WorkerSvg from "../../../Common/Svg/WorkerSvg";
import { BottomStyle, ThirdSectionWrapper } from "./ThirdSection.style";

const card = [
  {
    id: "01",
    title: "Quick Preparation",
    descr: "Get your project ready to delegate.",
    icon: <ReadySvg />,
  },
  {
    id: "02",
    title: "Easy Selection",
    descr: "Select your employee for this task.",
    icon: <WorkerSvg />,
  },
  {
    id: "03",
    title: "All In One",
    descr: "Recruit, hire, train, involve in work with us.",
    icon: <ProcesSvg />,
  },
  {
    id: "04",
    title: "Quality Assured",
    descr:
      "Make sure work is done according to our customized quality assurance program.",
    icon: <QualitySvg />,
  },
];

const ThirdSection = () => {
  return (
    <>
      <ThirdSectionWrapper>
        <Container>
          <div className="wrap">
            <p className="subtitle"> WHY CHOOSE US</p>
            <h3 className="title">Why Companies Choose SUNET</h3>
            <div className="cards">
              {card.map((v, i) => (
                <div key={i} className="card">
                  <span>{v.id}</span>
                  <h6>{v.title}</h6>
                  <p>{v.descr}</p>
                  <MyLink to="/services/how-we-work" className="link">
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
            <div className="twoCard1">
              <div className="count">
                <CountUp end={20} duration={2} suffix="+" />
              </div>
              <h4 className="title">Industries</h4>
              <p className="descr">
                We have relevant experience and expertise in more than twenty
                industies.
              </p>
            </div>
            <div className="twoCard2">
              <div className="count">
                <CountUp end={100} duration={2} suffix="+" />
              </div>
              <h4 className="title">Current Positions </h4>
              <p className="descr">
                The positions are covered from document processing to call
                centers and analytics.
              </p>
            </div>
          </div>
        </Container>
      </BottomStyle>
    </>
  );
};

export default ThirdSection;
