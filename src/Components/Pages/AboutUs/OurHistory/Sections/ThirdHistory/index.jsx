import React from "react";
import { ThirdHistoryWrapper } from "./ThirdHistory.style";
import Container from "../../../../../Common/Container";

const cardData = [
  {
    title: "Continuous Support",
    descr:
      "24-hour/365 days dedicated IT support and robust infrastructure for maximum uptime.",
  },
  {
    title: "Building your dream team",
    descr:
      "Local dedicated talent acquisition to build and scale your team.",
  },
  {
    title: "Hassle-free Workspace",
    descr:
      "Fully maintained facilities so you never have to worry about furniture, tech equipment, or maintenance.",
  },
  {
    title: "Adapting to evolving needs.",
    descr:
      "Constant professional development and upgrade skills of your service provider, whether it a change in the software used, change of policies in your company, or necessity of new skills acquisition .",
  },
  {
    title: "Ensuring Seamless Operations",
    descr:
      "Risk management and disaster recovery plans to keep your team safe and your business running.",
  },
  {
    title: "Building a strong foundation",
    descr:
      "Training for each position and constant quality assurance.",
  },
];

const ThirdHistory = () => {
  return (
    <ThirdHistoryWrapper>
      <Container>
        <div className="top">
          <h4>What we do</h4>

          <h2>Our Offerings</h2>

          <p>
          As an experienced provider of offshoring solutions in Uzbekistan, we can offer:
          </p>
        </div>

        <div className="cards">
          {cardData.map((v, i) => (
            <div key={i} className="card">
              <h4>{v.title}</h4>
              <p>{v.descr}</p>
            </div>
          ))}
        </div>

        <div className="bottom">
          <div className="left">
          <h3 className="title">Our Distinctions</h3>
          <p>
            We have a distinctive approach to offering our services, we do not
            render you our help or solve your issues, we just provide an
            extension of your office, another department, worker, expertise -
            person, or team, which becomes an indispensable part of your
            business with the location in Uzbekistan. The role of our company is
            to find the best possible match for your job, for your project’s
            completion on time and with no flaws. Recruiting, training,
            providing them physical premises for work and quality assurance of
            accomplished tasks on time on us and providing them with the job and
            payment is on the Client`s part.
          </p>
          <p>
            We get to create your back office in Uzbekistan and hire and train
            people for your projects. As a Client, you get the:
          </p>
          <ul>
            <li>
              <span className="checkmark">
                <div className="checkmark_stem"></div>
                <div className="checkmark_kick"></div>
              </span>
              significant cost cuts
            </li>
            <li>
              <span className="checkmark">
                <div className="checkmark_stem"></div>
                <div className="checkmark_kick"></div>
              </span>
              24/7 working stuff
            </li>
            <li>
              <span className="checkmark">
                <div className="checkmark_stem"></div>
                <div className="checkmark_kick"></div>
              </span>
              pay per project or fixed salary
            </li>
            <li>
              <span className="checkmark">
                <div className="checkmark_stem"></div>
                <div className="checkmark_kick"></div>
              </span>
              ability to choose staff for your specific project/task/project
            </li>
          </ul>
          <p>
            Thus timely completion of the projects and tasks, given to your
            service provider on our premises is our utmost goal and objective.{" "}
          </p>
          </div>

          <div className="right">
            <img src="/images/project2.jpg" alt="" />
          </div>
          
        </div>
      </Container>
    </ThirdHistoryWrapper>
  );
};

export default ThirdHistory;
