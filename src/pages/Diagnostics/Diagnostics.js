import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Link, useHistory } from "react-router-dom";
import LabOnboarding1 from "../../assets/images/lab_onboarding_1.svg";
import LabOnboarding2 from "../../assets/images/lab_onboarding_2.svg";
import Lalpath from "../../assets/images/Lalpath.png";
import Pathkind from "../../assets/images/Pathkind.png";
import SRL from "../../assets/images/SRL.png";
import ThyrocareLaboratory from "../../assets/images/Thyrocare_Laboratory.png";
import "./Diagnostics.scss";

export default function Diagnostics() {
  let history = useHistory();

  function handleClick() {
    history.push("/labtest");
  }

  return (
    <div className="lab-onboarding">
      <div className="container-padding labs">
        <div>
          <h2>Lab test at the comfort of your home</h2>
          <ol className="list">
            <li>Home sample Collection</li>
            <li>Certified Labs</li>
            <li>Secure Payments</li>
          </ol>
        </div>
        <figure>
          <img src={LabOnboarding1} alt="logo" />
        </figure>
      </div>
      <div className="container-padding popular-labs">
        <h2>Popular Laboratories</h2>
        <section>
          <ChevronLeftIcon />
          <div onClick={handleClick} className="labs-card">
            <img src={ThyrocareLaboratory} alt="Dr Ramesh Sharma" />
            <h3>Thyrocare Laboratory</h3>
          </div>
          <div onClick={handleClick} className="labs-card">
            <img src={Lalpath} alt="Dr Ramesh Sharma" />
            <h3>Dr. Lalpath Labs</h3>
          </div>
          <div onClick={handleClick} className="labs-card">
            <img src={SRL} alt="Dr Ramesh Sharma" />
            <h3>SRL Diagonstics</h3>
          </div>
          <div onClick={handleClick} className="labs-card">
            <img src={Pathkind} alt="Dr Ramesh Sharma" />
            <h3>Pathkind Labs</h3>
          </div>
          <ChevronRightIcon />
        </section>
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
