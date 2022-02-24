import React from "react";
import {
  default as axisBankImg,
  default as sbiBankImg,
} from "../../../assets/logo/axis-bank.png";
import hdfcBankImg from "../../../assets/logo/hdfc-bank.png";
import ificiBankImg from "../../../assets/logo/icici-bank.png";
import kotakBankImg from "../../../assets/logo/kotak-mahindra.png";
import "./NetBanking.scss";

const NetBanking = () => {
  return (
    <div className="net-component-main">
      <h4>Select The Net Banking Mode</h4>
      <div className="net-banking-method">
        <div className="radio-btn-content">
          <label for="axisBank">
            <input type="radio" name="Bank" id="axisBank" />
            <span>Axis Bank</span>
            <img src={axisBankImg} alt="" />
          </label>
        </div>
        <div className="radio-btn-content">
          <label for="hdfcBank">
            <input type="radio" name="Bank" id="hdfcBank" />
            <span>HDFC Bank</span>
            <img src={hdfcBankImg} alt="" />
          </label>
        </div>
        <div className="radio-btn-content">
          <label for="iciciBank">
            <input type="radio" name="Bank" id="iciciBank" />
            <span>IFICI Bank</span>
            <img src={ificiBankImg} alt="" />
          </label>
        </div>
        <div className="radio-btn-content">
          <label for="kotakBank">
            <input type="radio" name="Bank" id="kotakBank" />
            <span>Kotak</span>
            <img src={kotakBankImg} alt="" />
          </label>
        </div>
        <div className="radio-btn-content">
          <label for="sbiBank">
            <input type="radio" name="Bank" id="sbiBank" />
            <span>SBI</span>
            <img src={sbiBankImg} alt="" />
          </label>
        </div>
      </div>
      <div className="paynow-btn">
        <button>Pay Now</button>
      </div>
    </div>
  );
};

export default NetBanking;
