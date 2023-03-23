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
import RightSvg from "../../../../Common/Svg/RightSvg";

export const LINKS = [
  {
    name: "Home",
    path: "/",
    id: 7,
  },
  {
    name: "About us",
    path: "/about/our-history",
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
      {
        title: "How do we work",
        path: "/services/how-we-work",
        id: 1.4,
      },
    ],
  },
  {
    name: "SOLUTIONS",
    path: "/#",
    id: 2,
    dropdown2: [
      [
        {
          title: "Full circle logistics services",
          path: "/#",
          id: 2.1,
        },
        {
          title: "Back office support",
          path: "/#",
          id: 2.2,
        },
      ],
      [
        {
          title: "Full circle logistics services",
          path: "/#",
          id: 2.1,
        },
        {
          title: "Back office support",
          path: "/#",
          id: 2.2,
        },
      ],
      [
        {
          title: "Full circle logistics services",
          path: "/#",
          id: 2.1,
        },
        {
          title: "Back office support",
          path: "/#",
          id: 2.2,
        },
      ],
      [
        {
          title: "Full circle logistics services",
          path: "/#",
          id: 2.1,
        },
        {
          title: "Back office support",
          path: "/#",
          id: 2.2,
        },
      ],
      [
        {
          title: "Full circle logistics services",
          path: "/#",
          id: 2.1,
        },
        {
          title: "Back office support",
          path: "/#",
          id: 2.2,
        },
      ],
    ],
    // dropMenu: [
    //   {
    //     title: "How do we work",
    //     path: "/services/how-we-work",
    //     id: 2.1,
    //   },
    //   {
    //     title: "Industries we work in",
    //     path: "/#",
    //     id: 2.2,
    //   },
    // ],
  },
  {
    name: "Our offices",
    path: "/our-offices",
    id: 3,
  },
  // {
  //   name: "Resources",
  //   path: "/",
  //   id: 4,
  //   dropMenu: [
  //     {
  //       title: "Brochures",
  //       path: "/#",
  //       id: 4.1,
  //     },
  //     {
  //       title: "Blog",
  //       path: "/#",
  //       id: 4.2,
  //     },
  //     {
  //       title: "Case studies",
  //       path: "/#",
  //       id: 4.3,
  //     },
  //     {
  //       title: "White papers",
  //       path: "/#",
  //       id: 4.4,
  //     },
  //     {
  //       title: "FAQ",
  //       path: "/faq",
  //       id: 4.5,
  //     },
  //   ],
  // },
  {
    name: "CSR",
    path: "/csr",
    id: 5,
  },
  {
    name: "Careers",
    path: "/careers/employer",
    dropMenu: [
      {
        title: "Equal opportunity employer",
        path: "/careers/employer",
        id: 6.1,
      },
      {
        title: "How do we recruit",
        path: "/careers/recruit",
        id: 6.2,
      },
      {
        title: "Apply online",
        path: "/careers/apply",
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
  const [dropdown, setDropdown] = useState(false);

  const inHover = () => {
    setDropdown(true);
  };
  const onLeave = () => {
    setDropdown(false);
  };

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

  const [activePage, setActivePage] = useState(1);

  let Component = null;
  switch (activePage) {
    case 1: {
      Component = <Item1 />;
      break;
    }
    case 2: {
      Component = <Item2 />;
      break;
    }
    case 3: {
      Component = <Item3 />;
      break;
    }
    case 4: {
      Component = <Item4 />;
      break;
    }
    case 5: {
      Component = <Item5 />;
      break;
    }
    case 6: {
      Component = <Item6 />;
      break;
    }
    case 7: {
      Component = <Item7 />;
      break;
    }
    case 8: {
      Component = <Item8 />;
      break;
    }
    case 9: {
      Component = <Item9 />;
      break;
    }
    case 10: {
      Component = <Item10 />;
      break;
    }
    case 11: {
      Component = <Item11 />;
      break;
    }
    case 12: {
      Component = <Item12 />;
      break;
    }
  }
  const tabMassiv = [
    {
      title: "Banking and Finance",
      id: 1,
    },
    {
      title: "Healthcare",
      id: 2,
    },
    {
      title: "Information Technology",
      id: 3,
    },
    {
      title: "Retail and E-commerce",
      id: 4,
    },
    {
      title: "Telecommunications",
      id: 5,
    },
    {
      title: "Insurance",
      id: 6,
    },
    {
      title: "Manufacturing",
      id: 7,
    },
    {
      title: "Travel and Hospitality",
      id: 8,
    },
    {
      title: "Real Estate",
      id: 9,
    },
    {
      title: "Education",
      id: 10,
    },
    {
      title: "Media and Entertainment",
      id: 11,
    },
    {
      title: "Transportation and Logistics",
      id: 12,
    },
  ];

  return (
    <MainHeaderWrapper ref={ref} isFixed={isFixed}>
      <div className={`content ${header}`}>
        <div className="logo">
          <MyLink to="/" onClick={() => setBurger((p) => !p)}>
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
            {LINKS.map(({ name, path, id, dropMenu, dropdown2 }) => (
              <li key={id}>
                <MyLink
                  to={path}
                  {...(id === 2
                    ? { onMouseOver: inHover, onMouseLeave: onLeave }
                    : {})}
                >
                  <div className="navs">
                    <p>{name}</p>
                    {dropMenu && (
                      <FontAwesomeIcon
                        className="angle-svg"
                        icon={faAngleDown}
                      />
                    )}
                    {dropdown2 && (
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
        <div
          className={`dropdown2 ${dropdown ? "dr-vis" : ""}`}
          // style={{ display: dropdown ? "block" : "none" }}
          onMouseOver={inHover}
          onMouseLeave={onLeave}
        >
          <Container>
            <div className="wrap">
              <div className="left">
                <div className="tabs">
                  {tabMassiv.map((item, index) => {
                    return (
                      <>
                        <button
                          onClick={() => setActivePage(item.id)}
                          key={index}
                          className={`tab-item ${
                            activePage === item.id ? "active" : ""
                          }`}
                        >
                          {item.title} <RightSvg />
                        </button>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="right">
                <div className="component">{Component}</div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </MainHeaderWrapper>
  );
};

const Item1 = () => {
  return (
    <>
      <p>Banking and Finance</p>
      <ul>
        <li><MyLink to="/#"><div className="spanIn">||</div>Account processing</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Credit card processing</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Customer service</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Fraud and risk management</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Loan processing and underwriting</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Mortgages and loans servicing</MyLink></li>
      </ul>
    </>
  );
};
const Item2 = () => {
  return (
    <>
      <p>Healthcare</p>
      <ul>
        <li><MyLink to="/#"><div className="spanIn">||</div>Claims processing and adjudication</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Medical billing and coding</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Medical transcription</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Revenue cycle management</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Customer service</MyLink></li>
      </ul>
    </>
  );
};
const Item3 = () => {
  return (
    <>
      <p>Information Technology</p>
      <ul>
        <li><MyLink to="/#"><div className="spanIn">||</div>Application development and maintenance</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Cloud computing</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Database management and administration</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>IT help desk support</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Network management and monitoring</MyLink></li>
      </ul>
    </>
  );
};
const Item4 = () => {
  return (
    <>
      <p>Retail and E-commerce</p>
      <ul>
        <li><MyLink to="/#"><div className="spanIn">||</div>Customer service</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Inventory management</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Order processing and fulfillment</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Payment processing</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Product information management</MyLink></li>
      </ul>
    </>
  );
};
const Item5 = () => {
  return (
    <>
      <p>Telecommunications</p>
      <ul>
        <li><MyLink to="/#"><div className="spanIn">||</div>Billing and revenue management</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Customer service</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Network management and monitoring</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Technical support</MyLink></li>
      </ul>
    </>
  );
};
const Item6 = () => {
  return (
    <>
      <p>Insurance</p>
      <ul>
        <li><MyLink to="/#"><div className="spanIn">||</div>Claims processing and adjudication</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Customer service</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Policy administration</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Underwriting</MyLink></li>
      </ul>
    </>
  );
};
const Item7 = () => {
  return (
    <>
      <p>Manufacturing</p>
      <ul>
        <li><MyLink to="/#"><div className="spanIn">||</div>Logistics and supply chain management</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Order processing and fulfillment</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Product design and engineering</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Quality control and inspection</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Warranty and returns processing</MyLink></li>
      </ul>
    </>
  );
};
const Item8 = () => {
  return (
    <>
      <p>Travel and Hospitality</p>
      <ul>
        <li><MyLink to="/#"><div className="spanIn">||</div>Customer service</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Reservations and booking management</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Revenue management</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Travel insurance</MyLink></li>
      </ul>
    </>
  );
};
const Item9 = () => {
  return (
    <>
      <p>Real Estate</p>
      <ul>
        <li><MyLink to="/#"><div className="spanIn">||</div>Property management</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Rental application processing</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Tenant screening</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Title searches and insurance</MyLink></li>
      </ul>
    </>
  );
};
const Item10 = () => {
  return (
    <>
      <p>Education</p>
      <ul>
        <li><MyLink to="/#"><div className="spanIn">||</div>Enrollment and student services</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Financial aid processing</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Transcript processing</MyLink></li>
      </ul>
    </>
  );
};
const Item11 = () => {
  return (
    <>
      <p>Media and Entertainment</p>
      <ul>
        <li><MyLink to="/#"><div className="spanIn">||</div>Content moderation</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Customer service</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Digital asset management</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Distribution and syndication</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Order processing and fulfillment</MyLink></li>
      </ul>
    </>
  );
};
const Item12 = () => {
  return (
    <>
      <p>Transportation and Logistics</p>
      <ul>
        <li><MyLink to="/#"><div className="spanIn">||</div>Logistics and supply chain management</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Order processing and fulfillment</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Shipping and tracking management</MyLink></li>
        <li><MyLink to="/#"><div className="spanIn">||</div>Third-party logistics (3PL) services</MyLink></li>
      </ul>
    </>
  );
};

export default MainHeader;
