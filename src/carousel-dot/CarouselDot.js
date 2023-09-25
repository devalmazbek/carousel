import CarouselDotItem from "../carousel-dot-item/CarouselDotItem";
import "./CarouselDot.css";

function CarouselDot({ data, onSelect, currentIndex }) {
  return (
    <div className="dot">
      {data.map((item) => {
        return (
          <CarouselDotItem
            key={item.id}
            onSelect={onSelect}
            item={item}
            currentIndex={currentIndex}
          />
        );
      })}
    </div>
  );
}

export default CarouselDot;
