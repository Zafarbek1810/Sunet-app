import styled from "styled-components";

const FirstFAQWrapper = styled.div`
  padding: 50px 0;
  section {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;
  }
  .top {
    text-align: center;
    width: 60%;
    margin: auto;
    h4 {
      margin: 0;
      font-size: 14px;
      font-weight: 800;
      color: #f67f00;
      position: relative;
      display: inline-block;
      margin-bottom: 7px;
      text-transform: uppercase;
      font-family: "Nunito Sans";
    }
    h2 {
      font-size: 44px;
      margin: 0;
      line-height: 52px;
      font-weight: 800;
      font-family: "Nunito Sans";
      margin-bottom: 40px;
    }
  }
  .accordion-wr{
    width: 100%;
  }
  .accordion {
    width: 100%;
    margin-bottom: 20px;
    border: none;
  }
  .accordion__summary{
    background-color: #F6F6F6;
    border: none;
  }
  .typography{
    font-family: "Nunito Sans";
    font-weight: 600;
    font-size: 20px;
    transition: 0.3s;
    border: none;
  }
  .typography:hover{
      color: #43BAFF;
    } 
    .typography__p{
    font-family: "Nunito Sans";
    font-weight: 400;
    color: #6D6D6D;
    font-size: 18px;
    transition: 0.3s;
    border: none;
  }
`;

export { FirstFAQWrapper };
