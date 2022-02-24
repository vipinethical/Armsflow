import React from "react";
import "./LaboratristLandingpage.scss";
import { Link, useHistory } from "react-router-dom";
import LabOnboarding1 from "../../assets/images/lab_onboarding_1.svg";
import LabOnboarding2 from "../../assets/images/lab_onboarding_2.svg";
import Addfiles from "../../assets/icons/add-files_lab.png";
import Bookingconfirm from "../../assets/icons/booking-confirmed_lab.png";
import Registration_lab from "../../assets/icons/registration_lab.png";
import Vectorlab from "../../assets/icons/Vectorlab.png";

export default function LaboratristLandingpage() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }
  return (
    <div className="lab-onboarding">
      <div className="container-padding labs">
        <div>
          <h2>Welcome to Arms Flow</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
            <br />
            fringilla congue sem porta. Diam morbi ac sed etiam lacus, nibh
            <br />
            ipsum, quis tincidunt. Sagittis orci amet tempus egestas.
          </p>
          <button className="btn_explore">Explore more</button>
        </div>
        <figure>
          <img src={LabOnboarding1} alt="logo" />
        </figure>
      </div>
      <div className="container-padding howitworks">
        <h2>How it Works</h2>
        <p>Everthing you need to know</p>
        <section>
          <img src={Vectorlab} className="img_vector" />
          <img src={Vectorlab} className="img_vector2" />
          <div className="img-textinfo">
            <img src={Registration_lab} alt="" />
            <h6>Register With us</h6>
          </div>
          <div className="img-textinfo">
            <img src={Addfiles} alt="" />
            <h6>
              Add as many Test & Test <br /> Packages
            </h6>
          </div>
          <div className="img-textinfo">
            <img src={Bookingconfirm} alt="" />
            <h6>
              Maintain all Patients list & Test
              <br /> Appointments
            </h6>
          </div>
        </section>
        <button className="btn_addtest">Add Test</button>
      </div>
      <div className="container-padding labs labs-register">
        <figure>
          <img src={LabOnboarding2} alt="logo" />
        </figure>
        <section>
          <div>
            <h2>Register your Laboratory with us</h2>
            <Link to="/register" className="btn btn-light white-btn">
              Register
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
