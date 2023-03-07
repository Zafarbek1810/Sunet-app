import styled from "styled-components";

const Wrapper=styled.div`
position: relative;
      z-index: 33;
.wrapper {
    align-items: center;
    background: #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
  }

  // Animation
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }

    50% {
      transform: translateX(
        calc((-320px * 12) + ${(props) => props.animateWidth}px)
      );
    }

    100% {
      transform: translateX(0);
    }
  }

  // Styling
  .slider {
    background: white;
    height: 150px;
    margin: auto;
    overflow: hidden;
    position: relative;
    width: 100%;

    .slide-track {
      animation: scroll 90s linear infinite;
      display: flex;
      width: 100%;
    }

    .slide {
      height: 150px;
      width: calc(100% / 6);
      background-color: #f8f8f8;
      display: flex;
      align-items: center;
      justify-content: center;

      &>div {
        /* max-width: 320px; */
        display: flex;
        align-items: center;
        justify-content: center;
        /* margin: 0 30px; */
      }

      img {
        filter: grayscale(1);
        transition: filter 0.4s ease, opacity 0.3s ease;
        opacity: 0.6;
        width: 100%;
        height: auto;
        &:hover {
          filter: grayscale(0);
          opacity: 1;
        }
      }
    }
  }
`

export{Wrapper}