import landingImage from "../../assets/slider-img.png";
import MainButton from "../Buttons/MainButton";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <div className="landing-page container">
      <div className="row g-5">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
          <h1>For All Your <br /> Furniture Needs</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            odit dolor maiores error id voluptatibus laudantium reiciendis
            consectetur, quis optio!
          </p>
          <div className="buttons">
            <MainButton className="contact">Contact Us</MainButton>
            <MainButton className="about-landing">About Us</MainButton>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
          <img className="w-100" src={landingImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
