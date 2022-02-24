import { Link } from "react-router-dom";
import Doctors from "../../assets/images/undraw_doctors_hwty.svg";
import MedicalResearch from "../../assets/images/undraw_medical_research_qg4d.svg";
import DoctorsCarousel from "../../assets/images/carousel_doctors.svg";
import LabsCarousel from "../../assets/images/carousel_labs.svg";
import DoctorAvatar from "../../assets/images/sammy-williams-38Un6Oi5beE-unsplash.jpg";
import MaskGroup from "../../assets/images/MaskGroup.png";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./Home.scss";
import { useState } from "react";

export default function Home() {
  const stats = [100, 100, 100];
  const [selected, setSelected] = useState(0);

  return (
    <>
      <div
        id="carouselIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item container-padding active">
            <div className="carousel-flex">
              <div>
                <h2>Join Us</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link to="/register" className="btn btn-light white-btn">
                  Register
                </Link>
              </div>
              <img src={DoctorsCarousel} alt="Doctors Carousel" />
            </div>
          </div>
          <div className="carousel-item container-padding">
            <div className="carousel-flex">
              <div>
                <h2>Join Us</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link to="/register" className="btn btn-light white-btn">
                  Register
                </Link>
              </div>
              <img src={LabsCarousel} alt="Labs Carousel" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-padding doctors">
        <div>
          <h2>Online Doc Consultation</h2>Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua
          <ol className="list">
            <li>Select Best Specialist in town</li>
            <li>Make an appointment</li>
            <li>Meet your Doctor at your Ease</li>
          </ol>
        </div>
        <section>
          <img src={Doctors} alt="logo" />
        </section>
      </div>
      <div className="container-padding labs">
        <section>
          <img src={MedicalResearch} alt="logo" />
        </section>
        <div className="flex-fill">
          <h2>Laboratory Test</h2>Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
          <ol className="list">
            <li>Select Best Lab in town</li>
            <li>Make an appointment</li>
            <li>Get Test done as per your convenience</li>
          </ol>
        </div>
      </div>
      {selected === 0 && (
        <div className="container-padding cards-container " id="docdiv">
          <section>
            <div>
              <h2>Doctors Near You</h2>Consult top doctors online
            </div>
            <div id="toggle">
              <input
                type="radio"
                id="doctors"
                name="gender"
                value="doctors"
                checked
                onClick={() => setSelected(0)}
              />
              <label for="doctors">Doctors</label>
              <input
                type="radio"
                id="labs"
                name="gender"
                value="labs"
                onClick={() => setSelected(1)}
                style={{ backgroundColor: "ee6c4d" }}
              />
              <label for="labs">Labs</label>
            </div>
          </section>
          <section className="cards">
            <section className="card-">
              <aside />
              <img src={DoctorAvatar} alt="Dr Ramesh Sharma" />
              <div className="card-text">
                <h3>Dr Ramesh Sharma</h3>
                <h4>BDS, MD Nutrition</h4>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <span>10 Reviews</span>
                <br />
                <Link
                  to="/consultation"
                  className="btn btn-light white-btn"
                  onClick={() => window.scrollTo(0, 600)}
                >
                  Book Appointment
                </Link>
              </div>
            </section>
            <section className="card-">
              <aside />
              <img src={DoctorAvatar} alt="Dr Ramesh Sharma" />
              <div className="card-text">
                <h3>Dr Ramesh Sharma</h3>
                <h4>BDS, MD Nutrition</h4>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <span>10 Reviews</span>
                <br />
                <Link to="/consultation" className="btn btn-light white-btn">
                  Book Appointment
                </Link>
              </div>
            </section>
          </section>
        </div>
      )}
      {selected === 1 && (
        <div className="container-padding cards-container2" id="labdiv">
          <section>
            <div>
              <h2>Laboratory Near By You</h2>Consult top Laboratories online.
            </div>
            <div id="toggle">
              <input
                type="radio"
                id="doctors"
                name="gender"
                value="doctors"
                onClick={() => setSelected(0)}
              />
              <label for="doctors">Doctors</label>
              <input
                type="radio"
                id="labs"
                name="gender"
                value="labs"
                checked
                onClick={() => setSelected(1)}
                style={{ backgroundColor: "ee6c4d" }}
              />
              <label for="labs">Labs</label>
            </div>
          </section>
          <section className="cards">
            <section className="card-">
              <aside />
              <img src={MaskGroup} alt="" />
              <div className="card-text">
                <h3>Delhi Metro Lab</h3>
                <h6>
                  Address : #123, XYZ, New <br /> Delhi, 123456
                </h6>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <span>10 Reviews</span>
                <br />
                <Link
                  to="/labs"
                  className="btn btn-light white-btn"
                  onClick={() => window.scrollTo(0, 400)}
                >
                  Book Appointment
                </Link>
              </div>
            </section>
            <section className="card-">
              <aside />
              <img src={MaskGroup} alt="" />
              <div className="card-text">
                <h3>Pulses Lab</h3>
                <h6>
                  Address : #123, XYZ, New <br /> Delhi, 123456
                </h6>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <span>10 Reviews</span>
                <br />
                <Link
                  to="/labs"
                  className="btn btn-light white-btn"
                  onClick={() => window.scrollTo(0, 400)}
                >
                  Book Appointment
                </Link>
              </div>
            </section>
          </section>
        </div>
      )}
      <div className="container-padding home-about">
        <div>
          <h2>About Arms Flow</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            aliquam tincidunt tincidunt habitant dolor condimentum euismod morbi
            pretium. At consequat viverra fringilla non bibendum arcu a etiam
            feugiat. Gravida sed ultrices aliquet nullam. Malesuada semper nec
            lacinia interdum.
          </p>
          <section>
            <div>
              {stats[0]} <br />
              Doctors
            </div>
            <div>
              {stats[1]} <br />
              Tests
            </div>
            <div>
              {stats[2]} <br />
              Daily Visitors
            </div>
          </section>
          <Link
            to="/aboutus"
            className="btn btn-light white-btn"
            onClick={() => window.scrollTo(0, 0)}
          >
            Learn More
          </Link>
        </div>
      </div>
    </>
  );
}

function Cards() {
  // $(".carousel-item", ".show-neighbors")
  //   .each(function () {
  //     var next = $(this).next();
  //     if (!next.length) {
  //       next = $(this).siblings(":first");
  //     }
  //     next.children(":first-child").clone().appendTo($(this));
  //   })
  //   .each(function () {
  //     var prev = $(this).prev();
  //     if (!prev.length) {
  //       prev = $(this).siblings(":last");
  //     }
  //     prev.children(":nth-last-child(2)").clone().prependTo($(this));
  //   });

  return (
    <div
      id="card"
      className="carousel slide show-neighbors"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li data-target="#card" data-slide-to="0" className="active"></li>
        <li data-target="#card" data-slide-to="1"></li>
        <li data-target="#card" data-slide-to="2"></li>
      </ol>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="item__third">
            <img
              src="https://via.placeholder.com/900x300/c69/f9c/?text=1"
              className="d-block w-100"
              alt=""
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="item__third">
            <img
              src="https://via.placeholder.com/900x300/9c6/cf9/?text=2"
              className="d-block w-100"
              alt=""
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="item__third">
            <img
              src="https://via.placeholder.com/900x300/69c/9cf/?text=3"
              className="d-block w-100"
              alt=""
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>

      <a
        className="carousel-control-prev"
        href="#card"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#card"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
