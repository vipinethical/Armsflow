import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useAuth } from "../../../lib/auth";
import "./Appointmentdetails.css";

export default function Appointmentdetails({ modalOpen, setModalOpen, appointmentDetailId }) {

  const { user, setUser } = useAuth();
  const [appointmentDetails, setAppointmentDetails] = useState([]);

  console.log(appointmentDetailId, 'userId', user.userId);

  useEffect(() => {
    axios.get(`http://localhost:7000/${user.userType}/${user.userId}/appointments/${appointmentDetailId}`)
      .then(res => {
        console.log(res.data)
        setAppointmentDetails(...res.data.data)
      })
      .catch(err => console.log(err))
  }, [appointmentDetailId])


  return (
    <>
      <Modal
        isOpen={modalOpen}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          },
          content: {
            position: "absolute",
            top: "90px",
            left: "90px",
            right: "120px",
            bottom: "100px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "60px",
          },
        }}
      >
        <h3 style={{ marginBottom: 50 }}>
          Appointment Details <CloseIcon onClick={() => setModalOpen(false)} style={{ marginLeft: 850 }} />
        </h3>
        <div className="detailsdiv">
          <div className="img-div">
            <EditIcon className="edit-icon" />
          </div>
          <div className="first-div">
            <p>
              Patient Name:
              <span style={{ color: "gray", fontSize: 15, marginLeft: 10 }}>
                {appointmentDetails?.Patient_Name}
              </span>
            </p>
            <p>
              Age:
              <span style={{ color: "gray", fontSize: 15, marginLeft: 10 }}>
                35
              </span>
            </p>
            <p>
              Gender:
              <span style={{ color: "gray", fontSize: 15, marginLeft: 10 }}>
                Male
              </span>
            </p>
            <p>
              Appointment At :
              <span style={{ color: "gray", fontSize: 15, marginLeft: 10 }}>
                {appointmentDetails?.Appointment_at}
              </span>
            </p>
            <div className="test-details">
              <h6>Test Details</h6>
              <p>
                Test Name :
                <span style={{ color: "gray", fontSize: 15, marginLeft: 10 }}>
                  {appointmentDetails?.Test_name}
                </span>
              </p>
              <p>
                Quantity :
                <span style={{ color: "gray", fontSize: 15, marginLeft: 10 }}>
                  Single
                </span>
              </p>
              <p>
                Package :
                <span style={{ color: "gray", fontSize: 15, marginLeft: 10 }}>
                  -----
                </span>
              </p>
            </div>
          </div>
          <div className="first-div">
            <p>
              Address :
              <span style={{ color: "gray", fontSize: 15, marginLeft: 10 }}>
                {appointmentDetails?.Address}
              </span>
            </p>
            <p>
              Contact :
              <span style={{ color: "gray", fontSize: 15, marginLeft: 10 }}>
                {appointmentDetails?.Contact_no}
              </span>
            </p>
            <p>
              Payment Mode :
              <span style={{ color: "gray", fontSize: 15, marginLeft: 10 }}>
                {appointmentDetails?.Payment_type}
              </span>
            </p>
            <div className="test-details">
              <p style={{ marginTop: 90 }}>
                Payment Mode :
                <span style={{ color: "gray", fontSize: 15, marginLeft: 10 }}>
                  In-Person
                </span>
              </p>
              <p>
                Payment Status :
                <span style={{ color: "gray", fontSize: 15, marginLeft: 10 }}>
                  Pending
                </span>
              </p>
              <p>
                Fees :
                <span style={{ color: "gray", fontSize: 15, marginLeft: 10 }}>
                  Rs 500
                  {appointmentDetails?.Cost}
                </span>
              </p>
            </div>
          </div>
          <div className="first-div">
            <p>
              Appointment Date :
              <span style={{ color: "gray", fontSize: 15, marginLeft: 10 }}>
                {appointmentDetails?.Appointment_Date}
              </span>
            </p>
            <p>
              Appointment Time :
              <span style={{ color: "gray", fontSize: 15, marginLeft: 10 }}>
                {appointmentDetails?.Appointment_time}
              </span>
            </p>
          </div>
        </div>
        <button className="btn-re">Reschedule</button>
        <button className="btn-cancel" onClick={() => setModalOpen(false)}>Cancel</button>
      </Modal>
    </>
  );
}
