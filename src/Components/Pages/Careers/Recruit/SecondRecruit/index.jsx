import React from 'react';
import Container from '../../../../Common/Container';
import MyLink from '../../../../Common/MyLink';
import { SecondRecruitWrapper } from './SecondRecruit.style';

const SecondRecruit = () => {
    return (
        <SecondRecruitWrapper>
            <Container>
        <div className="wrap">
        <div className="left">
            <img src="/images/s1.jpg" alt="" />
          </div>
          <div className="right">
            <h2>How do we recruit</h2>
            <ul>
              <li>
                <span>
                  <div className="in"></div>
                </span>
                Announce our job opening on our website and/or on the sites and channels of our partners 
              </li>
              <li>
                <span>
                  <div className="in"></div>
                </span>
                Publish the application with the job, where interested candidates might apply and submit their recommendations and resumes 
              </li>
              <li>
                <span>
                  <div className="in"></div>
                </span>
                Go through received applications and resumes, select those who comply
              </li>
              <li>
                <span>
                  <div className="in"></div>
                </span>
                Invite to the interview with HR-selected candidates 
              </li>
              <li>
                <span>
                  <div className="in"></div>
                </span>
                After interviewing with HR, a manager whose department is experiencing a need for new employees holds an interview 
              </li>
              <li>
                <span>
                  <div className="in"></div>
                </span>
                Candidate has training for 2-3 weeks, depending on the complexity of the position
              </li>
              <li>
                <span>
                  <div className="in"></div>
                </span>
                Recruit and welcome new members of the team 
              </li>
              <li>
                <span>
                  <div className="in"></div>
                </span>
                Those who were not selected on this occasion are given detailed answers and recommendations on what to work on, to get employed with us in the future
              </li>
            </ul>

            <MyLink to="/careers/apply" className="myDefaultButton">Apply Online</MyLink>
            </div>
        </div>
      </Container>
        </SecondRecruitWrapper>
    );
};

export default SecondRecruit;