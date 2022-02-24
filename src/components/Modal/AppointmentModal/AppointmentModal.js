import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const AppointmentModal = ({ appointmentIsOpen, setAppointmentIsOpen }) => {
  return (
    <div>
      <Modal isOpen={appointmentIsOpen} className="main234">
        <form className="form-card">
          <div className="plus1">
            <span onClick={() => setAppointmentIsOpen(false)}>+</span>
          </div>
          <h1>Make an Appointment</h1>
          <input type="text" name="name" placeholder="Full Name *" required />
          <input type="email" name="email" placeholder="Email *" required />
          <input type="date" name="date" placeholder="Date *" />
          <select name="mode" id="mode" class="time-drop">
            <option value="video">Select Time</option>
            <option value="video">8:30 am</option>
            <option value="audio">9:00 am</option>
            <option value="clinic">9:30 am</option>
            <option value="home">10:30 am</option>
            <option value="hospital">11:00 am</option>
            <option value="video">11:30 am</option>
            <option value="audio">12:00 am</option>
            <option value="clinic">12:30 am</option>
            <option value="home">1:00 pm</option>
            <option value="hospital">1:30 pm</option>
          </select>

          <select name="mode" id="mode" class="location-drop">
            <option value="null">Mode of Consultantion</option>
            <option value="video">Video Call</option>
            <option value="audio">Audio Call</option>
            <option value="clinic">Clinic Visit</option>
          </select>
          <input type="textarea" placeholder=" Your Message" name="message" />
          <h6>We'll never share your details with anyone else.</h6>
          <Link to="/register" className="btn23">
            Book Appointment
          </Link>
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentModal;
