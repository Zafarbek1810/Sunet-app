import React from "react";
import Container from "../../../Common/Container";
import MyLink from "../../../Common/MyLink";
import { FifthSectionWrapper } from "./FifthSection.style";

const FifthSection = () => {
  return (
    <Container>
      <FifthSectionWrapper>
        <h5 className="subtitle">We Carry More Than Just Good Coding Skills</h5>
        <div className="wrap">
          <h3 className="title">Let`s Build Your Website!</h3>
          <MyLink to="/#">Contact us</MyLink>
        </div>
      </FifthSectionWrapper>
    </Container>
  );
};

export default FifthSection;
