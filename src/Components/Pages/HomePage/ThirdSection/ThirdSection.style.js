import styled from "styled-components";

const ThirdSectionWrapper = styled.div`
  background: #002f49;
  padding: 150px 0 250px;
  font-family: Nunito sans;

  .wrap {
    .subtitle {
      color: #8e88b8;
      font-size: 14px;
      font-weight: 800;
      text-transform: uppercase;
      text-align: center;
    }

    .title {
      color: #ffffff;
      font-size: 36px;
      line-height: 48px;
      font-family: Nunito sans;
      text-align: center;
      width: 50%;
      margin: auto;
      margin-bottom: 30px;
    }

    .cards {
      display: flex;
      gap: 30px;

      .card {
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        border: 1px solid #46416b;
        padding: 40px 30px;
        overflow: hidden;
        background-color: rgb(246, 127, 0, 0.9);
        transition: 300ms ease-in;

        span {
          position: absolute;
          top: -40px;
          left: 0;
          user-select: none;
          color: rgba(255, 255, 255, 0.1);
          font-size: 100px;
          font-weight: 800;
        }

        h6 {
          margin-top: 0;
          font-size: 20px;
          font-weight: 700;
          line-height: 30px;
          color: #fff;
          margin-bottom: 10px;
          text-transform: capitalize !important;
        }
        p {
          color: #fff;
          font-size: 16px;
          font-weight: 400;
        }

        .link {
          display: flex;
          align-items: center;
          color: #002f49;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 50px;
          svg {
            margin-right: 20px;
            width: 15px;
            transition: 300ms;
          }

          &:hover {
            svg {
              margin-right: 10px;
            }
          }
        }

        .icon {
          position: absolute;
          right: -75px;
          bottom: -75px;
          background-color: rgb(0, 47, 73, 0.8);
          border-radius: 50%;
          width: 150px;
          height: 150px;

          svg {
            background-color: transparent;
            width: 30px;
            stroke-width: 1;
            position: absolute;
            left: 35px;
            top: -25px;
          }
        }

        &:hover {
          background-color: #fff;

          span {
            color: rgba(0, 0, 0, 0.1);
          }

          h6,
          p {
            color: #000;
          }

          .icon {
            background-color: rgb(246, 127, 0, 0.9);
            svg {
              background-color: transparent;
            }
          }
        }
      }
    }
  }

  @media (max-width: 650px) {
    .wrap {
      .title {
        font-size: 32px;
        width: 100% !important;
      }

      .cards {
        flex-direction: column;

        .card{
          width: 100%;
        }
      }
    }
  }
`;

const BottomStyle = styled.div`
  .bottom {
    display: flex;
    gap: 30px;
    transform: translateY(-50%);

    .twoCard1 {
      padding: 30px 50px;
      background: linear-gradient(rgba(246, 127, 0, 0.4), rgba(246, 127, 0, 0.4)), url("/images/sec3_1.jpg");
      background-repeat: no-repeat;
      object-fit: cover;
      background-position: center center;
      background-size: cover;
      width: 50%;

      .count {
        color: #fff;
        font-size: 48px;
        font-weight: 800;
      }

      .title {
        color: #ffffff;
        font-size: 22px;
        line-height: 30px;
      }

      .descr {
        width: 80%;
        color: #ffffff;
        font-size: 16px;
        line-height: 28px;
      }
    }
  }
    .twoCard2 {
      padding: 30px 50px;
      background: linear-gradient(rgba(246, 127, 0, 0.4 ), rgba(246, 127, 0, 0.4 )), url("/images/sec3_2.jpg");
      /* background-image: url("/images/sec3_2.jpg"); */
      background-repeat: no-repeat;
      object-fit: cover;
      background-position: center center;
      background-size: cover;
      width: 50%;

      .count {
        color: #fff;
        font-size: 48px;
        font-weight: 800;
      }

      .title {
        color: #ffffff;
        font-size: 22px;
        line-height: 30px;
      }

      .descr {
        width: 80%;
        color: #ffffff;
        font-size: 16px;
        line-height: 28px;
      }
    }
  

  @media (max-width: 650px) {
    .bottom{
      flex-direction: column;
      transform: translateY(-25%);

      .twoCard1{
        width: 100%;
        .count{
          font-size: 32px !important;
        }

        .title {
        font-size: 16px;
        line-height: 20px;
      }
      

      .descr {
        width: 100%;
        color: #ffffff;
        font-size: 14px;
        line-height: 18px;
      }
      }
      .twoCard2{
        width: 100%;
        .count{
          font-size: 32px !important;
        }

        .title {
        font-size: 16px;
        line-height: 20px;
      }
      .descr {
        width: 100%;
        color: #ffffff;
        font-size: 14px;
        line-height: 18px;
      }
    }
  }
`;

export { ThirdSectionWrapper, BottomStyle };
