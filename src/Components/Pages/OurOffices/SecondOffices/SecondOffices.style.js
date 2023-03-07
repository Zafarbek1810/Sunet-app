import styled from "styled-components";

const SecondOfficesWrapper = styled.div`
  padding: 75px 0;

  .wrap {
    display: flex;
    margin-bottom: 50px;
    gap: 30px;

    h4.title {
      font-size: 30px;
      color: #1b1d21;
      font-weight: 800;
      margin-top: 0;
    }
    .left {
      width: 50%;

      img {
        width: 100%;
      }

      span {
        float: left;
        font-size: 20px;
        line-height: 30px;
        border: 1px solid #e7e7e7;
        display: block;
        font-weight: 700;
        color: #002f49;
        padding: 7px;
        margin-right: 30px;
        user-select: none;
        width: 20%;
        text-align: center;
      }

      p {
        margin: 0;
        font-size: 20px;
        font-family: "Nunito Sans";
      }
    }

    .right {
      width: 50%;

      img {
        width: 100%;
      }

      span {
        float: left;
        font-size: 20px;
        line-height: 30px;
        border: 1px solid #e7e7e7;
        display: block;
        font-weight: 700;
        color: #002f49;
        padding: 7px;
        margin-right: 30px;
        user-select: none;
        width: 20%;
        text-align: center;
      }

      p {
        margin: 0;
        font-size: 20px;
        font-family: "Nunito Sans";
      }
    }
  }

  .wrap2 {
    width: 100%;

    h4.title {
      font-size: 30px;
      color: #1b1d21;
      font-weight: 800;
    }

    p {
      margin: 0;
      font-size: 20px;
      font-family: "Nunito Sans";
      margin-bottom: 30px;
    }

    .wrapperImg {
      display: flex;
      gap: 30px;
    }

    .first {
      display: flex;
      flex-direction: column;
      width: 100%;
      .out_img {
        overflow: hidden;
        transition: 300ms ease;

        &:hover img {
          transform: scale(1.05);
        }
      }

      img {
        width: 100%;
        object-fit: cover;
        transition: 300ms ease;
        margin-bottom: 40px;
      }

      .imgtop {
        height: 350px;
      }

      .imgbot {
        height: 250px;
      }
    }
    .second {
      display: flex;
      flex-direction: column;
      width: 100%;
      .out_img {
        overflow: hidden;
        transition: 300ms ease;

        &:hover img {
          transform: scale(1.05);
        }
      }

      img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        transition: 300ms ease;
        margin-bottom: 40px;
      }

      .imgtop {
        height: 250px;
      }

      .imgbot {
        height: 350px;
      }
    }

    .third {
      display: flex;
      flex-direction: column;
      width: 100%;
      .out_img {
        overflow: hidden;
        transition: 300ms ease;

        &:hover img {
          transform: scale(1.05);
        }
      }

      img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        transition: 300ms ease;
        margin-bottom: 40px;
      }

      .imgtop {
        height: 350px;
      }

      .imgbot {
        height: 250px;
      }
    }

    .imgs {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      margin-bottom: 40px;
      flex-wrap: wrap;

      .out_img {
        width: 30%;
        overflow: hidden;
        transition: 300ms ease;

        &:hover img {
          transform: scale(1.05);
        }
      }

      img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        transition: 300ms ease;
        margin-bottom: 40px;
      }
    }
  }

  @media (max-width: 650px) {
    .wrap {
      flex-direction: column-reverse;

      .left,
      .right {
        width: 100%;

        h4 {
          font-size: 22px;
          margin-bottom: 10px;
        }

        p {
          font-size: 16px;
        }
      }
    }

    .wrapperImg{
      flex-direction: column;

      img{
        height: 300px !important;
      }
    }

    .wrap2 {
      h4 {
        font-size: 22px;
        margin-bottom: 10px;
      }

      p {
        font-size: 16px;
      }

      

      .imgs {
        flex-direction: column;

        .out_img {
          width: 100%;
        }
      }
    }
  }
`;

export { SecondOfficesWrapper };
