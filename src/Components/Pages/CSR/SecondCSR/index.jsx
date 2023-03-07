import React from "react";
import Container from "../../../Common/Container";
import { SecondCSRWrapper } from "./SecondCSR.style";

const data = [
  {
    span: "I",
    title: "Promoting gender equality and empowering women",
    descr:
      "We are being a domestic company with international liaisons and cooperation, yet we still, have a firm grasp on the social and human dilemmas of our society. Uzbekistan having patriarchial values for ages, this way has been trying to protect its institute of family and traditional values. However, as in any society through this gender and inclusion possibilities have been violated, and many matters neglected. We are a company, which knows the value of support and timely encouragement. We don’t just realize and accept the existence of this problem. There are many ongoing practical projects: training for young and adolescents, career guidance, and professional development. We don’t just support our female employees and trainees, we get them fit for a sustainable career and life. ",
  },
  {
    span: "II",
    title: "Ensuring environmental stability, by creating awareness",
    descr:
      "Teach Kids Green Economics by organizing workshops, and recycling process, install solar panels and organize technology room for kids, to have better vision, so educate them to be responsible and environmentally aware once they grow up.",
  },
  {
    span: "III",
    title: "Eradicating poverty by creating more job places",
    descr:
      "Poverty eradication is an ethical, social, political, and economic imperative of mankind. It’s easy to give out in the charity, but much harder to teach and instruct, train, and employ human resources. We believe in sustainable change, that providing lifetime earning and learning opportunities would have more impact on each individual, thus affecting one’s family, surrounding, and society and this would create many social lifts for those, whose lives we touch with our training, seminar, job opportunities, and careers. The minimum wage for new employees in our company is 5$/hr, and this is way higher than the standards of our country.",
  },
  {
    span: "IV",
    title: "Embracing progress and setting trends",
    descr:
      "Our company has a history of starting new things in the country: in logistics. in seminars, special courses, developing and using  own software in ERP and CRM, and training for women only, to increase the number of females in the male-dominated logistics and outsourcing industries.",
  },
  {
    span: "V",
    title: "Sustainability in action",
    descr:
      "Courses, training, seminars, employment  - the educational centers we visit. Whenever we start an activity, we want to make sure we develop a mentorship program for our candidates and employees, thus ensuring that help is sustainable not once in  a time event. Numerous memorandums with our partners ensure prolonged and productive partnership.",
  },
];

const SecondCSR = () => {
  return (
    <SecondCSRWrapper>
      <Container>
        <div className="wrap1">
          <div className="left-side">
            <div className="top">
              <span>I</span>
              <h3>Promoting gender equality and empowering women</h3>
            </div>
            <div className="left">
              <p>
                We are being a domestic company with international liaisons and
                cooperation, yet we still, have a firm grasp on the social and
                human dilemmas of our society. Uzbekistan having patriarchial
                values for ages, this way has been trying to protect its
                institute of family and traditional values. However, as in any
                society through this gender and inclusion possibilities have
                been violated, and many matters neglected. We are a company,
                which knows the value of support and timely encouragement. We
                don’t just realize and accept the existence of this problem.
                There are many ongoing practical projects: training for young
                and adolescents, career guidance, and professional development.
                We don’t just support our female employees and trainees, we get
                them fit for a sustainable career and life.{" "}
              </p>
            </div>
          </div>
          <div className="right-side">
            <img src="/images/gender.jpg" alt="" />
          </div>
        </div>
        <div className="wrap2">
          <div className="left-side">
            <img src="/images/environment.jpg" alt="" />
          </div>
          <div className="right-side">
            <div className="top">
              <span>II</span>
              <h3>Ensuring environmental stability, by creating awareness</h3>
            </div>
            <div className="left">
              <p>
                Teach Kids Green Economics by organizing workshops, and
                recycling process, install solar panels and organize technology
                room for kids, to have better vision, so educate them to be
                responsible and environmentally aware once they grow up.
              </p>
            </div>
          </div>
        </div>
        <div className="wrap1">
          <div className="left-side">
            <div className="top">
              <span>III</span>
              <h3>Eradicating poverty by creating more job places</h3>
            </div>
            <div className="left">
              <p>
                Poverty eradication is an ethical, social, political, and
                economic imperative of mankind. It’s easy to give out in the
                charity, but much harder to teach and instruct, train, and
                employ human resources. We believe in sustainable change, that
                providing lifetime earning and learning opportunities would have
                more impact on each individual, thus affecting one’s family,
                surrounding, and society and this would create many social lifts
                for those, whose lives we touch with our training, seminar, job
                opportunities, and careers. The minimum wage for new employees
                in our company is 5$/hr, and this is way higher than the
                standards of our country.
              </p>
            </div>
          </div>
          <div className="right-side">
            <img src="/images/poverty.jpg" alt="" />
          </div>
        </div>
        <div className="wrap2">
          <div className="left-side">
            <img src="/images/trends.jpg" alt="" />
          </div>
          <div className="right-side">
            <div className="top">
              <span>IV</span>
              <h3>Embracing progress and setting trends</h3>
            </div>
            <div className="left">
              <p>
                Our company has a history of starting new things in the country:
                in logistics. in seminars, special courses, developing and using
                own software in ERP and CRM, and training for women only, to
                increase the number of females in the male-dominated logistics
                and outsourcing industries.
              </p>
            </div>
          </div>
        </div>
        <div className="wrap1">
          <div className="left-side">
            <div className="top">
              <span>V</span>
              <h3>Sustainability in action</h3>
            </div>
            <div className="left">
              <p>
                Courses, training, seminars, employment - the educational
                centers we visit. Whenever we start an activity, we want to make
                sure we develop a mentorship program for our candidates and
                employees, thus ensuring that help is sustainable not once in a
                time event. Numerous memorandums with our partners ensure
                prolonged and productive partnership.
              </p>
            </div>
          </div>
          <div className="right-side">
            <img src="/images/Sustainability.jpg" alt="" />
          </div>
        </div>
      </Container>
    </SecondCSRWrapper>
  );
};

export default SecondCSR;
