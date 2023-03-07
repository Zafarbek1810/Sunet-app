import styled from "styled-components";

const StepsWrapper = styled.div`

padding: 75px 0;
  .top {
    display: flex;
    align-items: center;
    span {
      font-size: 24px;
      line-height: 38px;
      border: 1px solid #e7e7e7;
      display: block;
      font-weight: 800;
      color: #002f49;
      padding: 10px;
      margin-right: 30px;
      user-select: none;
      width: 10%;
      text-align: center;
    }

    h3 {
      width: 90%;
      color: #1b1d21;
      font-family: Nunito sans;
      font-weight: 800;
      font-size: 30px;
    }
  }

  p {
    font-size: 20px;
    font-family: "Nunito Sans";
  }
  .step1 {
    .forma {
      padding: 40px 50px;
      margin-bottom: 50px;
      border: 1px solid #e7e7e7;

      h4 {
        font-size: 36px;
        font-family: Nunito sans;
        font-weight: 800;
        line-height: 1.2;
        margin: 0 0 20px;
        color: #1b1d21;
      }

      p.subtitle {
        font-size: 14px;
        color: #6d6d6d;
      }

      form {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .label1 {
          width: 45% !important;
          margin-bottom: 25px;

          input {
            width: 100%;
            color: #000;
            border: none;
            background: #f6f6f6;
            padding: 10px 20px;
            box-sizing: border-box;
            outline: none;
            font-family: "Nunito Sans", sans-serif;
            font-size: 16px;
            line-height: 1.875;
            font-weight: 600;
          }
        }
        .label2 {
          width: 100% !important;
          margin-bottom: 25px;

          input {
            width: 100%;
            color: #000;
            border: none;
            background: #f6f6f6;
            padding: 10px 20px;
            box-sizing: border-box;
            outline: none;
            font-family: "Nunito Sans", sans-serif;
            font-size: 16px;
            line-height: 1.875;
            font-weight: 600;
          }

          textarea {
            width: 100%;
            width: 100%;
            color: #000;
            border: none;
            background: #f6f6f6;
            padding: 10px 20px;
            box-sizing: border-box;
            outline: none;
            font-family: "Nunito Sans", sans-serif;
            font-size: 16px;
            line-height: 1.875;
            font-weight: 600;
          }
        }
        .err-text {
          color: red;
        }

        .submit-btn-wrapper {
          display: flex;
          align-items: center;
          .my-default-button {
            margin-left: 50px;
            cursor: pointer;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            background-color: #002f49;
            border: none;
            color: #fff;
            padding: 10px 0;
            margin-top: 0;
            font-family: Nunito sans;
            padding: 14px 30px;
            text-transform: uppercase;
            font-weight: 700;

            &:disabled {
            cursor: not-allowed;
          }
          }
        }
      }
    }
  }

  .step2 {
    .left {
      ul {
        li {
          display: flex;
          align-items: center;
          list-style: none;
          font-size: 20px;
          font-family: "Nunito Sans";

          span {
            background: #fff;
            padding: 3px;
            color: #002f49;
            border-radius: 50%;
            border: 1px solid #002f49;
            margin-right: 10px;

            .in {
              background: #002f49;
              padding: 3px;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }

  .step8 {
    .left {
      ul {
        li {
          display: flex;
          align-items: center;
          list-style: none;
          font-size: 20px;
          font-family: "Nunito Sans";

          span {
            background: #fff;
            padding: 3px;
            color: #002f49;
            border-radius: 50%;
            border: 1px solid #002f49;
            margin-right: 10px;

            .in {
              background: #002f49;
              padding: 3px;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }

  @media (max-width: 650px) {
    .top{
      flex-direction: column;

      span{
        width: 50%;
      }
    }

    .step1{
      .forma{
        padding: 10px 20px;
      }
    }
  }
`;

export { StepsWrapper };
