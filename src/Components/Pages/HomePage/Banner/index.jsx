import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "antd";
import Aos from "aos";
import React, { useEffect, useRef } from "react";
import Container from "../../../Common/Container";
import MyLink from "../../../Common/MyLink";
import { BannerWrapper, BannerWrapper2, BannerWrapper3 } from "./Banner.style";

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


  //   useEffect(() => {
  //     const handleNext = () => carouselRef.current.next();
  //     setTimeout(() => {
  //       handleNext();
  //     }, 1000);
  //   }, []);

  return (
    <Carousel effect="fade"  ref={carouselRef} dots={false}>
      <div>
        <BannerWrapper>
          <Container>
            <div className="wrap">
              <h4 className="subtitle">//Full Cucle Software Development</h4>
              <h1 className="title">From Idea to Product</h1>
              <p className="desc">
                We are 100+ professional software engineers with more than. 10
                years of experience in delivering superior products.
              </p>
              <MyLink to="/#">Learn More</MyLink>

              <div className="slidePage">
                <FontAwesomeIcon icon={faArrowLeft} onClick={handlePrev} />
                01/03
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
              <h4 className="subtitle">// Full Cucle Software Development</h4>
              <h1 className="title">From Idea to Product</h1>
              <p className="desc">
                We are 100+ professional software engineers with more than. 10
                years of experience in delivering superior products.
              </p>
              <MyLink to="/#">Learn More</MyLink>

              <div className="slidePage">
                <FontAwesomeIcon icon={faArrowLeft} onClick={handlePrev}/>
                02/03
                <FontAwesomeIcon icon={faArrowRight} onClick={handleNext}/>
              </div>
            </div>
          </Container>
        </BannerWrapper2>
      </div>
      <div>
        <BannerWrapper3>
          <Container>
          <div className="wrap">
              <h4 className="subtitle">Full Cucle Software Development</h4>
              <h1 className="title">From Idea to Product</h1>
              <p className="desc">
                We are 100+ professional software engineers with more than. 10
                years of experience in delivering superior products.
              </p>
              <MyLink to="/#">Learn More</MyLink>

              <div className="slidePage">
                <FontAwesomeIcon icon={faArrowLeft} onClick={handlePrev} />
                03/03
                <FontAwesomeIcon icon={faArrowRight} onClick={handleNext}/>
              </div>
            </div>
          </Container>
        </BannerWrapper3>
      </div>
    </Carousel>
  );
};

export default Banner;
