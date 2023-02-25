import styled from "styled-components";

const SecondHistoryWrapper = styled.div`
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

      .info-element {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 20px;
    }
    .info-element p {
      padding-right: 30px;
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
    .info-element {
      gap: 10px;
    }
    .element img {
      color: #f67f00;
      width: 45px;
      padding-bottom: 15px;
    }
    .element h5 {
      margin: 0;
      font-size: 18px;
      color: #000;
      font-family: "Nunito Sans";
    }
    .element p {
      font-size: 16px;
      color: #6d6d6d;
    }
    .element__line {
      position: relative;
      width: 91%;
      height: 2px;
      margin-top: 15px;
      background-color: #efefef;
    }

    .element .element__line:after {
      content: "";
      display: block;
      height: 2px;
      right: 0;
      position: absolute;
      background: #f67f00;
      transition: width 0.3s ease 0s;
      width: 0;
    }

    .element:hover > .element__line:after {
      width: 100%;
      left: 0 !important;
    }

    }
}
`;

export { SecondHistoryWrapper };
