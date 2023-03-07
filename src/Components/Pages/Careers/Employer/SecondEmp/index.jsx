import React from "react";
import Container from "../../../../Common/Container";
import MyLink from "../../../../Common/MyLink";
import { SecondEmpWrapper } from "./SecondEmp.style";

const SecondEmp = () => {
  return (
    <SecondEmpWrapper>
      <Container>
        <div className="wrap">
        <div className="left">
            <img src="/images/employer.jpg" alt="" />
          </div>
          <div className="right">
            <h2>Equal opportunity employer</h2>
            <p>
            When having job openings we make sure to clearly state the qualification for the job opening and what it takes to get it. If some candidates do not qualify, we always can have training or follow-up consultations, so they can get fit for the job we offer, or jobs in the industry. We are not a human resources company, however, we believe with stronger and more qualified human resources the country would flourish faster.
            </p>

            <MyLink to="/careers/apply" className="myDefaultButton">Apply Online</MyLink>
            </div>
        </div>
      </Container>
    </SecondEmpWrapper>
  );
};

export default SecondEmp;
