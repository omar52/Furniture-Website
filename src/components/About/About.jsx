import aboutImage from "../../assets/about-img.png";
import MainButton from "../Buttons/MainButton";
import "./About.css";
const About = () => {
  return (
    <div className="about container">
      <div className="row g-4">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
          <img className="w-100" src={aboutImage} alt="" />
        </div>

        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
          <div className="line">
            <h1 className="mx-auto">About us</h1>
          </div>
          <p className="my-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            odit dolor maiores error id voluptatibus laudantium reiciendis
            consectetur, quis optio!lorem  ipsum dolor sit amet consectetur
            consectetur, quis optio!lorem  ipsum dolor sit amet consectetur
          </p>
          <div className="buttons">
            <MainButton className="read">Read More</MainButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
