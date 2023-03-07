import React from "react";
import Container from "../../../Common/Container";
import AdaptingSvg from "../../../Common/Svg/AdaptingSvg";
import BuldingTeamSvg from "../../../Common/Svg/BuldingTeamSvg";
import CompSvg from "../../../Common/Svg/CompSvg";
import ContinuousSupSvg from "../../../Common/Svg/ContinuousSupSvg";
import FoundationSvg from "../../../Common/Svg/FoundationSvg";
import OperationsSvg from "../../../Common/Svg/OperationsSvg";
import WorkspaceSvg from "../../../Common/Svg/WorkspaceSvg";
import { FourthWrapper } from "./fourthsec.style";

const cardData = [
  {
    title: "Continuous Support",
    descr:
      "24-hour/365 days dedicated IT support and robust infrastructure for maximum uptime.",
    icon: <ContinuousSupSvg />,
  },
  {
    title: "Building your dream team",
    descr: "Local dedicated talent acquisition to build and scale your team.",
    icon: <BuldingTeamSvg />,
  },
  {
    title: "Hassle-free Workspace",
    descr:
      "Fully maintained facilities so you never have to worry about furniture, tech equipment, or maintenance.",
    icon: <WorkspaceSvg />,
  },
  {
    title: "Adapting to evolving needs.",
    descr:
      "Constant professional development and upgrade skills of your service provider.",
    icon: <AdaptingSvg />,
  },
  {
    title: "Ensuring Seamless Operations",
    descr:
      "Risk management and disaster recovery plans to keep your team safe and your business running.",
    icon: <OperationsSvg />,
  },
  {
    title: "Building a strong foundation",
    descr: "Training for each position and constant quality assurance.",
    icon: <FoundationSvg />,
  },
];

const FourthSection = () => {
  return (
    <FourthWrapper>
      <Container>
        <h4 className="top-tit"> OUR SERVICE</h4>

        <h2 className="title">
        Our Services Involve
        </h2>

        <div className="box-wrapper">
          {cardData.map((v, i) => (
            <div className="box" key={i}>
              <div className="box-img">
                {v.icon}
              </div>

              <div className="box-tit">
                <h3>{v.title}</h3>
                <p>{v.descr}</p>
              </div>
            </div>
          ))}
        </div>

        <div></div>
      </Container>
    </FourthWrapper>
  );
};

export default FourthSection;
