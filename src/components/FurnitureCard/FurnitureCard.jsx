import MainButton from "../Buttons/MainButton";
import "./FurnitureCard.css";
const FurnitureCard = ({ furniture }) => {
  console.log(furniture);
  return (
    <>
      {furniture && furniture.length > 0 ? (
        furniture.map((item) => (
          <div
            className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4"
            key={item.id || item.img}
          >
            <div className="card ">
              <img src={item.img} className="card-img-top " />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
              </div>
              <div className="cont">
                <p href="#" className="cost">
                  ${item.cost}{" "}
                </p>
                <MainButton className="fur-card-buy">BUY NOW</MainButton>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h2>No furniture available</h2>
      )}
    </>
  );
};

export default FurnitureCard;
