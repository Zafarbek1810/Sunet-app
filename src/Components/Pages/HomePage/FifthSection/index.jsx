import React from "react";
import { useContext, useContextSelector } from "use-context-selector";
import { HeaderContext } from "../../../../Context/HeaderContext";
import { ModalContext } from "../../../../Context/ModalContext/Context";
import Container from "../../../Common/Container";
import MyLink from "../../../Common/MyLink";
import { FifthSectionWrapper } from "./FifthSection.style";

const FifthSection = () => {

  const setIsModalVisible = useContextSelector(
    ModalContext,
    (state) => state[1]
  );

  return (
    <Container>
      <FifthSectionWrapper>
        <h5 className="subtitle">We Carry More Than Just Good Coding Skills</h5>
        <div className="wrap">
          <h3 className="title">Let`s Build Your Project!</h3>
          <button onClick={() => {
            setIsModalVisible((p) => !p);
          }}>Contact us</button>
        </div>
      </FifthSectionWrapper>
    </Container>
  );
};

export default FifthSection;
