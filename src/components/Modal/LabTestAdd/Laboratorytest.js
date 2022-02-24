import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { useParams } from "react-router-dom";
import "../LabPackageAdd/Testpackage.css";

export default function Laboratorytest({ testModal, setTestModal }) {

  const { id } = useParams();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();


  const config = {
    headers: {
      "Content-Type": "application/json"
    },
    withCredentials: true
  }


  const onSubmit = data => {
    console.log(data);
    axios.post(`http://localhost:7000/lab/${id}/inserttest`, {
      testname: data.test_name,
      parameterscovered: data.parameters_coverd,
      category: data.category,
      reportavailabilty: data.report_availability,
      otherinfo: data.other_information,
      cost: data.cost,
      labid: id
    }, config)
      .then(res => {
        console.log(res.data)
        res.data.status === 'details saved' && setTestModal(false)
      })
      .catch(err => console.log(err))
  };

  return (
    <div>
      <Modal
        isOpen={testModal}
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
          Add Laboratory Test <CloseIcon onClick={() => setTestModal(false)} className="Close_icon" />
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h6>
            <label className="label">Test Name </label>
            <input type="text" {...register("test_name")} className="inputholder" />
          </h6>
          <h6>
            <label className="label">Parameters Covered</label>
            <input type="text" {...register("parameters_coverd")} className="inputholder" />
          </h6>
          <h6>
            <label className="label">Report Availability </label>
            <input type="text" {...register("report_availability")} className="inputholder" />
          </h6>
          <h6>
            <label className="label">Category </label>
            <input type="text" {...register("category")} className="inputholder" />
          </h6>
          <h6>
            <label className="label">Other Information </label>
            <input type="text" {...register("other_information")} className="inputholder_other" />
          </h6>
          <button type='submit' className="savebtn">Save</button>
        </form>
      </Modal>
    </div>
  );
}
