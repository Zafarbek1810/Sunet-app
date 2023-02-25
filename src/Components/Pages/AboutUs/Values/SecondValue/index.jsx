import React from 'react';
import Container from '../../../../Common/Container';
import { SecondValueWrapper } from './SecondValue.style';

const cardData = [
    {
      title: "Integrity",
      descr:
        "At SUNET we uphold honesty, ethics, and moral principles even in challenging situations. This is crucial to maintaining trust and credibility with stakeholders.",
    },
    {
      title: "Transparency",
      descr:
        "Operating with openness and honesty in decision-making and communication is the core of our company. By doing so, foster trust and accountability, and allows for constructive feedback and continuous improvement.",
    },
    {
      title: "Value creation",
      descr:
        "We are consistently striving to create value for stakeholders through innovative products, services, or processes, which can lead to long-term success and growth for both parties.",
    },
    {
      title: "Professionalism",
      descr:
        "Maintaining high standards of behavior and expertise, and treating colleagues, clients, and partners with respect and dignity, is essential to creating a positive and productive work environment.",
    },
    {
      title: "Social responsibility",
      descr:
        "We acknowledge the impact of our actions on society and the environment, and thus take steps to address them. All this, we consider, is an important aspect of being a responsible corporate citizen.",
    },
    {
      title: "Inclusion",
      descr:
        "Fostering a culture of inclusivity and diversity, where all individuals feel valued and respected, will lead to enhanced creativity, innovation, and a sense of belonging within our organization.",
    },
  ];

const SecondValue = () => {
    return (
        <SecondValueWrapper>
            <Container>
            <div className="top">
          <h4>VALUES</h4>

          <h2>Our values form the foundation for how we serve our clients. </h2>

          {/* <p>
          As an experienced provider of offshoring solutions in Uzbekistan, we can offer:
          </p> */}
        </div>

        <div className="cards">
          {cardData.map((v, i) => (
            <div key={i} className="card">
              <h4>{v.title}</h4>
              <p>{v.descr}</p>
            </div>
          ))}
        </div>
            </Container>
        </SecondValueWrapper>
    );
};

export default SecondValue;