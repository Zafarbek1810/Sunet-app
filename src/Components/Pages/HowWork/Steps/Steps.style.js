import styled from "styled-components";

const StepsWrapper = styled.div`
  padding: 75px 0;
  .top {
    /* display: flex; */
    /* align-items: center; */
    position: relative;
    margin-bottom: 100px;
    span {
      font-size: 84px;
      line-height: 38px;
      display: block;
      font-weight: 800;
      color: rgb(0, 0, 0, 0.2);
      margin-right: 30px;
      user-select: none;
      width: 150px;
      text-align: center;
    }

    h3 {
      position: absolute;
      top: -18px;
      left: 30px;
      width: 100%;
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
    border-bottom: 1px solid rgb(0, 0, 0, 0.2);
    margin-bottom: 50px;
    .forma {
      margin-bottom: 50px;
      display: flex;
      gap: 50px;

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

      .left {
        /* width: 60%; */
        border: 1px solid #e7e7e7;
        padding: 40px 50px;
      }

      .right {
        width: 40%;

        img {
          width: 100%;
        }
      }

      form {
        /* width: 60%; */
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

  .step3 {
    border-bottom: 1px solid rgb(0, 0, 0, 0.2);
    margin-bottom: 50px;
    display: flex;
    gap: 50px;
    .left {
      width: 60%;
    }
    .right {
      width: 40%;
      img {
        width: 100%;
      }
    }
  }

  .step2 {
    border-bottom: 1px solid rgb(0, 0, 0, 0.2);
    margin-bottom: 50px;
    .ttop {
      display: flex;
      gap: 50px;
    }

    .left {
      width: 60%;
    }
    ul {
      li {
        display: flex;
        align-items: flex-start;
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
          margin-top: 5px;

          .in {
            background: #002f49;
            padding: 3px;
            border-radius: 50%;
          }
        }
      }
    }

    .right {
      width: 40%;
      img {
        float: top;
        width: 100%;
      }
    }
  }

  .step7 {
    .top {
      position: relative;
      margin-bottom: 100px;

      h3 {
        position: absolute;
        top: -18px;
        left: 30px;
        width: 100%;
        color: #1b1d21;
        font-family: Nunito sans;
        font-weight: 800;
        font-size: 30px;
      }

      span {
        font-size: 84px;
        line-height: 38px;
        display: block;
        font-weight: 800;
        color: rgb(0, 0, 0, 0.2);
        margin-right: 30px;
        user-select: none;
        width: 150px;
        text-align: center;
      }
    }
  }

  .step8 {
    border-bottom: none;
    .left {
      ul {
        li {
          display: flex;
          align-items: flex-start;
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
            margin-top: 5px;

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
    .top {
      flex-direction: column;

      span {
        width: 50%;
      }
    }

    p {
      font-size: 14px;
    }
    ul {
      li {
        font-size: 14px !important;
      }
    }

    h3 {
      font-size: 24px !important;
    }

    .step1 {
      .forma {
        padding: 0;
        input,
        textarea {
          &::placeholder {
            font-size: 12px;
          }
        }
        .left {
          padding: 10px 20px;
        }
      }
    }

    .step2 {
      .ttop {
        display: flex;
        flex-direction: column-reverse;
        .left {
          width: 100%;
        }

        .right {
          width: 100%;
        }
      }
    }

    .step3 {
      display: flex;
      flex-direction: column;
    }

    .step4 {
      display: flex;
      flex-direction: column-reverse;
      .left {
        width: 100%;
      }

      .right {
        width: 100%;
      }
    }
    .step6 {
      display: flex;
      flex-direction: column-reverse;
      .left {
        width: 100%;
      }

      .right {
        width: 100%;
      }
    }

    .step8 {
      .ttop {
        display: flex;
        flex-direction: column-reverse;
        .left {
          width: 100%;
        }

        .right {
          width: 100%;
        }
      }
    }

    .step7 {
      display: flex;

      h3 {
        margin-bottom: 100px;
        transform: translateX(-40px);
      }
      .left {
        width: 100%;
      }

      .right {
        width: 100%;
      }
    }
    .step3 {
      display: flex;

      h3 {
        margin-bottom: 100px;
      }
      .left {
        width: 100%;
      }

      .right {
        width: 100%;
      }
    }
  }
`;

export { StepsWrapper };
