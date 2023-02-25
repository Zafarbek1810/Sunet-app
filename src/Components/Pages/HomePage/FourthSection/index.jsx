import React from "react";
import Container from "../../../Common/Container";
import CompSvg from "../../../Common/Svg/CompSvg";
import { FourthWrapper } from "./fourthsec.style";

const FourthSection = () => {
  return (
    <FourthWrapper>
      <Container>
        <h4 className="top-tit"> OUR SERVICE</h4>

        <h2 className="title">We Offer a Wide <br /> Variety of IT Services</h2>

        <div className="box-wrapper">
          <div className="box">
            <div className="box-img">
                <CompSvg />
            </div>

            <div className="box-tit">
            <h3>Web Development</h3>
            <p>We carry more than just good coding skills. Our experience makes us stand out from other web development.</p>
            </div>
          </div>
          <div className="box">
            <div className="box-img">
                <CompSvg />
            </div>

            <div className="box-tit">
            <h3>Mobile Development</h3>
            <p>Create complex enterprise software, ensure reliable software integration, modernise your legacy system.</p>
            </div>
          </div>
          <div className="box">
            <div className="box-img">
                <CompSvg />
            </div>

            <div className="box-tit">
            <h3>QA & Testing</h3>
            <p>Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software.</p>
            </div>
          </div>
          <div className="box">
            <div className="box-img">
                <CompSvg />
            </div>

            <div className="box-tit">
            <h3>IT Counsultancy</h3>
            <p>Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app portfolios.</p>
            </div>
          </div>
          <div className="box">
            <div className="box-img">
                <CompSvg />
            </div>

            <div className="box-tit">
            <h3>UI/UX Design</h3>
            <p>Build the product you need on time with an experienced team that uses a clear and effective design process.</p>
            </div>
          </div>
          <div className="box">
            <div className="box-img">
                <CompSvg />
            </div>

            <div className="box-tit">
            <h3>Dedicated Team</h3>
            <p>Build the product you need on time with an experienced team that uses a clear and effective design process.</p>
            </div>
          </div>
        </div>

        <div></div>
      </Container>
    </FourthWrapper>
  );
};

export default FourthSection;
