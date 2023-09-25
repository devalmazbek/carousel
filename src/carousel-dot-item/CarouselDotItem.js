import "./CarouselDotItem.css";

function CarouselDotItem({ onSelect, item, currentIndex }) {
  const handleOnSelect = () => {
    onSelect(item.id);
  };

  const style = item.id === currentIndex ? "active" : "";

  return <span onClick={handleOnSelect} className={`dot-item ${style}`}></span>;
}

export default CarouselDotItem;
