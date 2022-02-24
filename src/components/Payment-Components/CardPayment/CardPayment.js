import React from 'react';
import mastercardImg from '../../../assets/logo/mastercard.png';
import './CardPayment.scss';


const CardPayment = () => {
    return (
        <div className='card-component-main'>
            <h4>Credit / Debit Card</h4>
            <form className='card-payment-inputs' action="">
                <label htmlFor="">
                    <span>Name On Card</span>
                    <input type="text" />
                </label>
                <label htmlFor="">
                    <span>Card Number</span>
                    <img src={mastercardImg} alt="" />
                    <input type="text" />
                </label>
                <div className='expire-cvc-input'>
                    <label htmlFor="">
                        <span>Expiry Date</span>
                        <input type="text" />
                    </label>
                    <label htmlFor="">
                        <span>CVC</span>
                        <input type="text" />
                    </label>
                </div>
                <label htmlFor="">
                    <span>Name on Card</span>
                    <input type="text" />
                </label>
            </form>
            <div className='paynow-btn mt-1'>
                <button>Confirm</button>
            </div>
        </div>
    );
};

export default CardPayment;