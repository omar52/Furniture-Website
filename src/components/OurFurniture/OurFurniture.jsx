import f1 from "../../assets/furniture/f1.png";
import f2 from "../../assets/furniture/f2.png";
import f3 from "../../assets/furniture/f3.png";
import f4 from "../../assets/furniture/f4.png";
import f5 from "../../assets/furniture/f5.png";
import f6 from "../../assets/furniture/f6.png";
import FurnitureCard from "../FurnitureCard/FurnitureCard";
import "./OurFurniture.css";
const OurFurniture = () => {
  const furniture = [
    { id: 1, img: f1, title: "Brown Chair Design", cost: 100 },
    { id: 2, img: f2, title: "Double Bed Design", cost: 200 },
    { id: 3, img: f3, title: "House Chair Design", cost: 200 },
    { id: 4, img: f4, title: "Brown Table Design", cost: 100 },
    { id: 5, img: f5, title: "Blue Chair Design", cost: 200 },
    { id: 6, img: f6, title: "Brown Table Design", cost: 200 },
  ];

  return (
    <div className="furniture-section container">
      <h1>Our Furniture</h1>
      <p className="furniture-text">
        Discover our exclusive range of furniture, crafted with precision and
        designed to elevate your living spaces. From modern minimalism to
        classic elegance,</p>
      <div className="furniture-samples row g-5 mt-3">
          <FurnitureCard furniture={furniture} />
      </div>
    </div>
  );
};

export default OurFurniture;
