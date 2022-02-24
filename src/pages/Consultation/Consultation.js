import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Ayurveda from "../../assets/icons/Ayurveda.svg";
import Dermatology from "../../assets/icons/Dermatology.svg";
import digitalprescription from "../../assets/icons/digitalprescription.svg";
import easyFollowup from "../../assets/icons/easyFollowup.svg";
import ENT from "../../assets/icons/ENT.svg";
import Nutrition from "../../assets/icons/Nutrition.svg";
import Orthopedics from "../../assets/icons/Orthopedics.svg";
import Pediatrics from "../../assets/icons/Pediatrics.svg";
import Physician from "../../assets/icons/Physician.svg";
import Physiotherapy from "../../assets/icons/Physiotherapy.svg";
import Psychiatrist from "../../assets/icons/Psychiatrist.svg";
import Search from "../../assets/icons/Search.svg";
import verifiedDoctors from "../../assets/icons/verifiedDoctors.svg";
import bannerImage from "../../assets/images/bannerImage.png";
import Registerbanner from "../../assets/images/Registerbanner.png";
import "./Consultation.css";
import "./Consultation.scss";

function Consultation() {
  let history = useHistory();

  function handleClick() {
    history.push("/doctorslist");
  }

  return (
    <div>
      <div className="topbanner">
        <div className="lfvw">
          <h1 className="heading">Get started with Arms Flow</h1>
          <p className="textstyling">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            aliquam tincidunt tincidunt habitant dolor condimentum euismod morbi
            pretium. At consequat viverra fringilla non bibendum arcu a etiam
            feugiat.
          </p>
        </div>
        <div className="rtvw">
          <img src={bannerImage} alt="" />
        </div>
      </div>
      <div className="banner2">
        <img src={verifiedDoctors} alt="" className="icon" />
        <h5 className="icontext">Verified Doctors</h5>
        <img src={digitalprescription} alt="" className="icon" />
        <h5 className="icontext">Digital Prescriptions</h5>
        <img src={easyFollowup} alt="" className="icon" />
        <h5 className="icontext">Easy Followup</h5>
      </div>
      <div className="body">
        <div className="bodylfvw">
          <h1 className="heading">Our Specialists</h1>
          <h6>
            Find the Best doctors in Your <br /> Location
          </h6>
        </div>
        <div className="bodyrtvw">
          <div className="searchbar">
            {/* <button className="btnall">All</button> */}
            <input placeholder="Search" className="search" />
            <select className="selectbox" placeholder="Category">
              <option value="0">Category</option>
              <option value="1">Nutritionist</option>
              <option value="2">Orthopedics</option>
              <option value="3">Cardiologist</option>
              <option value="4">Ophthalmologist</option>
              <option value="5">Diabetology</option>
              <option value="6">Ayurveda</option>
              <option value="7">Consultant Physician</option>
              <option value="8">Gynecology</option>
              <option value="9">Pediatrics</option>
              <option value="10">Dermatology</option>
              <option value="11">Physiotherapy</option>
              <option value="12">Mental Wellness</option>
              <option value="13">Ent</option>
              <option value="14">Gastroenterol</option>
              <option value="15">Urologist</option>
              <option value="16">Homeopathy</option>
              <option value="17">General Medicine</option>
            </select>

            <button className="btnsearch">
              <img src={Search} alt="" />
            </button>
          </div>
          <div className="categories">
            <div className="row1">
              <Box_component Icon={Physician} Text={"Consultant Physician"} />
              <Box_component Icon={Orthopedics} Text={"Orthopedics"} />
              <Box_component Icon={Nutrition} Text={"Nutrition"} />
            </div>
            <div className="row1">
              <Box_component Icon={ENT} Text={"ENT"} />
              <Box_component Icon={Pediatrics} Text={"Pediatrics"} />
              <Box_component Icon={Dermatology} Text={"Dermatology"} />
            </div>
            <div className="row1">
              <Box_component Icon={Physiotherapy} Text={"Physiotherapist"} />
              <Box_component Icon={Psychiatrist} Text={"Psychiatrist"} />
              <Box_component Icon={Ayurveda} Text={"Ayurveda"} />
            </div>
          </div>
        </div>
      </div>
      <div className="bottombanner">
        <div className="imagediv">
          <img src={Registerbanner} className="registerimg" alt="" />
        </div>
        <div className="textdiv">
          <h2 className="registerheading">Register Your Clinic With Us</h2>
          <button className="registerbtn">Register</button>
        </div>
      </div>
    </div>
  );
}

const Box_component = ({ Icon, Text }) => {
  const [isShown, setIsShown] = useState(false);

  let history = useHistory();

  function handleClick() {
    history.push("/doctorslist");
    window.scrollTo(0, 0);
  }

  return (
    <div
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      onClick={handleClick}
      className="box"
    >
      <img src={Icon} className="icon_design" alt="" />
      <h5 className="box_text">{Text}</h5>
      {isShown && (
        <div className="box2">
          <h5 className="box_text2">{Text}</h5>
          <button className="btnviewdoc">View Doctors</button>
        </div>
      )}
    </div>
  );
};

export default Consultation;
