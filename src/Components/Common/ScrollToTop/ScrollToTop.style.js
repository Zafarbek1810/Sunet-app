import styled from "styled-components";

const ScrollToTopWrapper = styled.div`
 position: fixed;
  z-index: 999;
  right: 10px;
  bottom: 15px;

  .flow {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
  }
  .icon {
    font-size: 24px;
    transition: 0.2s;
    color: #1f1f1f;
  }
  .icon:hover {
    color: #f6a235;
  }
`
export { ScrollToTopWrapper }