import styled from "styled-components";

const SecondRecruitWrapper=styled.div`
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

      ul {
        padding: 0;
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
    }
     p {
      font-size: 18px;
      color: #6d6d6d;
      font-weight: 400;
      line-height: 30px;
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

export{
    SecondRecruitWrapper
}