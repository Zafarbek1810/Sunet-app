import styled from "styled-components";

const BannerEmpWraper=styled.div`
background-image: url("/images/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;
  display: flex;
  align-items: center;

  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      color: #fff;
      font-size: 48px;
      font-weight: 800;
      line-height: 1.2;
    }

    p {
      color: #fff;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 800;
    }

    svg {
      width: 10px;
      color: #f67f00;
      margin: 0 5px;
    }
  }

  @media (max-width: 650px) {
    .wrap{
      flex-direction: column;
    }
  }
`

export{BannerEmpWraper}