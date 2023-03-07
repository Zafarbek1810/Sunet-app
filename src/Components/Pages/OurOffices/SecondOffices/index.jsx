import React from "react";
import { SecondOfficesWrapper } from "./SecondOffices.style";
import Container from "../../../Common/Container";

const SecondOffices = () => {
  return (
    <SecondOfficesWrapper>
      <Container>
        <div className="wrap">
          <div className="left">
            <img src="/images/Revotech.jpg" alt="" />
          </div>
          <div className="right">
            <h4 className="title">Accessible Office Location.</h4>
            <p>
              With the location in the center of the city, where we easily
              reachable by our clients, associates we provide suitable and
              comfortable location . Our office is located in one of the best
              transportation hubs in the city, which makes it easy for people to
              get here in any part of the day, which is vital for the company,
              which operates 24/7.
            </p>
          </div>
        </div>
        <div className="wrap2">
          <h4 className="title">More Than Just Work.</h4>
          <p>
            We adhere to the principles work/balance, office not only place of
            tedious work and reckless deadlines, but place to socialize, to grow
            and learn, and fulfill your objectives. Productivity is higher when
            people have a motivation, feel heard and seen.
          </p>
          <div className="wrapperImg">
          <div className="first">
            <div className="out_img">
              <img className="imgtop" src="/images/s3.jpg" alt="" />
            </div>
            <div className="out_img">
              <img className="imgbot" src="/images/tennis3.jpg" alt="" />
            </div>
          </div>
          <div className="second">
            <div className="out_img">
              <img className="imgtop" src="/images/tennis2.jpg" alt="" />
            </div>
            <div className="out_img">
              <img className="imgbot" src="/images/cofee.jpg" alt="" />
            </div>
          </div>
          <div className="third">
            <div className="out_img">
              <img className="imgtop" src="/images/s34.jpg" alt="" />
            </div>
            <div className="out_img">
              <img className="imgbot" src="/images/s31.jpg" alt="" />
            </div>
          </div>
          </div>
          <div className="imgs"></div>
        </div>
        <div className="wrap2">
          <h4 className="title">Facilities With All Needs In Mind.</h4>
          <p>
            We put an effort to make our offices spacious, modern and equipped
            to suit the needs of our employees for better performance.
          </p>
          <div className="imgs">
            <div className="out_img">
              <img src="/images/p1.jpg" alt="" />
            </div>
            <div className="out_img">
              <img src="/images/p3.jpg" alt="" />
            </div>
            <div className="out_img">
              <img src="/images/p2.jpg" alt="" />
            </div>
          </div>
        </div>
      </Container>
    </SecondOfficesWrapper>
  );
};

export default SecondOffices;
