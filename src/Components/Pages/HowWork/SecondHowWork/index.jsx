import React from "react";
import Container from "../../../Common/Container";
import { SecondHowWorkWrappers } from "./SecondHowWork.style";
import MyLink from "../../../Common/MyLink";

const SecondHowWork = () => {
  return (
    <SecondHowWorkWrappers>
      <Container>
        <h3 className="title">How do we work</h3>
        <ol type="1">
          <li>
            <MyLink to="/services/how-we-work/#step1">
              <div className="spanIn">||</div>Fill out the brief on our website{" "}
            </MyLink>{" "}
          </li>
          <li>
            <MyLink to="/services/how-we-work/#step2">
              <div className="spanIn">||</div>Discuss the project with the
              Client
            </MyLink>{" "}
          </li>
          <li>
            <MyLink to="/services/how-we-work/#step3">
              <div className="spanIn">||</div>Recruit people from the existing
              and potential candidates
            </MyLink>{" "}
          </li>
          <li>
            <MyLink to="/services/how-we-work/#step4">
              <div className="spanIn">||</div>Arrange an interview with the
              Client
            </MyLink>{" "}
          </li>
          <li>
            <MyLink to="/services/how-we-work/#step5">
              <div className="spanIn">||</div>Train and instruct recruited
              personnel
            </MyLink>{" "}
          </li>
          <li>
            <MyLink to="/services/how-we-work/#step6">
              <div className="spanIn">||</div>Hand over the job
            </MyLink>{" "}
          </li>
          <li>
            <MyLink to="/services/how-we-work/#step7">
              <div className="spanIn">||</div>Arrange a quality control system
              for the given project/assignment/position with the Client
            </MyLink>{" "}
          </li>
          <li>
            <MyLink to="/services/how-we-work/#step8">
              <div className="spanIn">||</div>Deliver periodical quality
              assurance reports{" "}
            </MyLink>{" "}
          </li>
        </ol>
      </Container>
    </SecondHowWorkWrappers>
  );
};

export default SecondHowWork;
