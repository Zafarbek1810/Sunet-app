import styled from "styled-components";

const SecondCSRWrapper = styled.div`
padding: 75px 0;
.top {
    display: flex;
    align-items: center;
    span {
      font-size: 24px;
      line-height: 38px;
      border: 1px solid #e7e7e7;
      display: block;
      font-weight: 900;
      color: #002f49;
      padding: 10px;
      margin-right: 30px;
      user-select: none;
      width: 10%;
      text-align: center;
      /* font-family: 'Times New Roman', Times, serif; */
    }

    h3 {
      width: 90%;
      color: #1b1d21;
      font-family: Nunito sans;
      font-weight: 800;
      font-size: 30px;
      margin: 0;
    }
  }

  p {
    font-size: 20px;
    font-family: "Nunito Sans";
  }

  .wrap1{
    display: flex;
    align-items: center;
    gap: 40px;
    margin-bottom:50px;
    .left-side{
      width: 60%;
      
    }

    .right-side{
      width: 40%;
      img{
        width: 100%;
        height: auto !important;
      }
    }
  }
  .wrap2{
    display: flex;
    align-items: center;
    gap: 40px;
    margin-bottom:50px;
    .left-side{
      width: 40%;
      img{
        width: 100%;
      }
    }
    .right-side{
      width: 60%;
      
    }
  }

  @media (max-width: 650px) {
    .wrap1{
      display: flex;
      flex-direction: column-reverse;
      .left-side{
        width: 100%;
      }
      .right-side{
        width: 100%;
      }
    }
    .wrap2{
      display: flex;
      flex-direction: column;
      .left-side{
        width: 100%;
      }
      .right-side{
        width: 100%;
      }
    }
  }
`

export {
  SecondCSRWrapper
}