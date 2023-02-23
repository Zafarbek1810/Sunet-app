import styled from "styled-components";

const BannerWrapper = styled.div`
  background-image:url("images/banner2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  margin-top: 100px;
  user-select: none;

  .wrap {
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    .subtitle {
      font-family: "Nunito Sans";
      color: #fff;
      text-decoration: none;
      text-align: left;
      line-height: 36px;
      letter-spacing: 0px;
      font-weight: 400;
      font-size: 24px;
      margin-bottom: 0;
    }

    .title {
      font-family: "Nunito Sans";
      color: #fff;
      text-transform: uppercase;
      max-width: 45%;
      line-height: 80px;
      letter-spacing: 0px;
      font-weight: 900;
      font-size: 72px;
      margin-bottom: 0;
    }

    .desc {
      font-family: "Nunito Sans";
      color: #fff;
      max-width: 45%;
      line-height: 30px;
      font-weight: 400;
      font-size: 18px;
    }

    a {
      padding: 20px 30px;
      background: #f67f00;
      border: none;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      font-family: "Nunito sans";
      text-transform: uppercase;
      transition: 300ms;

      &:hover{
        background:#002F49;
      }
    }

    .slidePage {
      margin-top: 60px;
      width: 10%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #fff;
      font-size: 18px;
      font-family: "Nunito sans";
      svg {
        width: 20px;
        height: 20px;
        color: #fff;
        cursor: pointer;
        transition: 300ms;

        &:hover{
          color: #f67f00;
        }
      }
    }
  }
`;
const BannerWrapper2 = styled.div`
  background-image: url("images/banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  margin-top: 100px;
  user-select: none;

  .wrap {
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    .subtitle {
      font-family: "Nunito Sans";
      color: #fff;
      text-decoration: none;
      text-align: left;
      line-height: 36px;
      letter-spacing: 0px;
      font-weight: 400;
      font-size: 24px;
      margin-bottom: 0;
    }

    .title {
      font-family: "Nunito Sans";
      color: #fff;
      text-transform: uppercase;
      max-width: 45%;
      line-height: 80px;
      letter-spacing: 0px;
      font-weight: 900;
      font-size: 72px;
      margin-bottom: 0;
    }

    .desc {
      font-family: "Nunito Sans";
      color: #fff;
      max-width: 45%;
      line-height: 30px;
      font-weight: 400;
      font-size: 18px;
    }

    a {
      padding: 20px 30px;
      background: #f67f00;
      border: none;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      font-family: "Nunito sans";
      text-transform: uppercase;
      transition: 300ms;

      &:hover{
        background:#002F49;
      }
    }

    .slidePage {
      margin-top: 60px;
      width: 10%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #fff;
      font-size: 18px;
      font-family: "Nunito sans";
      svg {
        width: 20px;
        height: 20px;
        color: #fff;
        cursor: pointer;
        transition: 300ms;

        &:hover{
          color: #f67f00;
        }
      }
    }
  }
`;
const BannerWrapper3 = styled.div`
  background-image: url("images/banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  margin-top: 100px;
  user-select: none;

  .wrap {
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    .subtitle {
      font-family: "Nunito Sans";
      color: #fff;
      text-decoration: none;
      text-align: left;
      line-height: 36px;
      letter-spacing: 0px;
      font-weight: 400;
      font-size: 24px;
      margin-bottom: 0;
    }

    .title {
      font-family: "Nunito Sans";
      color: #fff;
      text-transform: uppercase;
      max-width: 45%;
      line-height: 80px;
      letter-spacing: 0px;
      font-weight: 900;
      font-size: 72px;
      margin-bottom: 0;
    }

    .desc {
      font-family: "Nunito Sans";
      color: #fff;
      max-width: 45%;
      line-height: 30px;
      font-weight: 400;
      font-size: 18px;
    }

    a {
      padding: 20px 30px;
      background: #f67f00;
      border: none;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      font-family: "Nunito sans";
      text-transform: uppercase;
      transition: 300ms;

      &:hover{
        background:#002F49;
      }
    }

    .slidePage {
      margin-top: 60px;
      width: 10%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #fff;
      font-size: 18px;
      font-family: "Nunito sans";
      svg {
        width: 20px;
        height: 20px;
        color: #fff;
        cursor: pointer;
        transition: 300ms;

        &:hover{
          color: #f67f00;
        }
      }
    }
  }
`;

export { BannerWrapper, BannerWrapper2, BannerWrapper3 };
