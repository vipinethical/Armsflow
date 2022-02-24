import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import verified from "../../assets/icons/verified.svg";
import image2 from "../../assets/images/doc1.png";
import AppointmentModal from "../../components/Modal/AppointmentModal/AppointmentModal";
import "./DoctorDetails.scss";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Link } from "react-router-dom";

export default function Docprofile() {
  const [appointmentIsOpen, setAppointmentIsOpen] = useState(false);
  return (
    <div>
      <div className="doctor-detail">
        <div className="back-223">
          <Link to="/doctorslist">
            <ChevronLeftIcon style={{ fontSize: 30, cursor: "pointer" }} />
          </Link>
          <Link to="/doctorslist">
            <h6 style={{ margin: 10, cursor: "pointer" }}>Back</h6>
          </Link>
        </div>
        <div className="box-11">
          <div className="plus1">
            <a href="#" onClick={() => setAppointmentIsOpen(false)}>
              +
            </a>
          </div>

          <img src={image2} alt="" className="image1"></img>
          <div className="card-text1">
            <h4>
              <strong>Dr Ramesh Sharma</strong>
            </h4>
            <h6>35 &nbsp; &nbsp; &nbsp; Male &nbsp; &nbsp; &nbsp; 10yrs Exp</h6>
            <p>
              BDS, MDS, Certificate of Oral Implantology, PGCE(Endodontics),
              PGCE(Endodontics), FICOI Dentist, Cosmetic/Aesthetic Dentist,
              Dental Surgeon
            </p>
            <AiFillStar style={{ fontSize: 25, color: "#FFBB2C" }} />
            <AiFillStar style={{ fontSize: 25, color: "#FFBB2C" }} />
            <AiFillStar style={{ fontSize: 25, color: "#FFBB2C" }} />
            <AiFillStar style={{ fontSize: 25, color: "#FFBB2C" }} />
            <AiOutlineStar style={{ fontSize: 25, color: "#FFBB2C" }} />
            <span>10 Reviews</span>
            <br />
            <br />
          </div>
          <div className="card-text00">
            <img src={verified} alt=""></img> <span>Verified</span>
            <br />
            <br /> <h6>Rs 500</h6>
            <p className="btn55">Online Payments Available</p>
            <button
              className="btn22"
              onClick={() => setAppointmentIsOpen(true)}
            >
              Book Appointment
            </button>
            <AppointmentModal
              appointmentIsOpen={appointmentIsOpen}
              setAppointmentIsOpen={setAppointmentIsOpen}
            ></AppointmentModal>
          </div>
        </div>

        <h6 className="detail">Detail Information</h6>
        <div className="table-11">
          <table>
            <tr>
              <th scope="row">Specialist </th>
              <td>Dental Profile</td>
            </tr>
            <tr>
              <th scope="row">Clinic Address</th>
              <td>JP Nagar 5 Phase, Delhi</td>
            </tr>
            <tr>
              <th scope="row">Hospital Address</th>
              <td>JP Nagar 5 Phase, Banglore</td>
            </tr>
            <tr>
              <th scope="row">Appointment Type</th>
              <td>Video call, Audio Call, Hospital Visit, Clinic Visit</td>
            </tr>
            <tr>
              <th scope="row">Availabile Time</th>
              <td>
                Mon, Wed, Fri&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
                &nbsp; &nbsp;&nbsp; &nbsp; Sat-Sun <br />
                03:00 PM - 06:00 PM&nbsp; &nbsp; &nbsp; 08:00 AM - 12:00 PM
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
