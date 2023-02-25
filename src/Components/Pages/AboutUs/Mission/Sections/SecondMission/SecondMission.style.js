import styled from "styled-components";

const SecondMissionWrapper = styled.div`
  padding: 75px 0;
  .wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;

    .left {
      width: 50%;
      display: flex;
      flex-direction: column;
      h4 {
        margin: 0;
        font-size: 14px;
        font-weight: 800;
        color: #f67f00;
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
        font-size: 16px;
        color: #6d6d6d;
        font-weight: 400;
        line-height: 30px;
        font-family: "Nunito Sans";
      }
    }

    .right {
      width: 40%;
      display: flex;
      flex-direction: column;

      .imgs {
        position: relative; 
        overflow: hidden;

        &::after{
            position: absolute;
    content: "";
    width: 30px;
    height: 30px;
    top: -15px;
    right: -15px;
    z-index: 1;
    transform: rotate(45deg);
    background: #F67F00;
}
        }
      }

      h4 {
        position: absolute;
        z-index: 1;
        top: 25%;
        left: 10%;
        width: 100%;
        font-size: 26px;
        color: #fff;
      }

      img {
        width: 100%;
        height: 250px !important;
        object-fit: cover;
        filter: grayscale(90%);
        transition: 0.3s ease;
        margin-bottom: 30px;

        &:hover {
          filter: grayscale(0%);
          cursor: pointer;
        }
      }
    }
  
`;

export { SecondMissionWrapper };
