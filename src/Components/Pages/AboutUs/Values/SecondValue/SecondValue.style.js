import styled from "styled-components";

const SecondValueWrapper=styled.div`
 padding: 50px 0;
  .top {
    text-align: center;
    width: 60%;
    margin: auto;
    h4 {
      margin: 0;
      font-size: 14px;
      font-weight: 800;
      color: #F67F00;
      position: relative;
      display: inline-block;
      margin-bottom: 7px;
      text-transform: uppercase;
      font-family: "Nunito Sans";
    }
    h2 {
      font-size: 44px;
      margin: 0;
      line-height: 52px;
      font-weight: 800;
      font-family: "Nunito Sans";
      margin-bottom: 40px;
    }
    p {
      font-size: 16px;
      color: #6d6d6d;
      font-weight: 400;
      line-height: 30px;
      font-family: "Nunito Sans";
    }
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .card {
      width: 30%;
      background: #fff;
      padding: 45px 30px;
      border: 1px solid #d1e0e5;
      border-radius: 10px;
      margin-bottom: 40px;
      transition: background 0.3s, border 0.3s, border-radius 0.3s,
        box-shadow 0.3s;

      &:hover {
        background-color: rgb(246, 127, 0, 0.07);
        border: 1px solid rgb(246, 127, 0, 0.07);

        /* h4,
        p {
          color: #fff;
        } */
      }

      h4 {
        font-family: "Nunito Sans";
        font-size: 22px;
        font-weight: 700;
        line-height: 30px;
        border-bottom: 1px solid #d2e1e6;
        padding-bottom: 20px;
      }

      p {
        font-family: "Nunito Sans";
        font-size: 16px;
        font-weight: 400;
        line-height: 30px;
        color:#6d6d6d;
      }
    }
  }

  @media (max-width: 650px) {
    .top{
      width: 100%;
      h4{
        font-size: 16px;
      }

      h2{
        font-size: 24px;
      }

    }
    .cards{
      .card{
        width: 100%;
      }
    }
  }

`

export{
    SecondValueWrapper
}