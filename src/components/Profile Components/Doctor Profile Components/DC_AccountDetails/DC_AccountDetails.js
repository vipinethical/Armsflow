import React from 'react';

const DC_AccountDetails = () => {
    return (
        <div className='personal-details-main'>
            <div className='verified-img-part'>
                <div className='verified-img'></div>
                <p>Verified</p>
            </div>
            <div className='personal-details-form'>
                <form action="">
                    <div>
                        <label for='name'>Name</label>
                        <input id='name' type="text" />
                    </div>
                    <div>
                        <label for='accountNo'>Account no.</label>
                        <input id='accountNo' type="text" />
                    </div>
                    <div>
                        <label for='ifscCode'>IFSC Code</label>
                        <input id='ifscCode' type="text" />
                    </div>
                    <div>
                        <label for='panNumber'>PAN Number</label>
                        <input id='panNumber' type="text" />
                    </div>
                    <div>
                        <label for='upiId'>UPI Id (Optional)</label>
                        <input id='upiId' type="text" />
                    </div>
                    <div>
                        <button style={{ backgroundColor: '#00b4d8' }} >Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DC_AccountDetails;