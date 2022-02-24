import React from 'react';
import './DC_PatientsList.scss';

const DC_PatientsList = () => {

    const patientList = [
        {
            patientName: 'Ramesh S.',
            age: 30,
            gender: 'Male',
        },
        {
            patientName: 'Ramesh S.',
            age: 30,
            gender: 'Male',
        },
        {
            patientName: 'Ramesh S.',
            age: 30,
            gender: 'Male',
        },
        {
            patientName: 'Ramesh S.',
            age: 30,
            gender: 'Male',
        },
        {
            patientName: 'Ramesh S.',
            age: 30,
            gender: 'Male',
        },
        {
            patientName: 'Ramesh S.',
            age: 30,
            gender: 'Male',
        },
        {
            patientName: 'Ramesh S.',
            age: 30,
            gender: 'Male',
        },
        {
            patientName: 'Ramesh S.',
            age: 30,
            gender: 'Male',
        },
        {
            patientName: 'Ramesh S.',
            age: 30,
            gender: 'Male',
        }
    ]


    return (
        <div className='patient-list-section'>
            <div className='patient-list-inputs'>
                <div className='patient-list-search'>
                    <input type="text" placeholder='Search a Patient' />
                </div>
                <div className='test-type-option'>
                    <select id="tests" name="tests">
                        <option disabled value="">Test Type</option>
                        <option value="Blood Test">Blood Test</option>
                        <option value="Blood Test">Blood Test</option>
                        <option value="Blood Test">Blood Test</option>
                        <option value="Blood Test">Blood Test</option>
                    </select>
                </div>
            </div>
            {/* <div className='patient-cart-wrapper'>
                {
                    patientList.map(patient => (
                        <div className='patient-cart'>
                            <div className='patient-img'></div>
                            <div>
                                <h5>{patient.patientName}</h5>
                                <p>{patient.age} Years {patient.gender}</p>
                                <p>Last Consultation: <span>DD/MM/YY</span></p>
                            </div>
                            <div className='patient-cart-button'>
                                <button style={{ backgroundColor: '#00b4d8' }} className='patient-cart-button1'>View Profile</button>
                                <button style={{ color: '#00b4d8', border: '2px solid #00b4d8' }} className='patient-cart-button2'>Remove</button>
                            </div>
                        </div>
                    ))
                }
            </div> */}
            <div className='patient-cart-wrapper'>
                <div className='patient-single-cart-wrapper'>
                    {
                        patientList.map(patient => (
                            <div className='patient-cart'>
                                <div className='patient-img'></div>
                                <div>
                                    <h5>{patient.patientName}</h5>
                                    <p>{patient.age} Years {patient.gender}</p>
                                    <p>Last Consultation: <span>DD/MM/YY</span></p>
                                </div>
                                <div className='patient-cart-button'>
                                    <button style={{ backgroundColor: '#00b4d8' }} className='patient-cart-button1'>View Profile</button>
                                    <button style={{ color: '#00b4d8', border: '2px solid #00b4d8' }} className='patient-cart-button2'>Remove</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='patient-single-cart-details'>
                    <div className='single-cart-first-part'>
                        <div className='single-cart-patient-img'></div>
                        <div className='single-cart-patient-details'>
                            <h5>Ramesh S.</h5>
                            <p>30 Years Years Male</p>
                            <p>Last Consultation: <span>DD/MM/YY</span></p>
                        </div>
                    </div>
                    <div className='single-cart-second-part my-4'>
                        <div className='dc-single-cart-patients-section-devider'>
                            <p>Appointments:</p>
                            <div className='new-old-btn'>
                                <button className='new-old-btn1'>New</button>
                                <button className='new-old-btn2'>Old</button>
                            </div>
                        </div>
                        <div>
                            <p className='text-center my-2'>No Appointment Scheduled</p>
                        </div>
                    </div>
                    <div className='single-cart-third-part'>
                        <div className='dc-single-cart-patients-section-devider'>
                            <p>Prescription:</p>
                            <div className='new-old-btn'>
                                <button className='new-old-btn1'>New</button>
                                <button className='new-old-btn2'>Old</button>
                            </div>
                        </div>
                        <div>
                            <p className='text-center my-2'>No Prescription Uploaded</p>
                        </div>
                    </div>
                    <div className='single-cart-third-part'>
                        <div className='dc-single-cart-patients-section-devider'>
                            <p>Reports:</p>
                            <div className='new-old-btn'>
                                <button className='new-old-btn1'>New</button>
                                <button className='new-old-btn2'>Old</button>
                            </div>
                        </div>
                        <div>
                            <p className='text-center my-2'>No Reports Uploaded</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DC_PatientsList;