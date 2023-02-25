import styled from "styled-components";

const FormModalWrapper = styled.div`
z-index: 1000011111 !important;

  .form-wrapper {
    display: flex;
    overflow: hidden;
    background-color: transparent;
    font-family: Nunito sans;
    

    & > div {
      /* padding: 40px 50px; */
    }

    .right-side {
      width: 100%;
      background-color: #fff;
      color: black;
      padding: 30px;

      h3.title {
        width: 60%;
        margin: auto;
        text-align: center;
        font-size: 24px;
        font-weight: 600;
      }

      p.subtitle {
        width: 100%;
        text-align: center;
        margin-bottom: 15px;
        a {
          color: #222;
          &:hover {
            color: var(--primary);
          }
        }
      }
      .form {
        width: 90%;
        margin: auto;
        font-family: Nunito sans;

        .top {
          width: 100% !important;
          display: flex;
          justify-content: space-between;
          gap: 20px;

          .label {
            width: 40%;
            
            @media (max-width: 767px) {
              width: 100%;
            }
          }
          /* .nameInput {
            width: 90%;
            margin-right: 40px;
          } */

          /* .phoneInput {
            width: 100%;
            margin-top: 1px;
          } */
          
          @media (max-width: 767px) {
            gap: 0;
          }
        }
      }

      .label {
        display: block;
        margin-bottom: 10px;
        font-size: 15px;
        position: relative;
        width: 50%;
        

        .email{
          width: 200%;
          font-family: Nunito sans;
        }

        .message {
          min-height: 100px;
          min-width: 490px;
          font-family: Nunito sans;
        }
        & > svg {
          position: absolute;
          top: 35px;
          left: 10px;
          width: 20px;
          fill: #888;
          margin-right: 10px;
          opacity: 0.5;
        }
        .iconUser {
          position: absolute;
          top: 35px;
          left: 10px;
          width: 15px;
          fill: #888;
          margin-right: 10px;
        }
      }
      span.label-text {
        display: block;
        font-weight: 600;
      }

      input,
      textarea {
        /* outline: none; */
        background-color: transparent;
        border: 1px solid #888;
        width: 100%;
        padding: 10px 18px 10px 40px;
        font-size: 14px;
        font-weight: 400;
        font-family: Nunito sans;

        /* &:focus {
          border-bottom: 2px solid #EA2222;
          caret-color: #EA2222;
        } */

        &::placeholder {
          color: #888;
        }
      }
      .phoneInput {
        width: 100%;
        /* margin-bottom: 10px; */
        position: relative;

        .PhoneInputCountry {
          position: absolute;
          left: 5px;
          top: 12px;
        }
      }

      .ser {
        font-size: 14px;
        font-weight: 600;
      }
      .services {
        //min-height: 80px;
        display: flex;
        margin-bottom: 15px;

        .left {
          width: 50%;
          display: flex;
          flex-direction: column;
          margin-left: 0;
        }
        .right {
          display: flex;
          flex-direction: column;
        }
      }

      .err-text {
        color: red;
      }

      .submit-btn-wrapper {
        .my-default-button {
          cursor: pointer;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          background-color: #002F49;
          /* background-image: linear-gradient(to right, #5b83cd 0%, #c280bf 100%); */
          border: none;
          color: #fff;
          padding: 10px 0;
          margin-top: 0;
          font-family: Nunito sans;
        }
      }
    }
  }

  .left-side {
    width: 60%;
    /* background-image: linear-gradient(to right, #0c1bae, #0c5adb); */
    background:#002F49;
    padding: 30px;
    font-family: Nunito sans;
    .text {
      width: 300px;
    }

    .link1 {
      width: 65%;
      padding: 7px 20px;
      transition: 300ms;
      border: 2px solid transparent;
      &:hover {
        background:rgba(0,0,0, 0.1);
      }
    }
    .link2 {
      width: 100%;
      padding: 8px 20px;
      transition: 300ms;
      border: 1px solid transparent;
      margin-bottom: 10px;
      &:hover {
        background:rgba(0,0,0, 0.1);
      }
    }

    .link {
      transition: 500ms;
      /* margin-top: 10px; */
      font-weight: 100;
      color: #fff;
    }

    .adress {
      margin-bottom: 0;
    }

    h3 {
      color: #fff;
      font-size: 24px;
      margin-top: 0;
      margin-bottom: 24px;
      font-weight: 600;
    }

    p {
      color: #fff;
    }

    svg {
      width: 20px;
      fill: #fff;
      margin-right: 10px;
    }

    h5 {
      color: #fff;
      font-size: 16px;
      display: flex;
      margin-bottom: 10px;
    }
    .mail,
    .phone {
      display: flex;
      align-items: center;
      margin-bottom: 20px !important;
    }

    .location {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 985px) {
    .form-wrapper .right-side .submit-btn-wrapper .my-default-button {
      margin-top: 30px;
    }
  }

  @media (max-width: 767px) {
    .form-wrapper {
      display: flex;
      flex-direction: column-reverse;
      flex-wrap: wrap;

      .left-side,
      .right-side {
        width: 100%;
      }

      .left-side {
        display: none;
      }

      .right-side {
        .inputs-wrapper {
          flex-wrap: wrap;
          margin-bottom: 0;

          .label {
            width: 100%;
            margin-bottom: 16px;
          }
        }

        input {
          padding-top: 10px;
          padding-bottom: 10px;
        }

        .submit-btn-wrapper {
          text-align: center;
        }
      }
    }
  }

  @media (max-width: 585px) {
    p.subtitle {
      width: 100% !important;
      text-align: center;
    }
    .top {
      flex-direction: column;

      .nameInput {
        width: 100% !important;
      }
    }
    .services {
      flex-direction: column;
      //height: 300px;
      margin-bottom: 50px !important;
    }
  }

  @media (max-width: 386px) {
    .services {
      width: 300px;
    }
    .form-wrapper .right-side .submit-btn-wrapper .my-default-button {
      margin-top: 80px;
    }
  }
`;

export { FormModalWrapper };
