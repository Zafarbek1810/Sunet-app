import styled from "styled-components";

const SecondEmpWrapper=styled.div`
padding: 75px 0;
  .wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;

    .left{
        width: 50%;
        img{
            width: 100%;
        }
    }

    .right {
      width: 50%;
      display: flex;
      flex-direction: column;
    }
     h2 {
      font-size: 44px;
      margin: 0;
      line-height: 52px;
      font-weight: 800;
      font-family: "Nunito Sans";
    }
     p {
      font-size: 16px;
      color: #6d6d6d;
      font-weight: 400;
      line-height: 28px;
      font-family: "Nunito Sans";
    }

    .myDefaultButton {
      background: #002F49;
      color: #fff;
      font-weight: 700;
      font-family: Nunito Sans;
      text-transform: uppercase;
      border: none;
      padding:20px 10px;
      width: 200px;
      transition: 300ms;
      text-align: center;
      border: 1px solid #002F49;

      &:hover {
        background-color: #fff;
        color: #000;
        border: 1px solid #002F49;
      }
    }

}

@media (max-width: 650px) {
        .wrap{
            flex-direction: column;

            .left, .right{
                width: 100%;
            }
        }
    }
`

export{SecondEmpWrapper}