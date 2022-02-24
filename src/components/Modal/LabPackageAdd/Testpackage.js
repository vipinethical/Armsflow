import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { useParams } from "react-router-dom";
import "./Testpackage.css";

export default function Testpackage({ packageModal, setPackageModal }) {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { id } = useParams();

  const config = {
    headers: {
      "Content-Type": "application/json"
    },
    withCredentials: true
  }

  const onSubmit = data => {
    axios.post(`http://localhost:7000/lab/${id}/insertpackage`, {
      packagename: data.package_name,
      parameterscovered: data.parameters_covered,
      category: data.category,
      reportavailabilty: data.report_availablity,
      cost: data.cost,
      otherinfo: data.other_information,
      labid: id
    }, config)
      .then(res => {
        console.log(res.data)
        res.data.status === 'details saved' && setPackageModal(false)
      })
      .catch(err => console.log(err))
  };

  return (
    <div>
      <Modal
        isOpen={packageModal}
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
          Add Test Packages <CloseIcon onClick={() => setPackageModal(false)} className="Close_icon" />
        </h3>
        <form onSubmit={handleSubmit(onSubmit)} >
          <h6>
            <label className="label">Package Name </label>
            <input type="text"  {...register("package_name")} className="inputholder" />
          </h6>
          <h6>
            <label className="label">
              Add Test
              <AddIcon />
            </label>
            <input type="text"  {...register("add_test")} className="inputholder" />
            <input type="text"  {...register("add_test2")} className="inputholder_add" />
          </h6>
          <h6>
            <label className="label">Parameters Covered </label>
            <input type="text"  {...register("parameters_covered")} className="inputholder" />
          </h6>
          <h6>
            <label className="label">Category </label>
            <input type="text"  {...register("category")} className="inputholder" />
          </h6>
          <h6>
            <label className="label">Report Availability </label>
            <input type="text"  {...register("report_availablity")} className="inputholder" />
          </h6>
          <h6>
            <label className="label">Cost </label>
            <input type="text"  {...register("cost")} className="inputholder" />
          </h6>
          <h6>
            <label className="label">Other Information </label>
            <input type="text"  {...register("other_information")} className="inputholder_other" />
          </h6>
          <button type='submit' className="savebtn">Save</button>
        </form>
      </Modal>
    </div>
  );
}
