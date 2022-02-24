import React, { useState } from 'react';
import Modal from "react-modal";
import { Link } from "react-router-dom";
import gicon from "../../assets/images/google-1.svg";
import image1 from "../../assets/images/login-img.png";
import logo from "../../assets/images/logo.svg";
import "./Navbar.scss";



Modal.setAppElement('#root')
export default function Navbar() {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [registerIsOpen, setRegisterIsOpen] = useState(false);


    return (
        <nav className='navbar navbar-expand-lg navbar-light'>
            <Link to='/' className='navbar-brand'>
                <img src={logo} alt='Arms Flow' />
                <h1 className='text-uppercase'>Arms Flow</h1>
            </Link>
            <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon' />
            </button>
            <div
                className='collapse navbar-collapse flex-row-reverse'
                id='navbarSupportedContent'
            >
                <div className='navbar-nav mb-2 mb-lg-0'>
                    <Link to='/' className='dropdown-item'>
                        Home
                    </Link>
                    <Link to='/consultation' className='dropdown-item'>
                        Consultation
                    </Link>
                    <Link to='/labs' className='dropdown-item'>
                        Diagnostics
                    </Link>
                    <Link to='/aboutus' className='dropdown-item'>
                        About Us
                    </Link>
                    <Link to='/login' onClick={() => setModalIsOpen(true)} className='dropdown-item login-btn mx-3'>Login
                    </Link>
                    <Modal isOpen={modalIsOpen} >

                        <div className="user-login">
                            <div className="row">
                                <div className="col-md-6 ">
                                    <h3><b>Log In with Arms flow</b></h3>
                                    <div className="plus"><Link to='' onClick={() => setModalIsOpen(false)}>+</Link></div></div>
                                <div className="row">
                                    <div className="log-a">Login to your Account &nbsp;

                                    </div>

                                </div>
                                <form className="form-1">
                                    <label for="email">Email Id   </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input type="text" id="email" name="email"></input><br></br><br></br>
                                    <label for="password">Password  </label>&nbsp; &nbsp;&nbsp;
                                    <input type="text" id="password" name="password"></input><br></br>
                                    <div className="google-box">
                                        <div className="google-text">Log In With Google</div>
                                        <div className="g-icon"><a href="#" ><img src={gicon} alt='google' /></a></div>
                                        <div className="log-e">Forgot Password&nbsp; <a className="link-g" href="#" > </a></div>
                                        <div className="log-d">New to Arms Flow &nbsp; <Link className="link-g" to='/register' onClick={() => setRegisterIsOpen(true)}>Sign Up </Link>
                                            <Modal isOpen={registerIsOpen} >
                                                <div className="user-login">
                                                    <div className="row">
                                                        <div className="col-md-6 ">
                                                            <h3><b>Sign Up with Arms flow</b></h3>
                                                            <div className="plus"><span onClick={() => setRegisterIsOpen(false)}>+</span></div></div>
                                                        <div className="row">
                                                            <div className="log-a">Are you a Doctor ? &nbsp; <a className="link-register" href="#" >Register </a></div>
                                                            <div className="log-b">Are you a Laboratorist? &nbsp; <a className="link-lab" href="#" >Register </a></div>
                                                        </div>
                                                        <form className="form-1">
                                                            <label for="email">Email Id   </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                            <input type="text" id="email" name="email"></input><br></br><br></br>
                                                            <label for="password">Password  </label>&nbsp; &nbsp;&nbsp;
                                                            <input type="text" id="password" name="password"></input><br></br>
                                                            <div className="google-box">
                                                                <div className="google-text">Sign Up With Google</div>
                                                                <div className="g-icon"><Link to='' ><img src={gicon} alt='google' /></Link></div>
                                                                <div className="log-c">Already Signed Up ? &nbsp; <a className="link-g" href='/login'  >Log In </a></div>
                                                            </div>
                                                            <button type="submit" className="btn-2">Get Started</button>
                                                        </form>
                                                        <div className="img-login"><img src={image1} alt='google' /></div>
                                                    </div>
                                                </div>
                                            </Modal></div>
                                    </div>
                                    <button type="submit" className="btn-2">Log In</button>
                                </form>
                                <div className="img-login"><img src={image1} alt='google' /></div>
                            </div>
                        </div>
                    </Modal>

                </div>
            </div>
        </nav>
    );
}
