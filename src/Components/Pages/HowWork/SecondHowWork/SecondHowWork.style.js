import styled from "styled-components";

const SecondHowWorkWrappers = styled.div`
  padding-top: 40px;
  h3 {
    color: #1b1d21;
    font-size: 44px;
    margin: 0;
    line-height: 52px;
    font-weight: 800;
    font-family: "Nunito Sans";
    text-align: center;
  }

  ol {
    li {
      color: #1b1d21;
      font-family: Nunito sans;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      scroll-behavior: "smooth";
      transition: 300ms;

      &:hover {
          color: #F67F00;
            margin-left: 5px;
          }
        }
      a {
        display: flex;
        position: relative;

        .spanIn {
          color: blue;
          opacity: 0;
        }
        
      }
    }

    @media (max-width: 650px) {
      ol{
        li{
          font-size: 14px !important;
        }
      }
    }
`;

export { SecondHowWorkWrappers };
