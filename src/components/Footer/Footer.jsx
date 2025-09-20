import f1 from "../../assets/furniture/f1.png";
import f2 from "../../assets/furniture/f2.png";
import f3 from "../../assets/furniture/f3.png";
import f4 from "../../assets/furniture/f4.png";
import f5 from "../../assets/furniture/f5.png";
import f6 from "../../assets/furniture/f6.png";
import MainButton from "../Buttons/MainButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  const feeds = [
    { id: 1, img: f1, title: "Brown Chair Design", cost: 100 },
    { id: 2, img: f2, title: "Double Bed Design", cost: 200 },
    { id: 3, img: f3, title: "House Chair Design", cost: 200 },
    { id: 4, img: f4, title: "Brown Table Design", cost: 100 },
    { id: 5, img: f5, title: "Blue Chair Design", cost: 200 },
    { id: 6, img: f6, title: "Brown Table Design", cost: 200 },
  ];

  return (
    <footer>
      <div className="container-fluid text-center  bg-dark text-white py-5">
        <div className="row g-4">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <div className="contact">
              <FontAwesomeIcon icon={faPhone} />
              <p>Call: +201007126990</p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <div className="contact">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>Email:Omarrabdoo00@gmail.com</p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <div className="contact">
              <FontAwesomeIcon icon={faLocationDot} />
              <p>Location</p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <ul className="quick-links list-unstyled">
              <li>Home</li>
              <li>Furniture</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <div className="feeds">
              <h5 className="text-uppercase fw-bold mb-3">Instagram Feeds</h5>

              {/* 3 columns, small gap, centered block */}
              <div
                className="row row-cols-3 g-2 justify-content-center"
                style={{ maxWidth: 360, margin: "0 auto" }}
              >
                {feeds && feeds.length > 0
                  ? feeds.map((feed) => (
                      <div className="col" key={feed.id}>
                        {/* square white tile */}
                        <div
                          className="bg-white rounded shadow-sm d-flex align-items-center justify-content-center"
                          style={{ height: 90, width: 90 }}
                          title={feed.title}
                        >
                          <img
                            src={feed.img}
                            alt={feed.title}
                            style={{ maxWidth: "64px", height: "auto" }}
                          />
                        </div>
                      </div>
                    ))
                  : "No Feeds"}
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <h2>Sign Up To Our Newsteller</h2>
            <div className=" mb-3 d-flex flex-column  justify-content-start ">
              <input
                type="text"
                className="form-control rounded-0 py-3 px-3 "
                placeholder="Enter Your Email"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <MainButton className="subscribe col-3 mt-3">Subscribe</MainButton>
            </div>
          </div>
          <div className="col-12">
            <p className="mb-0">
              &copy; 2024 All Rights Reserved. Designed by Omar Rabie
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
