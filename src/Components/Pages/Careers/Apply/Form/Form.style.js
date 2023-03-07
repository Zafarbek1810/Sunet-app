import styled from "styled-components";

const FormModalWrapper = styled.div`
margin: 75px 0;
  .top {
    h5{
        margin: 0;
      font-size: 14px;
      font-weight: 800;
      color: #F67F00;
      margin-bottom: 7px;
      text-transform: uppercase;
      font-family: "Nunito Sans";
      text-align: center;
    }
    h4.title {
      font-size: 36px;
      font-family: Nunito sans;
      font-weight: 800;
      line-height: 1.2;
      margin: 0 0 20px;
      color: #1b1d21;
      text-align: center;
    }

    p.subtitle {
      font-size: 14px;
      color: #6d6d6d;
      text-align: center;
    }
  }
  .forma {
    padding: 40px 50px;
    margin-bottom: 50px;
    border: 1px solid #e7e7e7;
    width: 70%;
    margin: auto;
    background-color: #002f49;


    form {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      p{
        font-family: Nunito sans;
        color: #fff;
      }

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

        h3{
            font-size: 24px;
      font-family: Nunito sans;
      font-weight: 800;
      line-height: 1.2;
      margin: 0 0 20px;
      color: #fff;
        }

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
          background-color: #F67F00;
          border: none;
          color: #fff;
          padding: 10px 0;
          margin-top: 0;
          font-family: Nunito sans;
          padding: 14px 30px;
          text-transform: uppercase;
          font-weight: 700;

          &:disabled{
            cursor: not-allowed;
          }
        }
      }
    }
  }

  @media (max-width: 650px) {
    .forma{
      width: 100%;
      padding: 15px 20px;
    }
  }
`;

export { FormModalWrapper };
