import React from "react";
import useWindowWidth from "../../../../Hooks/useWindow"
import { Wrapper } from "./style";

const data = [
  
  {
    imgPath: "/images/Brands/it-park-school.png",
  },
  {
    imgPath: "/images/Brands/digital-garden.png",
  },
  {
    imgPath: "/images/Brands/ucell2.png",
  },
  {
    imgPath: "/images/Brands/it-park.png",
  },
  {
    imgPath: "/images/Brands/Morgan.png",
  },
  {
    imgPath: "/images/Brands/bank-of-america.png",
  },
  
];

const data2x = [...data, ...data];

const Brands = () => {
  const width = useWindowWidth();
  return (
    <Wrapper>
      <div className="wrapper">
        <div className="slider">
          <div className="slide-track">
            {data.map((item, idx) => (
              <div className="slide" key={idx}>
                <div>
                  <img src={item.imgPath} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Brands;
