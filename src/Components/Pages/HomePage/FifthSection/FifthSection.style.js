import styled from "styled-components";

const FifthSectionWrapper=styled.div`
background: linear-gradient(rgba(0, 47, 73, 0.5), rgba(0, 47, 73, 0.5)), url("/images/bg-cta.jpg");
    /* background: url("/images/bg-cta.jpg"); */
  background-repeat: no-repeat;
  background-size: cover;
  padding: 35px 65px 180px;
  font-family: Nunito sans;
  margin-bottom: 100px;

  .subtitle{
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 500;
    text-transform: capitalize;
    margin: 0;
    margin-bottom: 5px;
  }

  .wrap{
    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
      background: transparent;
        color: #fff;
        text-transform: uppercase;
        font-size: 14px;
        padding: 20px 35px;
        margin: 0;
        border: 2px solid #fff;
        transition: 300ms ease;

        &:hover{
          color: #000;
          background-color: #fff;
          font-weight: 600;
          cursor: pointer;
        }
    }
  }

  .title{
    color: #FFFFFF;
    font-size: 48px;
    line-height: 60px;
    margin: 0;
    
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