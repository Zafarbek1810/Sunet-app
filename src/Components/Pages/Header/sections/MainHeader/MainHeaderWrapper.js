import styled from "styled-components";

const MainHeaderWrapper = styled.div`
  background-color: #fff;
  z-index: 1000;
  svg {
    color: #000 !important;
    flex-shrink: 0;
    width: 10px;
  }

  .logo {
    flex-shrink: 0;
    color: #000;
    text-decoration: none;
    font-size: 24px;
    color: #000;
    letter-spacing: 10px;
    font-family: sans-serif;
    width: 14%;

    img {
      width: 100% !important;
      height: auto;
    }

    span {
      text-transform: uppercase;
      width: 80%;
      font-size: 24px;
      line-height: 18px;
      letter-spacing: 0.5px;
      font-weight: 900;
      color: #000;
      letter-spacing: 10px;
      font-family: sans-serif;
    }

    a {
      color: #000;
      text-decoration: none;
      font-family: sans-serif;
    }
  }

  .header {
    background-color: #fff;
    position: absolute;
    left: 0;
    right: 0;
    transform: translateY(-10px);
    transition: transform 0.3s ease !important;
    z-index: 999;
    min-height: 100px !important;
    padding-top: 10px !important;

    .navs {
      p {
        color: #000;
        font-family: Nunito Sans;
        font-weight: 700;
        transition: 300ms;

        &:hover {
          color: #f67f00 !important;
        }
      }
    }

    svg {
      color: #000 !important;
      flex-shrink: 0;
      width: 10px;
    }

    .myDefaultButton {
      background: #002f49;
      color: #fff;
      font-weight: 700;
      font-family: Nunito Sans;
      text-transform: uppercase;
      border: none;
      padding: 20px 10px;
      width: 200px;
      transition: 300ms;

      &:hover {
        background-color: #fff;
        color: #000;
        border: 1px solid #002f49;
      }
    }
  }

  .header2 {
    background-color: #fff;
    position: fixed !important;
    top: 0;
    left: 0;
    right: 0;
    z-index: 5555;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    transition: 0.3s ease-out !important;
    height: 100px;
    font-family: sans-serif;

    p {
      color: #000;
      font-family: Nunito Sans;
      font-weight: 700;

      &:hover {
        color: #f67f00 !important;
      }
    }

    svg {
      color: #000 !important;
      flex-shrink: 0;
      width: 10px;
    }

    .myDefaultButton {
      background: #002f49;
      color: #fff !important;
      font-weight: 700;
      font-family: Nunito Sans;
      text-transform: uppercase;
      border: none;
      padding: 20px 10px;
      width: 200px;
      transition: 300ms;

      &:hover {
        background-color: #fff;
        color: #000 !important;
        border: 1px solid #002f49;
      }
    }

    a,
    button {
      color: black !important;
      border-color: black !important;
    }

    .logo {
      flex-shrink: 0;
      color: #000;
      text-decoration: none;
      font-size: 24px;
      color: #8073b2;
      letter-spacing: 10px;
      font-family: sans-serif;

      a {
        color: #8073b2;
      }

      span {
        text-transform: uppercase;
        width: 80%;
        font-size: 24px;
        line-height: 18px;
        letter-spacing: 0.5px;
        font-weight: 900;
        color: #8073b2;
        letter-spacing: 10px;
        font-family: sans-serif;
      }
    }

    .links_cont {
      .navs {
        svg {
          color: #000 !important;
        }

        .angle-svg {
          color: #000 !important;
        }
      }
    }

    .burger-btn {
      &:after,
      &:before {
        background-color: #222;
      }

      span {
        background-color: #222;
      }
    }

    /* .burger-list-wrapper {
      background-color: #fff;
    } */
  }

  .content {
    padding: 0px 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* position: relative; */

    .links_cont {
      display: flex;
      justify-content: center;
      margin: 0;

      li {
        list-style: none;

        &:hover {
          svg {
            color: #f67f00 !important;
          }

          p {
            color: #f67f00 !important;
            position: relative;
          }
        }
      }
      p:after {
        content: "";
        display: block;
        height: 3px;
        left: 0%;
        top: 30px;
        position: absolute;
        background: #f67f00;
        transition: width 0.3s ease 0s;
        width: 0;
      }

      .navs {
        flex-shrink: 0;
        position: relative;
        padding: 30px 20px;
        display: flex;

        .arrow-svg {
          font-size: 13px;
          position: absolute;
          left: -15px;
          top: 50%;
          transform: translateY(-55%);
          color: transparent;
          transition: 0.3s;
          line-height: 1.2;
        }

        .angle-svg {
          font-size: 13px;
          margin-left: 5px;
          color: #000;
          transition: color 0.1s ease;
        }

        &:hover {
          .arrow-svg {
            left: 0;
            color: white;
          }
        }

        p {
          font-size: 13px;
          line-height: 1.2;
        }
      }

      a {
        text-transform: uppercase;
        text-decoration: none;
      }

      p {
        margin: 0;
        padding: 0;
      }
    }
  }

  // --------------------------- DROPDOWN MENU ----------------------------------
  .content {
    position: relative;
    .links_cont {
      & > li {
        position: relative;
      }

      & > li:hover {
        & > .dropdown {
          top: 100%;
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }

  .dropdown {
    position: absolute;
    background-color: #fff;
    color: #222;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.2);
    left: 0;
    top: 140%;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease, top 0.3s ease;
    width: 270px;

    &__link {
      padding: 15px 20px;
      display: block;
      white-space: nowrap;
      position: relative;
      font-size: 13px;
      font-weight: 700;

      span {
        display: flex;
        position: relative;

        .spanIn {
          color: #f67f00;
          opacity: 0;
          transition: 300ms;
        }
      }

      svg {
        position: absolute;
        top: 50%;
        left: -10px;
        transform: translateY(-50%);
        opacity: 0;
        color: #222;
        transition: opacity 0.3s ease, left 0.3s ease;
      }

      &:hover {
        /* background-color: rgba(0, 0, 0, 0.05); */

        svg {
          left: 15px;
          opacity: 1;
        }

        span {
          color: #f67f00;

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

  .dropdown2 {
    padding: 30px 0;
    position: absolute;
    top: 90%;
    left: 0;
    z-index: 444;
    width: 100%;
    height: auto;
    background-color: #fff;
    font-family: Nunito sans;
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s;

    .wrap {
      display: flex;

      .left {
        background-color: #f2f2f2;
        width: 40%;
        padding-left: 75px;
        .tabs {
          width: 100%;
          margin: auto;
          display: flex;
          flex-direction: column;
          border-bottom: 1px solid #eee;
          button.tab-item {
            padding: 10px;
            background: transparent;
            border: none;
            transition-duration: 300ms;
            position: relative;
            color: #000;
            font-family: Nunito sans;
            font-size: 14px;
            font-weight: 700;
            line-height: 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            text-transform: uppercase;
            svg {
              display: none;
              width: 16px;
            }
            /* margin-bottom: 15px; */

            &:hover {
              color: #f67f00;
              cursor: pointer;
            }
            /* &:before {
              display: none;
              position: absolute;
              content: "";
              left: 0;
              bottom: 0;
              width: 100%;
              height: 1px;
              background: #000;
            } */
          }
          button.active {
            color: #f67f00;
            line-height: 16px;
            padding: 10px;
            svg {
              display: block;
            }
            &:hover {
              cursor: auto;
            }
            /* &:before {
              display: block;
              background: #f67f00;
            } */
          }
        }
      }
      .right {
        .component {
          padding: 0px 50px;
          p {
            color: #000;
            font-family: Nunito sans;
            font-size: 14px;
            font-weight: 700;
            line-height: 16px;
            text-transform: uppercase;
          }
          ul {
            padding: 0;
            li {
              margin-bottom: 10px;
              list-style: none;
              a {
                display: flex;
                position: relative;
                font-weight: 600;
                font-family: Nunito sans;
                .spanIn {
                  color: #f67f00;
                  opacity: 0;
                  transition: 300ms;
                }
              }
              a:hover {
                color: #f67f00;

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
      }
    }
  }

  .dropdown2.dr-vis {
    visibility: visible;
    opacity: 1;
  }

  .header {
    .dropdown {
      /* background-color: rgba(34, 35, 40, 0.2); */
      background-color: #fff;
      box-shadow: none;

      ul {
        padding: 0;
      }

      &__link {
        color: #000;
        font-family: sans-serif;

        /* svg {
          color: #000;
          height: 10px;
        } */
      }
    }
  }

  // --------------------------- BURGER STYLES ----------------------------------
  .getBtn {
    cursor: pointer;
  }
  .header2 {
    /* .getBtn {
      &:hover {
        color: #fff !important;
        background: var(--primary);
        border-color: var(--primary) !important;
      }
    } */

    .dropdown {
      background-color: #fff;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

      ul {
        padding: 0;
      }

      &__link {
        color: #000;
        font-family: sans-serif;
      }
    }
  }

  .burger-btn {
    display: none;
    position: relative;

    cursor: pointer;
    width: 40px;
    height: 40px;

    &:after,
    &:before {
      display: block;
      position: absolute;
      width: 100%;
      height: 4px;
      left: 0;
      background-color: #000;

      content: "";
      transition: transform 0.3s ease;
    }

    &:before {
      top: 5px;
      transform-origin: left top;
    }

    &:after {
      transform-origin: left bottom;
      bottom: 5px;
    }

    span {
      width: 100%;
      height: 4px;
      background-color: #000;
      transition: transform 0.3s ease;
    }
  }

  .burger-list-wrapper {
    display: none;
  }

  @media (max-width: 1024px) {
    .logo {
      width: 30%;
    }
    li {
      list-style: none;
    }
    a {
      text-decoration: none;
    }
    .content {
      padding: 0 30px;
      background-color: #fff;
    }
    .header {
      /* background-color: transparent; */
      padding-top: 35px;
    }

    .header2 {
    }

    .navbar-wrapper {
      display: none !important;
    }

    .burger-btn {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .getBtn {
      display: none;
    }

    .burger-list-wrapper {
      height: calc(100vh - 59px);
      position: absolute;
      top: 100%;
      left: 0;
      display: flex;
      flex-direction: column;
      background-color: #fff;
      padding: 15px;
      min-width: 300px;
      box-shadow: rgba(0, 0, 0, 0.15) 3px 3px 5px;

      a {
        color: #222;
      }

      overflow: auto;

      .burger-list {
        display: flex;
        flex-direction: column;
      }

      .burger-link {
        cursor: pointer;
        display: block;
        color: #222;
        padding: 6px 0;
        font-size: 15px;
        text-transform: uppercase;

        &:hover {
          color: var(--primary) !important;
        }
      }

      .burger-getBtn {
        border-color: #222;
        justify-content: center;
        color: #222;
      }

      .drop-link {
        span {
          display: inline-block;
          margin-right: 10px;
        }

        svg {
          transition: all 0.3s ease;
        }
      }

      .burger-drop-wrapper {
        overflow: hidden;
        transition: max-height 0.3s ease;

        li {
          margin-left: 15px;

          a {
            cursor: pointer;
            display: block;
            color: #222;
            padding: 6px 0;
            font-size: 15px;
            text-transform: uppercase;

            &:hover {
              color: var(--primary) !important;
            }
          }
        }
      }

      transition: left 0.5s ease;

      &.close {
        left: -100%;
      }

      &.open {
        left: 0;
      }
    }
  }
`;

export { MainHeaderWrapper };
