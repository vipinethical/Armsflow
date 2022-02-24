import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Search from "../../assets/icons/Search.svg";
import thyro from "../../assets/images/thyro-img.png";
import "./Labtest.scss";
import { Link } from "react-router-dom";

export default function Labtest() {
  return (
    <div>
      <div className="first-bar">
        <div className="back">
          <Link to="/labs">
            <ChevronLeftIcon style={{ fontSize: 30, cursor: "pointer" }} />
          </Link>
          <Link to="/labs">
            <h6 style={{ padding: 5, cursor: "pointer", color: "black" }}>
              Back
            </h6>
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
          <button className="btn-searchlab">
            <img src={Search} alt="" />
          </button>
        </div>
      </div>
      <div className="text-123">
        <div className="img-box1">
          <img src={thyro} alt="" />
        </div>

        <div className="card-text1">
          <h4>
            <strong>Test Name</strong>
          </h4>
          <br />

          <div className="asfi">ASFI Registered </div>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <span>10 Reviews</span>
          <br />
          <br />
          <span>Lab timming : 10 am - 3 pm</span>
          <br />
          <span>Monday - Saturday</span>
        </div>
        <div className="card-text2">
          <br />
          <br /> <h6>Rs 500</h6>
          <br />
          <Link to="/labappointment" onClick={() => window.scrollTo(0, 0)}>
            <button className="btn-22"> Book Now</button>
          </Link>
        </div>
      </div>
      <div className="box-333">
        <div className="img-box1">
          <img src={thyro} alt="" />
        </div>

        <div className="card-text1">
          <h4>
            <strong>Test Name</strong>
          </h4>
          <br />

          <div className="asfi">ASFI Registered </div>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <span>10 Reviews</span>
          <br />
          <br />
          <span>Lab timming : 10 am - 3 pm</span>
          <br />
          <span>Monday - Saturday</span>
        </div>
        <div className="card-text2">
          <br />
          <br /> <h6>Rs 500</h6>
          <br />
          <Link to="/labappointment" onClick={() => window.scrollTo(0, 0)}>
            <button className="btn-22"> Book Now</button>
          </Link>
        </div>
      </div>
      <div className="box-444">
        <div className="img-box1">
          <img src={thyro} alt="" />
        </div>

        <div className="card-text1">
          <h4>
            <strong>Test Name</strong>
          </h4>
          <br />

          <div className="asfi">ASFI Registered </div>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <span>10 Reviews</span>
          <br />
          <br />
          <span>Lab timming : 10 am - 3 pm</span>
          <br />
          <span>Monday - Saturday</span>
        </div>
        <div className="card-text2">
          <br />
          <br /> <h6>Rs 500</h6>
          <br />
          <Link to="/labappointment" onClick={() => window.scrollTo(0, 0)}>
            <button className="btn-22">Book Now</button>
          </Link>
        </div>
      </div>
      <div className="box-555">
        <div className="img-box1">
          <img src={thyro} alt="" />
        </div>

        <div className="card-text1">
          <h4>
            <strong>PACKAGE</strong>
          </h4>
          <br />

          <div className="asfi">ASFI Registered </div>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <span>10 Reviews</span>
          <br />
          <br />
          <span>Lab timming : 10 am - 3 pm</span>
          <br />
          <span>Monday - Saturday</span>
        </div>
        <div className="card-text2">
          <br />
          <br /> <h6>Rs 500</h6>
          <br />
          <Link to="/labappointment" onClick={() => window.scrollTo(0, 0)}>
            <button className="btn-22"> Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
