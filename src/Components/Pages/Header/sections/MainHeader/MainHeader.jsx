import React, { useEffect, useState, useRef, useContext } from "react";
import MyLink from "../../../../Common/MyLink";
import Container from "../../../../Common/Container";
import BurgerList from "./Components/BurgerList";
import { HeaderContext } from "../../../../../Context/HeaderContext";
import { MainHeaderWrapper } from "./MainHeaderWrapper";
import useWindowDimensions from "../../../../../Hooks/useWindow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useContextSelector } from "use-context-selector";
import { ModalContext } from "../../../../../Context/ModalContext/Context";

export const LINKS = [
  {
    name: "About us",
    path: "/about",
    id: 1,
    dropMenu: [
      {
        title: "Our history",
        path: "/about/our-history",
        id: 1.1,
      },
      {
        title: "Mission & Vision",
        path: "/about/mission",
        id: 1.2,
      },
      {
        title: "Values",
        path: "/about/values",
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
        path: "/faq",
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
];

const MainHeader = ({ isFixed }) => {
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
      if (window.scrollY < 180) {
        return setHeader("header");
      } else if (window.scrollY > 180) {
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
    <MainHeaderWrapper ref={ref} isFixed={isFixed}>
      <div className={`content ${header}`}>
        <div className="logo">
          <MyLink to="/" onClick={() => setBurger(p => !p)}>
            <img
              src={
                width > 991
                  ? header !== "header"
                    ? `/images/logo2.png`
                    : isFixed
                    ? `/images/logo2.png`
                    : `/images/logo2.png`
                  : `/images/logo2.png`
              }
              width={100}
              height={72}
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
                            <span>
                              <div className="spanIn">||</div>
                              {drop.title}
                            </span>
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

        <button
          onClick={() => {
            setIsModalVisible((p) => !p);
          }}
          className="myDefaultButton getBtn"
        >
          Get in Touch
        </button>

        <div
          onClick={handleBurger}
          className={`burger-btn ${burger ? "open" : "close"}`}
        >
          <span></span>
        </div>
        <BurgerList burger={burger} />
      </div>
    </MainHeaderWrapper>
  );
};

export default MainHeader;
