import React from 'react';
import googlePayImg from '../../../assets/logo/google-pay.png';
import phonPayImg from '../../../assets/logo/phone-pay.png';
import whatsappPayImg from '../../../assets/logo/whatsapp-pay.png';
import './UPIPayment.scss';



const UPIPayment = () => {
    return (
        <div className='upi-component-main'>
            <h3>Select UPI Mode</h3>
            <div className='upi-payment-content'>
                <div className='upi-payment-method'>
                    <div>
                        <div><img className='mt-4' src={googlePayImg} alt="" /></div>
                        <p>Google Pay</p>
                    </div>
                    <div>
                        <div><img src={whatsappPayImg} alt="" /></div>
                        <p>Whatsapp Pay</p>
                    </div>
                    <div>
                        <div><img src={phonPayImg} alt="" /></div>
                        <p>Phone Pay</p>
                    </div>
                </div>
                <div className='upi-input-main'>
                    <label for='UPIInput'>Enter UPI ID</label>
                    <input id='UPIInput' type="text" palceholder='Type Here' />
                </div>
                <div className='paynow-btn'>
                    <button>Pay Now</button>
                </div>
            </div>
        </div>
    );
};

export default UPIPayment;