import styled from "styled-components";

const DemoWrapper = styled.div`
  margin-top: 200px;
  margin-bottom: 100px;

  .wrap{
        height: 100%;
        overflow: scroll;
    }

    .anch{
        height: 50vh;
    }

  /* .wrap {
    height: 50vh;
    display: flex;
    gap: 50px;
    align-items: center;

    .component {
      height: 50vh;
      overflow: scroll;
      width: 65%;
    }
  } */

  /* .tabs {
    width: 35%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    justify-content: space-between;
    border: 2px solid #f99348 !important;

    button.tab-item {
      background: transparent;
      border: none;
      transition-duration: 300ms;
      position: relative;
      color: #000;
      padding: 5px 15px;
      width: 100%;
      margin-bottom: 10px;

      &:hover {
        color: #f99348;
      }
    }

    button.active {
      color: #f99348;
      font-weight: 700;

      &:hover {
        cursor: pointer;
      }
    }
  }

  @media (max-width: 768px) {
    .tabs {
      width: 100%;
    }
  } */
`;

export { DemoWrapper };
