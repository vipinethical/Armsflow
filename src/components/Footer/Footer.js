import { Link } from "react-router-dom";
import "./Footer.scss";
import logo from "../../assets/images/logo.svg";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <h2 className="text-uppercase">Arms Flow</h2>
          <img src={logo} alt="Arms Flow" className="m-4 px-2" />
        </div>
        <ul>
          <div>
            <h6>Learn More</h6>
            <Link to="/aboutus" onClick={() => window.scrollTo(0, 0)}>
              About Arms Flow
            </Link>
            <Link to="/aboutus" onClick={() => window.scrollTo(0, 400)}>
              Services
            </Link>
            <Link to="/aboutus" onClick={() => window.scrollTo(0, 950)}>
              Mission & Vision
            </Link>
            <Link to="/aboutus" onClick={() => window.scrollTo(0, 1450)}>
              Benefits
            </Link>
            <Link to="/aboutus" onClick={() => window.scrollTo(0, 1950)}>
              Contact Us
            </Link>
          </div>
          <div>
            <h6>Services</h6>
            <Link to="/consultation" onClick={() => window.scrollTo(0, 0)}>
              Online Consultation
            </Link>
            <Link to="/labs" onClick={() => window.scrollTo(0, 0)}>
              Diagnostics
            </Link>
          </div>
          <div className="contact">
            <h6>Contact Us</h6>
            <span>Phone No.</span>
            <a href="tel:123-456-7890">123-456-7890</a>
            <br />
            <span>WhatsApp.</span>
            <a href="tel:123-456-7890">123-456-7890</a>
          </div>
          <div>
            <h6 className="social-padding">Social</h6>
            <section>
              <a
                className="social btn"
                href="https://www.facebook.com/ArmsFlow/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                className="social btn"
                href="https://www.instagram.com/armsflow/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram size={25} />
              </a>
              <a
                className="social btn"
                href="https://twitter.com/armsflow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={25} />
              </a>
              <a
                className="social btn"
                href="https://www.youtube.com/digitalflow.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={25} />
              </a>
            </section>
          </div>
        </ul>
      </div>
      <hr />
      <p className="">&copy; 2020 ARMS FLOW | All Rights Reserved</p>
    </footer>
  );
}
