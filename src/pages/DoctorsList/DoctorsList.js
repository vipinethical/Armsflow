import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import Search from "../../assets/icons/Search.svg";
import Verified from "../../assets/icons/Verified.png";
import DoctorAvatar from "../../assets/images/sammy-williams-38Un6Oi5beE-unsplash.jpg";
import AppointmentModal from "../../components/Modal/AppointmentModal/AppointmentModal";
import "./DoctorsList.css";
import { Link } from "react-router-dom";

export default function Booknow() {
  return (
    <div>
      <div className="srchbar">
        <div className="back">
          <Link to="/consultation">
            <ChevronLeftIcon style={{ fontSize: 30, cursor: "pointer" }} />
          </Link>
          <Link to="/consultation">
            <h6 style={{ padding: 5, cursor: "pointer" }}>Back</h6>
          </Link>
        </div>
        <div className="searchbtns">
          <input placeholder="Search" className="srch" />
          <select className="slctbox" placeholder="Location">
            <option value="0" disabled>
              Location
            </option>
            <option value="1">Delhi</option>
            <option value="2">Punjab</option>
            <option value="3">Jammu and Kashmir</option>
            <option value="4">Haryana</option>
            <option value="5">Rajasthan</option>
            <option value="6">Gujarat</option>
            <option value="7">Mumbai</option>
            <option value="8">Karnataka</option>
            <option value="9">Tamil Nadu</option>
            <option value="10">West Bengal</option>
          </select>
          <button className="btn-search">
            <img src={Search} />
          </button>
        </div>
      </div>
      <div className="main">
        <div className="body-container">
          <div className="filterbox">
            <form>
              <div className="sort">
                <h5>Sort by</h5>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    class="form-check-label"
                    for="flexRadioDefault1"
                    style={{ marginLeft: 10 }}
                  >
                    View All
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    class="form-check-label"
                    for="flexRadioDefault1"
                    style={{ marginLeft: 10 }}
                  >
                    Available
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    class="form-check-label"
                    for="flexRadioDefault1"
                    style={{ marginLeft: 10 }}
                  >
                    Near By
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    class="form-check-label"
                    for="flexRadioDefault1"
                    style={{ marginLeft: 10 }}
                  >
                    Experience
                  </label>
                </div>
              </div>
              <div className="filter">
                <h5>Filter</h5>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault1"
                    id="flexRadioDefault2"
                  />
                  <label
                    class="form-check-label"
                    for="flexRadioDefault2"
                    style={{ marginLeft: 10, fontSize: 17 }}
                  >
                    Price : High to Low
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault1"
                    id="flexRadioDefault2"
                  />
                  <label
                    class="form-check-label"
                    for="flexRadioDefault2"
                    style={{ marginLeft: 10, fontSize: 17 }}
                  >
                    Price : Low to High
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault1"
                    id="flexRadioDefault1"
                  />
                  <label
                    class="form-check-label"
                    for="flexRadioDefault1"
                    style={{ marginLeft: 10, fontSize: 17 }}
                  >
                    Male
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault1"
                    id="flexRadioDefault1"
                  />
                  <label
                    class="form-check-label"
                    for="flexRadioDefault1"
                    style={{ marginLeft: 10, fontSize: 17 }}
                  >
                    Female
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault1"
                    id="flexRadioDefault1"
                  />
                  <label
                    class="form-check-label"
                    for="flexRadioDefault1"
                    style={{ marginLeft: 10, fontSize: 17 }}
                  >
                    4.5 Rating
                  </label>
                </div>
              </div>
              <div className="speciality">
                <h5> Speciality</h5>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault2"
                    id="flexRadioDefault1"
                  />
                  <label
                    class="form-check-label"
                    for="flexRadioDefault1"
                    style={{ marginLeft: 10, fontSize: 17 }}
                  >
                    Nutritionist
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault2"
                    id="flexRadioDefault1"
                  />
                  <label
                    class="form-check-label"
                    for="flexRadioDefault1"
                    style={{ marginLeft: 10, fontSize: 17 }}
                  >
                    Orthopedics
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault2"
                    id="flexRadioDefault1"
                  />
                  <label
                    class="form-check-label"
                    for="flexRadioDefault1"
                    style={{ marginLeft: 10, fontSize: 17 }}
                  >
                    Cardiologist
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault2"
                    id="flexRadioDefault1"
                  />
                  <label
                    class="form-check-label"
                    for="flexRadioDefault1"
                    style={{ marginLeft: 10, fontSize: 17 }}
                  >
                    Ophthalmologist
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault2"
                    id="flexRadioDefault1"
                  />
                  <label
                    class="form-check-label"
                    for="flexRadioDefault1"
                    style={{ marginLeft: 10, fontSize: 17 }}
                  >
                    Diabetology
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault2"
                    id="flexRadioDefault1"
                  />
                  <label
                    class="form-check-label"
                    for="flexRadioDefault1"
                    style={{ marginLeft: 10, fontSize: 17 }}
                  >
                    Ayurveda
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault2"
                    id="flexRadioDefault1"
                  />
                  <label
                    class="form-check-label"
                    for="flexRadioDefault1"
                    style={{ marginLeft: 10, fontSize: 17 }}
                  >
                    Consultant Physician
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault2"
                    id="flexRadioDefault1"
                  />
                  <label
                    class="form-check-label"
                    for="flexRadioDefault1"
                    style={{ marginLeft: 10, fontSize: 17 }}
                  >
                    Gynecology
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault2"
                    id="flexRadioDefault1"
                  />
                  <label
                    class="form-check-label"
                    for="flexRadioDefault1"
                    style={{ marginLeft: 10, fontSize: 17 }}
                  >
                    Pediatrics
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault2"
                    id="flexRadioDefault1"
                  />
                  <label
                    class="form-check-label"
                    for="flexRadioDefault1"
                    style={{ marginLeft: 10, fontSize: 17 }}
                  >
                    Dermatology
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault2"
                    id="flexRadioDefault1"
                  />
                  <label
                    class="form-check-label"
                    for="flexRadioDefault1"
                    style={{ marginLeft: 10, fontSize: 17 }}
                  >
                    Physiotherapy
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault2"
                    id="flexRadioDefault1"
                  />
                  <label
                    class="form-check-label"
                    for="flexRadioDefault1"
                    style={{ marginLeft: 10, fontSize: 17 }}
                  >
                    Mental Wellness
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault2"
                    id="flexRadioDefault1"
                  />
                  <label
                    class="form-check-label"
                    for="flexRadioDefault1"
                    style={{ marginLeft: 10, fontSize: 17 }}
                  >
                    ENT
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault2"
                    id="flexRadioDefault1"
                  />
                  <label
                    class="form-check-label"
                    for="flexRadioDefault1"
                    style={{ marginLeft: 10, fontSize: 17 }}
                  >
                    Gastroenterol
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault2"
                    id="flexRadioDefault1"
                  />
                  <label
                    class="form-check-label"
                    for="flexRadioDefault1"
                    style={{ marginLeft: 10, fontSize: 17 }}
                  >
                    Urologist
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault2"
                    id="flexRadioDefault1"
                  />
                  <label
                    class="form-check-label"
                    for="flexRadioDefault1"
                    style={{ marginLeft: 10, fontSize: 17 }}
                  >
                    Homeopathy
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault2"
                    id="flexRadioDefault1"
                  />
                  <label
                    class="form-check-label"
                    for="flexRadioDefault1"
                    style={{ marginLeft: 10, fontSize: 17 }}
                  >
                    General Medicine
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div className="doclist">
            <Doc_div />
            <Doc_div />
            <Doc_div />
            <Doc_div />
            <Doc_div />
          </div>
        </div>
      </div>
    </div>
  );
}

