import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ScrollToTopWrapper } from "./ScrollToTop.style";
import { faArrowAltCircleUp } from "@fortawesome/free-regular-svg-icons";

const ScrolltoTop = () => {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handler = (event) => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false)
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);
  return (
    <ScrollToTopWrapper
      onClick={onClick}
      style={{ visibility: visible ? "visible" : "hidden" }}
    >
      <div className="flow">
      <FontAwesomeIcon icon={faArrowAltCircleUp} />
      </div>
    </ScrollToTopWrapper>
  );
};

export default ScrolltoTop;
