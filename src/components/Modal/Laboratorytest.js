import React from "react";
import Modal from "react-modal";
import "./Testpackage.css";
import CloseIcon from "@material-ui/icons/Close";

export default function Laboratorytest() {
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
            left: "150px",
            right: "150px",
            bottom: "150px",
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
          Add Laboratory Test <CloseIcon className="Close_icon" />
        </h3>
        <form>
          <h6>
            <label className="label">Test Name </label>
            <input type="text" className="inputholder" />
          </h6>
          <h6>
            <label className="label">Parameters Covered</label>
            <input type="text" className="inputholder" />
          </h6>
          <h6>
            <label className="label">Report Availability </label>
            <input type="text" className="inputholder" />
          </h6>
          <h6>
            <label className="label">Category </label>
            <input type="text" className="inputholder" />
          </h6>
          <h6>
            <label className="label">Other Information </label>
            <input type="text" className="inputholder_other" />
          </h6>
          <button className="savebtn">Save</button>
        </form>
      </Modal>
    </div>
  );
}
