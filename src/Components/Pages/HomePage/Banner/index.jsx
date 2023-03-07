import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "antd";
import Aos from "aos";
import React, { useEffect, useRef } from "react";
import AnimatedText from "react-animated-text-content";
import Container from "../../../Common/Container";
import MyLink from "../../../Common/MyLink";
import { BannerWrapper, BannerWrapper2 } from "./Banner.style";

const Banner = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
    Aos.refresh();
  }, []);

  const carouselRef = useRef();
  console.log(carouselRef);

  const handleNext = () => carouselRef.current.next();

  const handlePrev = () => carouselRef.current.prev();

  return (
    <Carousel
      autoplay
      autoplaySpeed={3500}
      effect="fade"
      easing
      ref={carouselRef}
      dots={false}
    >
      <div>
        <BannerWrapper>
          <Container>
            <div className="wrap">
              <h1 className="title">
              <AnimatedText
                type="chars" // animate words or chars
                animation={{
                  x: "200px",
                  y: "-20px",
                  scale: 1.1,
                  ease: "ease-in-out",
                }}
                animationType="wave"
                interval={0.06}
                duration={1}
                tag="p"
                className="animated-paragraph"
                includeWhiteSpaces
                threshold={0.1}
                rootMargin="20%"
              >
                Best match found
              </AnimatedText>
              </h1>
              <p className="desc">
                The best possible match for your job, for your project’s
                completion on time and with no flaws.
              </p>
              <div className="item">
                <MyLink to="/services/how-we-work">Learn More</MyLink>
              </div>
              <div className="slidePage">
                <FontAwesomeIcon icon={faArrowLeft} onClick={handlePrev} />
                01/02
                <FontAwesomeIcon icon={faArrowRight} onClick={handleNext} />
              </div>
            </div>
          </Container>
        </BannerWrapper>
      </div>
      <div>
        <BannerWrapper2>
          <Container>
            <div className="wrap">
            <h1 className="title">
              <AnimatedText
                type="words" // animate words or chars
                animation={{
                  x: "200px",
                  y: "-20px",
                  scale: 1.1,
                  ease: "ease-in-out",
                }}
                animationType="float"
                interval={0.06}
                duration={1.5}
                tag="p"
                className="animated-paragraph"
                includeWhiteSpaces
                threshold={0.1}
                rootMargin="20%"
              >
                concentrate on your job
              </AnimatedText>
              </h1>
              <p className="desc">
                To excel, grow and provide a diversity of positions to our
                workforce, while serving you at our best.
              </p>
              <div className="item">
                <MyLink to="/services/how-we-work">Learn More</MyLink>
              </div>

              <div className="slidePage">
                <FontAwesomeIcon icon={faArrowLeft} onClick={handlePrev} />
                02/02
                <FontAwesomeIcon icon={faArrowRight} onClick={handleNext} />
              </div>
            </div>
          </Container>
        </BannerWrapper2>
      </div>
    </Carousel>
  );
};

export default Banner;
