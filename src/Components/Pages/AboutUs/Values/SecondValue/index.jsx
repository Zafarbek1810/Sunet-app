import React from 'react';
import Container from '../../../../Common/Container';
import { SecondValueWrapper } from './SecondValue.style';

const cardData = [
    {
      title: "Integrity",
      descr:
        "Complete, trustworthy, and sound business.",
    },
    {
      title: "Transparency",
      descr:
        "From project proposal and tasks assigned, we will make sure that you job is done with due attention, overseeing each step with our quality assurance policy.",
    },
    {
      title: "Value creation",
      descr:
        "We transform our labor and resources into something that meets the needs of our clients.",
    },
    {
      title: "Professionalism",
      descr:
        "We know what we do, we learn how you do it and create an office which would meet the needs of your projects, on time and flawlessly.",
    },
    {
      title: "Social responsibility",
      descr:
        "As we grow, we make sure communities around us flourish and we create more opportunities to learn, to work, and to thrive for a better life for those around us.",
    },
    {
      title: "Inclusion",
      descr:
        "We are as strong as our weakest link, so we create opportunities for diverse segments of our society.",
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