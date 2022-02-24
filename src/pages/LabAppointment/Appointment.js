import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Address from "../../assets/icons/address.png";
import Cart from "../../assets/icons/Cart.png";
import Contact from "../../assets/icons/Contact.png";
import Info from "../../assets/icons/Info.png";
import Search from "../../assets/icons/Search.svg";
import Timing from "../../assets/icons/Timing.png";
import Vector from "../../assets/icons/Vector.png";
import ThyrocareLaboratory from "../../assets/images/Thyrocare_Laboratory.png";
import "./Appointment.css";
import { Link } from "react-router-dom";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import DatePicker from "../../components/Datepicker/Datepicker";

export default function Appointment() {
  const selectedDay = (val) => {
    console.log(val);
  };
  const [count, setCount] = useState(1);
  return (
    <div>
      <div className="searchbar_Lab">
        <div className="back_Lab">
          <Link to="/labtest">
            <ChevronLeftIcon style={{ fontSize: 30, cursor: "pointer" }} />
          </Link>
          <Link to="/labtest">
            <h6 style={{ padding: 5, cursor: "pointer" }}>Back</h6>
          </Link>
        </div>
        <div className="searchbtns_Lab">
          <input placeholder="Search" className="srch_Lab" />
          <select className="slctbox_Lab" placeholder="Location">
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
          <button className="btn-search_Lab">
            <img src={Search} alt="" />
          </button>
          <button className="cart_Lab">
            <img src={Cart} alt="" style={{ padding: 5 }} />
            Cart
          </button>
        </div>
      </div>
      <div className="info">
        <div className="info_box">
          <div className="lab_name">
            <img src={ThyrocareLaboratory} alt="" className="img_Lab" />
            <div className="name-rating">
              <h6>Thyrocare Laboratory</h6>
              <AiFillStar style={{ color: "var(--yellow)", margin: 2 }} />
              <AiFillStar style={{ color: "var(--yellow)", margin: 2 }} />
              <AiFillStar style={{ color: "var(--yellow)", margin: 2 }} />
              <AiFillStar style={{ color: "var(--yellow)", margin: 2 }} />
            </div>
          </div>
          <div className="lab_info">
            <h6>
              <img src={Address} alt="" className="icon_info" />
              Address : #123, XYZ, New Delhi, 123456
            </h6>
            <h6>
              <img src={Contact} alt="" className="icon_info" />
              Contact No : +91-23456789
            </h6>
            <h6>
              <img src={Timing} alt="" className="icon_info" />
              Offline timming :10 am - 3 pm
            </h6>
            <h6>
              <img src={Vector} alt="" className="icon_info" />
              Certified
            </h6>
          </div>
        </div>
        <div className="switchdiv">
          <input type="checkbox" />
        </div>
      </div>
      <div className="Test_Lab">
        <h5>Test</h5>
        <div className="Test_box">
          <div className="Test_name">
            <h5>THYROID PROFILE, TOTAL</h5>
          </div>
          <div className="Test_details">
            <h6>
              <img src={Info} alt="" className="img_info" />
              No Special Preparation Required
            </h6>
            <h6>
              <img src={Info} alt="" className="img_info" />3 Parameter(S)
              Covered
            </h6>
          </div>
          <div className="View_details">
            <p>+ View Details</p>
          </div>
          <div className="btns_test">
            <div className="quantity">
              <RemoveIcon
                fontSize="small"
                onClick={() => {
                  if (count <= 1) {
                    setCount(1);
                  } else {
                    setCount(count - 1);
                  }
                }}
              />
              <div className="addmore">{count}</div>
              <AddIcon fontSize="small" onClick={() => setCount(count + 1)} />
            </div>
            <button className="btn_price">Rs 500</button>
            <button className="btn_add">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="schedule">
        <h5>Schedule Appointment</h5>
        <div className="Test_box">
          <div className="Test_name">
            <h5>PickUp Date</h5>

            <div className="month_date">
              <DatePicker labelFormat={"MMMM"} getSelectedDay={selectedDay} />
            </div>
          </div>
          <div className="timing_lab">
            <h5>PickUp Time</h5>
            <div className="time_schedule">
              <button className="btn_time">8:00 am</button>
              <button className="btn_time">8:30 am</button>
              <button className="btn_time">8:30 am</button>
              <button className="btn_time">8:30 am</button>
              <button className="btn_time">8:30 am</button>
              <button className="btn_time">8:30 am</button>
              <button className="btn_time">8:30 am</button>
              <button className="btn_time">8:30 am</button>
              <button className="btn_time">8:30 am</button>
              <button className="btn_time">8:30 am</button>
              <button className="btn_time">8:30 am</button>
              <button className="btn_time">8:30 am</button>
            </div>
          </div>
        </div>
      </div>
      <div className="paynow">
        <Link to="/payments" onClick={() => window.scrollTo(0, 0)}>
          <button className="btn_paynow">Pay Now</button>
        </Link>
        <h6>
          <img src={Info} alt="" className="img_info" />
          Cash Payment at Report Collection
        </h6>
      </div>
    </div>
  );
}
