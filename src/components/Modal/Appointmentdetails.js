import React from "react";
import Modal from "react-modal";
import "./Appointmentdetails.css";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";

export default function Appointmentdetails() {
  return (
    <div>
      <Modal
        isOpen={true}
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
          Appointment Details <CloseIcon style={{ marginLeft: 850 }} />
        </h3>
        <div className="detailsdiv">
          <div className="img-div">
            <EditIcon className="edit-icon" />
          </div>
          <div className="first-div">
            <p>
              Patient Name:
              <span style={{ color: "gray", fontSize: 15, marginLeft: 10 }}>
                Ramesh S
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
                In-Lab
              </span>
            </p>
            <div className="test-details">
              <h6>Test Details</h6>
              <p>
                Test Name :
                <span style={{ color: "gray", fontSize: 15, marginLeft: 10 }}>
                  Blood Test
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
                H. No 123, Xyz Lane, Area Name, New Delhi
              </span>
            </p>
            <p>
              Contact :
              <span style={{ color: "gray", fontSize: 15, marginLeft: 10 }}>
                9876543210
              </span>
            </p>
            <p>
              Payment Mode :
              <span style={{ color: "gray", fontSize: 15, marginLeft: 10 }}>
                Online
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
                </span>
              </p>
            </div>
          </div>
          <div className="first-div">
            <p>
              Appointment Date :
              <span style={{ color: "gray", fontSize: 15, marginLeft: 10 }}>
                June 1, 2021
              </span>
            </p>
            <p>
              Appointment Time :
              <span style={{ color: "gray", fontSize: 15, marginLeft: 10 }}>
                8:00 A.M
              </span>
            </p>
          </div>
        </div>
        <button className="btn-re">Reschedule</button>
        <button className="btn-cancel">Cancel</button>
      </Modal>
    </div>
  );
}
