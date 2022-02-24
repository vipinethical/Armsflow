import React from "react";
import "./Doclanding.css";
import LabOnboarding1 from "../../assets/images/lab_onboarding_1.svg";
import registration from "../../assets/icons/registration.png";
import addFiles from "../../assets/icons/add-files.png";
import booking from "../../assets/icons/booking-confirmed.png";
import Registerbanner from "../../assets/images/Registerbanner.png";
import Arrow from "../../assets/icons/Arrow.png";

export default function Doclanding() {
  return (
    <div>
      <div className="imagebanner">
        <h2 className="welcome-heading">Welcome to Arms Flow</h2>
        <p className="text_style">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
          <br />
          fringilla congue sem porta. Diam morbi ac sed etiam lacus, nibh
          <br /> ipsum, quis tincidunt. Sagittis orci amet tempus egestas.
        </p>
        <button className="btn_explore">Explore More</button>
        <img src={LabOnboarding1} className="heading_img" />
      </div>
      <div className="working-div">
        <h2 className="works-heading">How It works</h2>
        <p className="text2">Everything you need to know</p>
        <div className="imgntext">
          <img src={registration} className="reg-img" />
          <img src={addFiles} className="add-img" />
          <img src={booking} className="book-img" />
          <img src={Arrow} className="arrow-1" />
          <img src={Arrow} className="arrow-2" />
          <p className="img_info">Register With Us</p>
          <p className="img_info">Complete Your Profile</p>
          <h6 className="img_info">
            Maintain all Patients & <br />
            Appointments List
          </h6>
        </div>
        <button className="btn-complete">Complete Profile</button>
      </div>
      <div className="bottom-banner">
        <div className="bottom_vw">
          <h2 className="bottom-heading">Register your Clinic with us</h2>
          <button className="btn-reg">Register</button>
          <img className="img-bottom" src={Registerbanner} />
        </div>
      </div>
    </div>
  );
}
