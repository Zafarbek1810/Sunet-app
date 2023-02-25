import styled from "styled-components";

const FifthSectionWrapper=styled.div`
    background: url("images/bg-cta1-home1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 55px 65px 200px;
  font-family: Nunito sans;
  margin-bottom: 100px;

  .subtitle{
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 500;
    text-transform: capitalize;
    margin-bottom: 5px;
  }

  .wrap{
    display: flex;
    justify-content: space-between;
    align-items: center;

    a{
        color: #fff;
        text-transform: uppercase;
        font-size: 14px;
        padding: 20px 35px;
        margin: 0;
        border: 2px solid #fff;
    }
  }

  .title{
    color: #FFFFFF;
    font-size: 48px;
    line-height: 60px;
    
  }

  @media (max-width: 650px) {
    padding: 30px;
    .subtitle{
      font-size: 16px;
    }
    .wrap{
      flex-direction: column;

      .title{
        font-size: 32px;
      }
    }
  }
`

export{FifthSectionWrapper}