import "./CarouselItem.css";

function CarouselItem({ item }) {
  return (
    <div
      className="carousel_item"
      style={{ backgroundImage: `url(${item.image})` }}
    >
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </div>
  );
}

export default CarouselItem;
