import React from 'react';
import './Lab_PersonalDetails.scss';

const PersonalDetails = () => {
    return (
        <div className='personal-details-main'>
            <div className='verified-img-part'>
                <div className='verified-img'></div>
                <p>Verified</p>
            </div>
            <div className='personal-details-form'>
                <form action="">
                    <div>
                        <label for='labName'>Lab Name</label>
                        <input id='labName' type="text" />
                    </div>
                    <div>
                        <label for='contactNo'>Contact no.</label>
                        <input id='contactNo' type="text" />
                    </div>
                    <div>
                        <label for='email'>Email</label>
                        <input id='email' type="text" />
                    </div>
                    <div>
                        <label for='experience'>Experience</label>
                        <input id='experience' type="text" />
                    </div>
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
                        <button>Edit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PersonalDetails;