const Doc_div = () => {
  const [appointmentIsOpen, setAppointmentIsOpen] = useState(false);

  let history = useHistory();

  function handleClick() {
    history.push("/doctorsdetails");
    window.scrollTo(0, 0);
  }
  return (
    <>
      <div className="doctor_div">
        <div className="img_div">
          <img src={DoctorAvatar} alt="Dr Ramesh Sharma" className="docimg" />
        </div>
        <div className="docinfo">
          <h3 className="Docname_styling">Dr Ramesh Sharma</h3>
          <h6 className="degreetext">BDS, MD Nutrition</h6>{" "}
          <p
            style={{
              paddingLeft: 20,
              fontfamily: "Montserrat",
              fontstyle: "normal",
              fontweight: 600,
              fontsize: 2,
              letterspacing: 0.2,
              color: "#8f8f8f",
            }}
          >
            10yrs Exp
          </p>
          <AiFillStar className="rating" />
          <AiFillStar className="rating" />
          <AiFillStar className="rating" />
          <AiFillStar className="rating" />
          <AiOutlineStar className="rating" />
          <span
            style={{
              paddingLeft: 20,
              fontfamily: "Montserrat",
              fontstyle: "normal",
              fontweight: 600,
              fontsize: 2,
              letterspacing: 0.2,
              color: "#8f8f8f",
            }}
          >
            10 Reviews
          </span>
          <br />
          <br />
          <p className="ptag">Monday-Saturday</p>
          <p className="ptag">Available Timing: 10 am-3 pm</p>
        </div>
        <div className="lastdiv">
          <div style={{ display: "flex" }}>
            <img src={Verified} style={{ height: 20, width: 20 }} />
            <p style={{ color: "#4dc025", marginRight: 20 }}>Verified</p>
          </div>

          <h4 className="price_style">Rs 500</h4>
          <button onClick={handleClick} className="btnprofile">
            {" "}
            View Profile
          </button>
          <button
            onClick={() => setAppointmentIsOpen(true)}
            className="btnbook"
          >
            {" "}
            Book Appointment
          </button>
        </div>
      </div>
      <AppointmentModal
        appointmentIsOpen={appointmentIsOpen}
        setAppointmentIsOpen={setAppointmentIsOpen}
      ></AppointmentModal>
    </>
  );
};
