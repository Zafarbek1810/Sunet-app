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

      a {
        transition: 300ms ease;
        display: flex;
        position: relative;

        .spanIn {
          color: blue;
          opacity: 0;
          transition: 300ms;
        }
        &:hover {
          color: blue;
          .spanIn {
            display: block;
            margin-right: 5px;
            margin-left: 5px;
            opacity: 1;
          }
        }
      }
    }
  }
`;

export { SecondHowWorkWrappers };
