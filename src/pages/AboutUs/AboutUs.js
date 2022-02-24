import React from "react";
import gridImg2 from "../../assets/images/aboutUs/About us image - 148x305 px.png";
import gridImg1 from "../../assets/images/aboutUs/About Us image - 278x305 px.jpg";
import whyChooseUsImg from "../../assets/images/aboutUs/About Us image 3 - 368x295.png";
import docIcon from "../../assets/images/aboutUs/icons/Doc Icon.svg";
import labIcon from "../../assets/images/aboutUs/icons/Lab Icon.svg";
import contactUsImg from "../../assets/images/aboutUs/Map - 998x388 px.jpg";
import missionNVissionImg from "../../assets/images/aboutUs/Mission & Vision - 579x399 px.jpg";
import "./AboutUs.scss";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const AboutUs = () => {
  //flex-grow, flex-shrink, drop-shadow

  return (
    <>
      <div>
        <div className="container">
          <div className="row my-5">
            <div className="col-sm-6 aboutUs-grid">
              <div className="child-grid-1">
                <p>100 + Tests</p>
              </div>
              <div className="child-grid-2">
                <img src={gridImg1} alt="" />
              </div>
              <div className="child-grid-3">
                <img src={gridImg2} alt="" />
              </div>
              <div className="child-grid-4">
                <p>100 + Doctors</p>
              </div>
            </div>
            <div className="col-sm-6 aboutUs-details">
              <h3>About Arms Flow</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam sit saepe voluptatem magni accusamus molestiae illum ab
                animi explicabo, ex assumenda, quod fugit! Porro possimus, earum
                harum voluptates quod doloribus repellat aut quae dolores, eaque
                nam excepturi eligendi? Ab mollitia porro aliquam sed molestias
                necessitatibus nesciunt, asperiores deserunt suscipit m
                distinctio fuga suscipit doloremque cumque qui.
              </p>
              <Link to="/doctorslist" onClick={() => window.scrollTo(0, 0)}>
                <button className="">
                  Book Now <ChevronRightIcon />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="container my-5 service-provided-section">
          <h1 className="text-center">Services Provided</h1>
          <div className="service-provided-grid-container">
            <Link to="/consultation" onClick={() => window.scrollTo(0, 100)}>
              <div className=" service-provide-cart service-provide-cart-1">
                <div className="aboutus-icon">
                  <img src={docIcon} alt="" />
                </div>
                <h4>Online Doctor Consultations</h4>
                <h6>Book Doctor Appointment Online</h6>
              </div>
            </Link>
            <Link to="/labs" onClick={() => window.scrollTo(0, 100)}>
              <div className="service-provide-cart service-provide-cart-2">
                <div className="aboutus-icon">
                  <img src={labIcon} alt="" />
                </div>
                <h4>Lab Tests</h4>
                <h6>Get Lab Test Done at Your Convenience</h6>
              </div>
            </Link>
          </div>
        </div>
        <div className="missionNVission-container container">
          <h1 className="my-4">Our Mission & Vision</h1>
          <div className="missionNVission-sideIMG">
            <img src={missionNVissionImg} alt="" />
          </div>
          <div className="missionNVission-card-container">
            <div className="missionNVission-card">
              <h4>Mission</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aspernatur quidem rerum, eligendi hic int deserunt quos earum
                dolorum. Quos quas optio inventore voluptatem a harum possimus
                architecto!
              </p>
            </div>
            <div className="missionNVission-card">
              <h4>Vision</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, dicta facere. corrupti minima placeat. Nisi quaerat
                iste ipsam adipisci cumque quasi illo ducimus necessitatibus et
                nescias autem delectus.
              </p>
            </div>
          </div>
          <div className="missionNVission-border"></div>
        </div>
        <div className="why-choose-armsflow-main">
          <h1>Why Choose Arms Flow?</h1>
          <div className="why-choose-armsflow-container">
            <div className="why-choose-armsflow-section">
              <div className="why-choose-armsflow-img-section">
                <img src={whyChooseUsImg} alt="" />
                <div className="why-choose-armsflow-img-border"></div>
              </div>
              <div className="why-choose-armsflow-benefits-section">
                <div className="why-choose-armsflow-benefits-card">
                  <div className="circle">
                    <h3>
                      <span>1</span>
                    </h3>
                  </div>
                  <p>Saves Your Time</p>
                </div>
                <div className="why-choose-armsflow-benefits-card">
                  <div className="circle">
                    <h3>
                      <span>2</span>
                    </h3>
                  </div>
                  <p>
                    Less Risk Of <br />
                    Transmission
                  </p>
                </div>
                <div className="why-choose-armsflow-benefits-card">
                  <div className="circle">
                    <h3>
                      <span>3</span>
                    </h3>
                  </div>
                  <p>
                    Talk to the Specialist At Your
                    <br /> Convenience
                  </p>
                </div>
                <div className="why-choose-armsflow-benefits-card">
                  <div className="circle">
                    <h3>
                      <span>4</span>
                    </h3>
                  </div>
                  <p>
                    100% Safe <br /> Consultation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contactUs-main">
          <div className="contactUs-Img-Section">
            <img src={contactUsImg} alt="" />
          </div>
          <div className="contactUs-info-Section">
            <h1>Contact Us</h1>
            <div className="contactUs-Info">
              <div className="contactUs-Info-content">
                <h3>Address</h3>
                <p>
                  Delhi Hospital <br /> #123, XYZ, New Delhi, 123456
                </p>
              </div>
              <div className="contactUs-Info-content">
                <h3>Phone No.</h3>
                <p>
                  {" "}
                  +91-123456789 <br /> +91-123456789
                </p>
              </div>
              <div className="contactUs-Info-content">
                <h3>Email</h3>
                <p>xyz@email.com</p>
              </div>
            </div>
          </div>
          <div className="contactUs-feedback-Section">
            <h3>Feedback</h3>
            <div className="contactUs-feedback-input">
              <div>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
