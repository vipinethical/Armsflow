import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import CardPayment from "../../components/Payment-Components/CardPayment/CardPayment";
import CODPayment from "../../components/Payment-Components/CODPayment/CODPayment";
import NetBanking from "../../components/Payment-Components/NetBanking/NetBanking";
import PaytmWallet from "../../components/Payment-Components/PaytmWallet/PaytmWallet";
import UPIPayment from "../../components/Payment-Components/UPIPayment/UPIPayment";
import "./Payments.scss";

const Payments = () => {
  let { path, url } = useRouteMatch();

  const handleClick = () => {
    console.log("this is back button");
  };

  return (
    <div className="container my-5">
      <Link to="/labappointment">
        <p onClick={handleClick} className="text-start">
          <KeyboardArrowLeftIcon /> Back
        </p>
      </Link>
      <div className="payment-grid-container">
        <div className="payment-main">
          <Router>
            <div className="payment-method-btn">
              <Link to={`${url}/card`}>
                Credit/Debit Cards
                <KeyboardArrowRightIcon />
              </Link>
              <Link to={`${url}/upi`}>
                UPI Payments
                <KeyboardArrowRightIcon />
              </Link>
              <Link to={`${url}/net`}>
                Net Banking
                <KeyboardArrowRightIcon />
              </Link>
              <Link to={`${url}/paytm-wallet`}>
                Paytm/Wallet Money
                <KeyboardArrowRightIcon />
              </Link>
              <Link to={`${url}/cod`}>
                COD
                <KeyboardArrowRightIcon />
              </Link>
            </div>
            <div className="payment-method-component">
              <Switch>
                <Route path={`${path}`} exact component={CardPayment} />
                <Route path={`${path}/card`} component={CardPayment} />
                <Route path={`${path}/upi`} component={UPIPayment} />
                <Route path={`${path}/net`} component={NetBanking} />
                <Route path={`${path}/paytm-wallet`} component={PaytmWallet} />
                <Route path={`${path}/cod`} component={CODPayment} />
              </Switch>
            </div>
          </Router>
        </div>
        <div className="payment-details">
          <div className="payment-details-header">
            <p>Payment Details</p>
          </div>
          <div className="payment-details-text-wrapper">
            <div className="payment-details-text">
              <p className="doctor-name">Dr Ramesh Sharma</p>
              <span>Online Audio Consultation</span>
              <span>Monday, 8.30 A.M</span>
              <span>18 June 2021</span>
              <div className="consultation-fees">
                <p>Consultation Fees -</p>
                <p>Rs. 500</p>
              </div>
            </div>
          </div>
          <div className="total-fees-btn">
            <p>Total Fees</p>
            <p>Rs.500</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
