import React from "react";
import { FooterWrapper } from "./FooterWrapper.style";
import Container from "../../Common/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const card = [
  {
    img: <FontAwesomeIcon icon={faEnvelope} />,
    title: "411 University St, Seattle, USA",
    descr: "Our Address",
  },
  {
    img: <FontAwesomeIcon icon={faEnvelope} />,
    title: "contact@oceanthemes.net",
    descr: "Our Mailbox",
  },
  {
    img: <FontAwesomeIcon icon={faEnvelope} />,
    title: "+1 -800-456-478-23",
    descr: "Our Phone",
  },
];

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <div className="logo">
          <img src="images/logo.png" alt="" />
        </div>
        <div className="cards">
          {card.map((v, i) => (
            <div key={i} className="card"></div>
          ))}
        </div>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
