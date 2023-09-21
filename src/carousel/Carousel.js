import { useEffect, useState } from "react";
import CarouselItem from "../carousel-item/CarouselItem";

import { data } from "../data";
import "./Carousel.css";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const item = data;

  const handelNextSlide = () => {
    setCurrentIndex((currentIndex) => {
      if (currentIndex < data.length - 1) {
        return currentIndex + 1;
      } else {
        return 0;
      }
    });
  };

  const handlePreviousSlide = () => {
    setCurrentIndex((currentIndex) => {
      if (currentIndex > 0) {
        return currentIndex - 1;
      } else {
        return data.length - 1;
      }
    });
  };

  return (
    <div className="carousel">
      <div className="left">
        <span onClick={handlePreviousSlide}>
          <i className="fa-solid fa-arrow-left"></i>
        </span>
      </div>
      <CarouselItem item={item[currentIndex]} />
      <div className="right">
        <span onClick={handelNextSlide}>
          <i className="fa-solid fa-arrow-right"></i>
        </span>
      </div>
    </div>
  );
}

export default Carousel;
