import React from 'react';

const DC_PersonalDetails = () => {
    return (
        <div className='personal-details-main'>
            <div className='verified-img-part'>
                <div className='verified-img'></div>
                <p>Verified</p>
            </div>
            <div className='personal-details-form'>
                <form action="">
                    <div>
                        <label for='labName'>First Name</label>
                        <input id='labName' type="text" />
                    </div>
                    <div>
                        <label for='contactNo'>Last Name</label>
                        <input id='contactNo' type="text" />
                    </div>
                    <div>
                        <label for='email'>Gender</label>
                        <input id='email' type="text" />
                    </div>
                    <div>
                        <label for='experience'>Age</label>
                        <input id='experience' type="text" />
                    </div>
                    <div>
                        <label for='holdingBlock'>Phone No.</label>
                        <input id='holdingBlock' type="text" />
                    </div>
                    <div>
                        <label for='area'>Whatsapp No.</label>
                        <input id='area' type="text" />
                    </div>
                    <div>
                        <label for='city'>Email ID</label>
                        <input id='city' type="text" />
                    </div>
                    <div>
                        <button style={{ backgroundColor: '#00b4d8' }} >Edit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DC_PersonalDetails;