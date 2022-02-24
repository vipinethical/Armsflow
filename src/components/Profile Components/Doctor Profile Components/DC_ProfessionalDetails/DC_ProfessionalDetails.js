import React from 'react';
import './DC_ProfessionalDetails.scss';

const DC_ProfessionalDetails = () => {
    return (
        <div className='personal-details-main'>
            <div className='verified-img-part'>
                <div className='verified-img'></div>
                <p>Verified</p>
            </div>
            <div className='personal-details-form'>
                <form action="">
                    <div>
                        <label for='labName'>Degree</label>
                        <input id='labName' type="text" />
                    </div>
                    <div>
                        <label for='contactNo'>Specialization</label>
                        <input id='contactNo' type="text" />
                    </div>
                    <div>
                        <label for='email'>Experience</label>
                        <input id='email' type="text" />
                    </div>
                    <div>
                        <label for='experience'>License No.</label>
                        <input id='experience' type="text" />
                    </div>
                    <h6>Clinic/Hospital Address</h6>
                    <div>
                        <label for='holdingBlock'>H.No. / Block No.</label>
                        <input id='holdingBlock' type="text" />
                    </div>
                    <div>
                        <label for='area'>Area</label>
                        <input id='area' type="text" />
                    </div>
                    <div>
                        <label for='city'>City</label>
                        <input id='city' type="text" />
                    </div>
                    <div>
                        <label for='state'>State</label>
                        <input id='state' type="text" />
                    </div>
                    <div>
                        <label for='pincode'>Pincode</label>
                        <input id='pincode' type="text" />
                    </div>
                    <div>
                        <label for='registration'>Registration No.</label>
                        <input id='registration' type="text" />
                    </div>
                    <div>
                        <label for='specification'>Specification</label>
                        <textarea id='specification' type="text" />
                        <button style={{ backgroundColor: '#00b4d8' }} >Edit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DC_ProfessionalDetails;