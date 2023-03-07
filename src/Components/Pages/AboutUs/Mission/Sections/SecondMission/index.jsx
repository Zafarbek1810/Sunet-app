import React from "react";
import Container from "../../../../../Common/Container";
import { SecondMissionWrapper } from "./SecondMission.style";

const SecondMission = () => {
  return (
    <SecondMissionWrapper>
      <Container>
        <div className="wrap">
          <div className="left">
            <h4>ABOUT US</h4>
            <h2>Our mission is </h2>
            <p>
              To provide you with all the chances to grow, optimize your
              options, and get flexible staffing solutions for your projects
              while creating a more qualified workforce in Uzbekistan.
            </p>{" "}
            <br />
            <h2>Our Vision is</h2>
            <p>
              To become a one-stop solution for KPO and BPO back office services
              in Uzbekistan. To excel, grow and provide a diversity of positions
              to our workforce.
            </p>
          </div>

          <div className="right">
            <div className="imgs">
              <h4>Our Mission</h4>
              <img src="/images/mission.jpg" alt="" />
            </div>
            <div className="imgs" >
              <h4 >Our Vision</h4>
              <img  src="/images/vision.jpg" className="visionIm" alt="" />
            </div>
          </div>
        </div>
      </Container>
    </SecondMissionWrapper>
  );
};

export default SecondMission;
