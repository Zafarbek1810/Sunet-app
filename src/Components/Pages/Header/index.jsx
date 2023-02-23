import React, { useContext, useEffect, useRef, useState } from "react";
import { HeaderContext } from "../../../Context/HeaderContext";
import Container from "../../Common/Container";
import MyLink from "../../Common/MyLink";
import HeaderWrapper from "./HeaderWrapper";
import BurgerList from "./sections/MainHeader/Components/BurgerList";
import TopHeader from "./sections/TopHeader/TopHeader";
import useWindowDimensions from "../../../Hooks/useWindow";
import { ModalContext } from "../../../Context/ModalContext/Context";
import { useContextSelector } from "use-context-selector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export const LINKS = [
  {
    name: "About us",
    path: "/about",
    id: 1,
    dropMenu: [
      {
        title: "Our history",
        path: "/#services",
        id: 1.1,
      },
      {
        title: "Mission",
        path: "/#services",
        id: 1.2,
      },
      {
        title: "Values",
        path: "/#services",
        id: 1.3,
      },
    ],
  },
  {
    name: "Services",
    path: "/",
    id: 2,
    dropMenu: [
      {
        title: "How do we work",
        path: "/#services",
        id: 2.1,
      },
      {
        title: "Industries we work in",
        path: "/#services",
        id: 2.2,
      },
    ],
  },
  {
    name: "Our offices",
    path: "/",
    id: 3,
  },
  {
    name: "Resources",
    path: "/",
    id: 4,
    dropMenu: [
      {
        title: "Brochures",
        path: "/#services",
        id: 4.1,
      },
      {
        title: "Blog",
        path: "/#services",
        id: 4.2,
      },
      {
        title: "Case studies",
        path: "/#services",
        id: 4.3,
      },
      {
        title: "White papers",
        path: "/#services",
        id: 4.4,
      },
      {
        title: "FAQ",
        path: "/#services",
        id: 4.5,
      },
    ],
  },
  {
    name: "CSR",
    path: "/",
    id: 5,
  },
  {
    name: "Careers",
    path: "/",
    dropMenu: [
      {
        title: "Equal opportunity employer",
        path: "/#services",
        id: 6.1,
      },
      {
        title: "How do we recruit",
        path: "/#services",
        id: 6.2,
      },
      {
        title: "Apply online",
        path: "/#services",
        id: 6.3,
      },
    ],
    id: 6,
  },
  // {
  //   name: "Contact us",
  //   path: "/contact",
  //   id: 7,
  // },
  // {
  //   name: "Pages",
  //   path: "/",
  //   dropMenu: [
  //     {
  //       title: "page 1",
  //       path: "/#services",
  //       id: 2.1,
  //     },
  //     {
  //       title: "Page 2",
  //       path: "/#services",
  //       id: 2.2,
  //     },
  //     {
  //       title: "Page 3",
  //       path: "/#services",
  //       id: 2.3,
  //     },
  //   ],
  //   id: 2,
  // },
];

const Header = ({ isFixed, isArticlePage }) => {
  const [header, setHeader] = useState("header");
  const { burger, handleBurger, setBurger } = useContext(HeaderContext);
  const ref = useRef(null);
  const width = useWindowDimensions();

  const setIsModalVisible = useContextSelector(
    ModalContext,
    (state) => state[1]
  );

  useEffect(() => {
    const listenScrollEvent = () => {
      if (window.scrollY < 40) {
        return setHeader("header");
      } else if (window.scrollY > 40) {
        return setHeader("header2");
      }
    };
    const listenClickWindow = (event) => {
      const path = event.path || (event.composedPath && event.composedPath());
      if (
        path.includes(document.querySelector(".content.header")) ||
        path.includes(document.querySelector(".content.header2"))
      ) {
      } else {
        setBurger(false);
      }
    };

    window.addEventListener("scroll", listenScrollEvent);
    window.addEventListener("click", listenClickWindow);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
      window.removeEventListener("click", listenClickWindow);
    };
  }, []);

  return (
    <HeaderWrapper>
      <TopHeader />
      {/* <MainHeader isFixed={isFixed} isArticlePage={isArticlePage} /> */}
      <div className={`content ${header}`}>
        <div className="logo">
          <MyLink to="/" onClick={() => setBurger(false)}>
            <img
              src={
                width > 991
                  ? header !== "header"
                    ? `images/logo2.png`
                    : isFixed
                    ? `images/logo2.png`
                    : `images/logo2.png`
                  : `images/logo2.png`
              }
              width={225}
              height={32}
            />
          </MyLink>
        </div>
        <Container className="navbar-wrapper">
          <ul className="links_cont">
            {LINKS.map(({ name, path, id, dropMenu }) => (
              <li key={id}>
                <MyLink to={path}>
                  <div className="navs">
                    <p>{name}</p>
                    {dropMenu && (
                      <FontAwesomeIcon
                        className="angle-svg"
                        icon={faAngleDown}
                      />
                    )}
                  </div>
                </MyLink>
                {dropMenu && (
                  <div className="dropdown">
                    <ul className="dropdown__list">
                      {dropMenu.map((drop, idx) => (
                        <li key={idx} className="dropdown__item">
                          <MyLink to={drop.path} className="dropdown__link">
                            {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                            <span>{drop.title}</span>
                          </MyLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </Container>

        {/* <button
          onClick={() => {
            setIsModalVisible((p) => !p);
          }}
          className="myDefaultButton getBtn"
        >
          Get in Touch
        </button> */}

        <div
          onClick={handleBurger}
          className={`burger-btn ${burger ? "open" : "close"}`}
        >
          <span></span>
        </div>
        <BurgerList burger={burger} />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
