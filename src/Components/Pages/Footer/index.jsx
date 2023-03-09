import React from "react";
import { FooterWrapper } from "./FooterWrapper.style";
import Container from "../../Common/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGlobe, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import MyLink from "../../Common/MyLink";
import {
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const card = [
  {
    img: <FontAwesomeIcon icon={faGlobe} />,
    title: "75, Mustakillik St., Tashkent, Uzbekistan",
    descr: "Our Address",
  },
  {
    img: <FontAwesomeIcon icon={faEnvelope} />,
    title: "support@sunet.uz",
    descr: "Our Mailbox",
  },
  {
    img: <FontAwesomeIcon icon={faPhoneVolume} />,
    title: "+99 871-140-11-48",
    descr: "Our Phone",
  },
];

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <div className="logo">
          <img src="/images/logo.png" alt="" />
        </div>
        <div className="cards">
          {card.map((v, i) => (
            <div key={i} className="card">
              <div className="icon">{v.img}</div>
              <h3 className="title">{v.title}</h3>
              <p className="descr">{v.descr}</p>
            </div>
          ))}
        </div>

        <div className="links">
          <ul>
            <li>About Us</li>
            <li>services</li>
            <li>recources</li>
            <li>CSR</li>
            <li>careers</li>
          </ul>
        </div>

        <p className="sunet">
          Copyright © 2023 SUNET Technology. All rights reserved.
        </p>

        {/* <div className="icons">
          <MyLink to="/">
            <FontAwesomeIcon icon={faTwitter} />
          </MyLink>
          <MyLink to="/">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </MyLink>
          <MyLink to="/">
            <FontAwesomeIcon icon={faInstagram} />
          </MyLink>
        </div> */}
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
