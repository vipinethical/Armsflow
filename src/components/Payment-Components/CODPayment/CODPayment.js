import React from 'react';
import './CODPayment.scss';

const CODPayment = () => {
    return (
        <div className='cod-component-main'>
            <h5>Pay On Delivery</h5>
            <div className='code-main'>
                <div className='code-box'>
                    <span>5</span>
                    <span>5</span>
                    <span>8</span>
                    <span>4</span>
                </div>
                <div className='code-input-part'>
                    <label htmlFor="">
                        <span>Enter the Code Shown</span>
                        <input type="text" placeholder='Type Here' />
                    </label>
                </div>
                <span>Cash Payment At Clinc / Hospital</span>
            </div>
            <div className='paynow-btn'>
                <button>Confirm</button>
            </div>
        </div>
    );
};

export default CODPayment;