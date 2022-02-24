import React from 'react';
import './Lab_Availability.scss';

const Availability = () => {

    const days = ['Mon', 'Tue', 'Wed', 'Thrus', 'Fri', 'Sat', 'Sun'];

    return (
        <div className='availability-section'>
            <div>
                <p>Test Preferences</p>
                <div className='test-preferences-btn'>
                    <button>At Home</button>
                    <button>Clinic</button>
                </div>
            </div>
            <div>
                <p>Select Operating Days</p>
                <div className='operating-days-btn'>
                    {
                        days.map(day => <button>{day}</button>)
                    }
                </div>
            </div>
            <div>
                <p>Time</p>
                <div className='time-input'>
                    <input type="date" />
                    <span>-</span>
                    <input type="date" />
                </div>
            </div>
            <button className='edit-btn'>Edit</button>
        </div>
    );
};

export default Availability;