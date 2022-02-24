import React from "react";
import airtelImg from "../../../assets/logo/Airtel_logo.png";
import freechargeImg from "../../../assets/logo/freecharge.png";
import paytmImg from "../../../assets/logo/kotak-mahindra.png";
import mobikwikImg from "../../../assets/logo/Mobikwik.png";
import olaImg from "../../../assets/logo/ola-money.png";

const PaytmWallet = () => {
  return (
    <div className="net-component-main">
      <h4>Select The Net Banking Mode</h4>
      <div className="net-banking-method">
        <div className="radio-btn-content">
          <label for="paytm">
            <input type="radio" name="wallet" id="paytm" />
            <span>Paytm</span>
            <img src={paytmImg} alt="" />
          </label>
        </div>
        <div className="radio-btn-content">
          <label for="mobikwik">
            <input type="radio" name="wallet" id="mobikwik" />
            <span>Mobikwik</span>
            <img src={mobikwikImg} alt="" />
          </label>
        </div>
        <div className="radio-btn-content">
          <label for="airtel">
            <input type="radio" name="wallet" id="airtel" />
            <span>Airtel Money</span>
            <img src={airtelImg} alt="" />
          </label>
        </div>
        <div className="radio-btn-content">
          <label for="olamoney">
            <input type="radio" name="wallet" id="olamoney" />
            <span>Ola Money</span>
            <img style={{ height: "25px" }} src={olaImg} alt="" />
          </label>
        </div>
        <div className="radio-btn-content">
          <label for="freecharge">
            <input type="radio" name="wallet" id="freecharge" />
            <span>Free Charge</span>
            <img
              style={{ width: "50px", height: "28px", right: "-10px" }}
              src={freechargeImg}
              alt=""
            />
          </label>
        </div>
      </div>
      <div className="paynow-btn">
        <button>Pay Now</button>
      </div>
    </div>
  );
};

export default PaytmWallet;
