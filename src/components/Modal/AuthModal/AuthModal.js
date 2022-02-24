import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { Link, useHistory } from "react-router-dom";
import gicon from "../../../assets/images/google-1.svg";
import image1 from "../../../assets/images/login-img.png";
import { useAuth } from '../../../lib/auth';


const AuthModal = ({ modalIsOpen, setModalIsOpen }) => {

    let history = useHistory();


    const { user, setUser } = useAuth();

    const [registerIsOpen, setRegisterIsOpen] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();



    // const onSubmit = data => {
    //     axios.post('http://localhost:7000/login', {
    //         email: data.email,
    //         password: data.password
    //     })
    //         .then(res => {
    //             console.log(res.data.data)
    //             const userType = res.data.data.user;
    //             const userId = res.data.data.id;
    //             setUser({ ...user, userType: userType, userId: userId })
    //             history.push(`/${userType}/${userId}`);
    //             setModalIsOpen(false);
    //         })
    //         .catch(err => console.log(err))
    // };

    //samsher code
    const config = {
        headers: {
            "Content-Type": "application/json"
        },
        withCredentials: true
    }

    const onSubmit = data => {
        axios.post('http://localhost:7000/login', {
            email: data.email,
            password: data.password
        }, config)
            .then(res => {
                console.log(res.data.data)
                const userType = res.data.data.user;
                const userId = res.data.data.id;
                setUser({ ...user, userType: userType, userId: userId })
                user.userType === 'user' || history.push(`/${userType}/${userId}`);
                setModalIsOpen(false);
            })
            .catch(err => console.log(err))
    };

    return (
        <>
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
                        <form className="form-1" onSubmit={handleSubmit(onSubmit)}>
                            <label for="email">Email Id   </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="text" id="email" name="email" {...register("email")}></input><br></br><br></br>
                            <label for="password">Password  </label>&nbsp; &nbsp;&nbsp;
                            <input type="text" id="password" name="password" {...register("password")}></input><br></br>
                            <div className="google-box">
                                <div className="google-text">Log In With Google</div>
                                <div className="g-icon"><Link to=''><img src={gicon} alt='google' /></Link></div>
                                <div className="log-e">Forgot Password&nbsp; <Link className="link-g" to='' > </Link></div>
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
        </>
    );
};

export default AuthModal;