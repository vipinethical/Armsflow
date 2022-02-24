import React, { useState} from 'react';
import "./AppointmentDetail.scss";
import Modal from "react-modal";
import docpic from "../../../assets/images/doc1.png";
import image2 from "../../../assets/images/doc1.png";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";




export default function Appointmentone () {
    const [appointmentoneIsOpen, setAppointmentoneIsOpen] = useState(false);
    const [appointmenttwoIsOpen, setAppointmenttwoIsOpen] = useState(false);
    const [appointmentthreeIsOpen, setAppointmentthreeIsOpen] = useState(false);
        return (

               <div className="newone">
                     <button className="btn-0" onClick={() => setAppointmentoneIsOpen(true)}>Appointment 1</button>
                     <Modal isOpen={appointmentoneIsOpen} >
                     <div class="appoint">
                     <div className="plus9"><a href="" onClick = {() => setAppointmentoneIsOpen(false)}>+</a></div>
                            <h1>Appointment Details</h1>
                            <img src={docpic} alt=""></img></div>

                            <div className='card-text10'>
                           <h4>Patient Name</h4>
                            <span>25 &nbsp;  &nbsp; &nbsp; Male  &nbsp;  &nbsp; &nbsp; </span>
                            <br/><br/>
                            <div className="app-tab">
                            <table >
<tr>
        <th scope="row">Appointment Type:  </th>
        <td>Audio Call </td>

    </tr><br/>
    <tr>
        <th scope="row">Appointment Time:  </th>
        <td>10 : 00 - 10 : 30 a.m</td>

    </tr><br/>
    <tr>
        <th scope="row">Appointment Date:</th>
        <td>19 Apr, 2021 </td>

    </tr>

</table>
 </div>
                            <button>Send Link</button>             
                        </div>


<div class="box999">
    <h5>Previous Reports (If any)</h5>
    <h6>No Reports submitted yet</h6>
</div>
<div className="box888">
<h5>Previous Prescriptions (If any)</h5>
    <h6>No Prescriptions provided yet</h6>
</div>
                     </Modal>


                     <button className="btn-7" onClick={() => setAppointmenttwoIsOpen(true)}>Appointment 2</button>
                     <Modal isOpen={appointmenttwoIsOpen} >
                     <div className="appoint-2">

                       <h1>Appointment Details</h1>
                       <a href="" onClick = {() => setAppointmenttwoIsOpen(false)}>+</a>
                       <div className="table-19">
<table>
<tr>
        <th scope="row">Patient Name:  </th>
        <td>Rahul S.</td>

    </tr><br/>
    <tr>
        <th scope="row">Age</th>
        <td>25</td>

    </tr><br/>
    <tr>
        <th scope="row">Gender</th>
        <td>Male</td>

    </tr>
    </table>
         </div>    

         <div className="table-20">
<table>
<tr>
        <th scope="row">Appointment Type: </th>
        <td>Consultation</td>

    </tr><br/>
    <tr>
        <th scope="row">Appointment At:</th>
        <td>Clinic</td>

    </tr><br/>
    <tr>
        <th scope="row">Payment Mode:</th>
        <td>Cash after appointment</td>

    </tr>
    </table>
         </div>    

         <div className="table-21">
<table>
<tr>
        <th scope="row">Appointment Date: </th>
        <td>June 1, 2021</td>

    </tr><br/>
    <tr>
        <th scope="row">Appointment Time:</th>
        <td>11:00 A.M</td>

    </tr><br/>

    </table>
         </div>  
         <div className="table-212">
<table>
<tr>
        <th scope="row">Last Consultation On:</th>
        <td>June 1, 2021</td>

    </tr><br/>
    <tr>
        <th scope="row">Review</th>
      <td> <span><AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar /></span></td>

    </tr><br/>

    </table>
         </div> 


<div className="new-box">
<h1>Doctor Details : </h1> 
<img src={image2} ></img></div>
<div className='card-text09'>
<table>
<tr>
        <th scope="row">Name: </th>
        <td>Dr Ramesh S</td>

    </tr><br/>
    <tr>
        <th scope="row">Education</th>
        <td>M.B.B.S.</td>

    </tr><br/>
    <tr>
        <th scope="row">Specialization:</th>
        <td>Nutrition</td>

    </tr><br/>
    <tr>
        <th scope="row">Experience</th>
        <td>10 Years</td>

    </tr>

    </table>

                        </div>
                        <div className='card-text010'>
<table>
<tr>
        <th scope="row">Age </th>
        <td>40 yrs</td>

    </tr><br/>
    <tr>
        <th scope="row">Gender</th>
        <td>Male</td>

    </tr><br/>
    <tr>
        <th scope="row">Clinic Locatio</th>
        <td>XYZ Hospital,
New Delhi</td>

    </tr><br/>


    </table></div>
                     </div>
                     </Modal>
                     <button  className="btn-4" onClick={() => setAppointmentthreeIsOpen(true)}>Appointment 3</button>
                     <Modal isOpen={appointmentthreeIsOpen} >
                   <div className="test-detail">
                   <a href="" onClick = {() => setAppointmentthreeIsOpen(false)}>+</a>
                      <h1>DETAILS</h1></div>

                      <div className="test-para">
                      <h5>Test Name</h5>
                      <span>THYROID PROFILE, TOTAL</span>
                      <h5>Parameters covered</h5>
                      <span>Details here</span>
                      <h5>Category</h5>
                      <span> HEPATITIS & GI DISORDERS</span>
                      <h5>Report Availability</h5>
                      <span> Same Day</span>
                      <h5>Other Information</h5>
                      <p>Prerequisite 8 – 10 hours fasting is mandatory intake of caloric food, coffee, diet soda/gum strictly not allowed during fasting period consult physician for intake of medication</p>
</div>

                     </Modal>
                     </div>

        )
    }