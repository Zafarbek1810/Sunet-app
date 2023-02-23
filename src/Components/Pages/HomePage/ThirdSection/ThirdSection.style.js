import styled from "styled-components";

const ThirdSectionWrapper = styled.div`
  background: #002f49;
  padding: 150px 0 250px;
  font-family: Nunito sans;

  .wrap {
    .subtitle {
      color: #8e88b8;
      font-size: 14px;
      font-weight: 800;
      text-transform: uppercase;
      text-align: center;
    }

    .title {
      color: #ffffff;
      font-size: 36px;
      line-height: 48px;
      font-family: Nunito sans;
      text-align: center;
      width: 50%;
      margin: auto;
      margin-bottom: 30px;
    }

    .cards {
      display: flex;
      gap: 30px;

      .card {
        position: relative;
        border: 1px solid #46416b;
        padding: 40px 30px;
        overflow: hidden;
        background-color: rgb(246,127,0, 0.9);
        transition: 300ms ease-in;

        span {
          position: absolute;
          top: -40px;
          left: 0;
          user-select: none;
          color: rgba(255, 255, 255, 0.1);
          font-size: 100px;
          font-weight: 800;
        }

        h6 {
            margin-top: 0;
          font-size: 20px;
          font-weight: 700;
          line-height: 30px;
          color: #fff;
          margin-bottom: 10px;
        }
        p{
            color: #fff;
            font-size: 16px;
            font-weight: 30;
        }

        .link{
            display: flex;
            align-items: center;
            color: #002f49;
            font-weight: 600;
            text-transform: uppercase;
            margin-bottom: 50px;
            svg{
                margin-right: 20px;
                width: 15px;
                transition: 300ms;
            }

            &:hover{
                svg{
                    margin-right: 10px;
                }
            }
        }

        .icon{
            position:absolute;
            right: -75px;
            bottom: -75px;
            background-color: rgb(0,47,73, 0.8);
            border-radius: 50%;
            width: 150px;
            height: 150px;

            svg{
                background-color: transparent;
                width: 40px;
                color: red;
                position: absolute;
                left: 25px;
                top: -25px;
            }
        }



        &:hover{
            background-color:#fff;

            span{
                color: rgba(0,0,0,0.1);
            }

            h6, p{
                color: #000;
            }

            .icon{
                background-color: rgb(246,127,0, 0.9);
                svg{
                    background-color: transparent;
                }
            }
        }
      }
    }
  }

  
`;

const BottomStyle=styled.div`
.bottom{
    display: flex;
    gap: 30px;
    transform: translateY(-50%);


    .twoCard{
        padding: 30px 50px;
        background-image: url("images/bg-counter-1.jpg");
        background-repeat: no-repeat;
  background-size: cover;

        .count{
            color: #fff;
            font-size: 48px;
            font-weight: 800;
        }

        .title{
            color: #FFFFFF;
    font-size: 22px;
    line-height: 30px;
        }

        .descr{
            width: 80%;
            color: #FFFFFF;
            font-size: 16px;
            line-height: 28px;
        }
    }
  }
`

export { ThirdSectionWrapper, BottomStyle };
