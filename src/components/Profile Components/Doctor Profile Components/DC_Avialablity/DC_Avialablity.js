import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import React, { useState } from 'react';
import './DC_Avialablity.scss';

const DC_Avialablity = () => {

    const [slotOpen, setSlotOpen] = useState(false)
    const [timingOpen, setTimingOpen] = useState(false)
    const [isPreferencSelected, setIsPreferencSelected] = useState(false)

    const days = ['Mon', 'Tue', 'Wed', 'Thrus', 'Fri', 'Sat', 'Sun'];

    const handlePreferencesClick = e => {
        e.preventDefault();
        setIsPreferencSelected(!isPreferencSelected);
        const clickedPlace = e.target.tagName
        console.log(clickedPlace);
        if (clickedPlace === 'path') {
            e.target.parentNode.style.color = isPreferencSelected ? '#00b4d8' : 'lightgrey';
        } else if (clickedPlace === 'BUTTON') {
            e.target.childNodes[1].style.color = isPreferencSelected ? '#00b4d8' : 'lightgrey';
        } else {
            e.target.style.color = isPreferencSelected ? '#00b4d8' : 'lightgrey';
        }
    }

    return (
        <div className='availability-section'>
            <div>
                <p>Consultation Preferences</p>
                <div onClick={(e) => handlePreferencesClick(e)} className='test-preferences-btn'>
                    <button>Video Call<CheckCircleIcon className='iconbtn' /></button>
                    <button >Audio Call<CheckCircleIcon className='iconbtn' /></button>
                    <button >Clinic<CheckCircleIcon className='iconbtn' /></button>
                    <button >Hospital<CheckCircleIcon className='iconbtn' /></button>
                    {/* <button onClick={() => setIsPreferencSelected(!isPreferencSelected)}>Hospital<CheckCircleIcon className='iconbtn' style={{ color: isPreferencSelected ? '#00b4d8' : 'lightgrey' }} /></button> */}
                </div>
            </div>
            <div className='online-consultation-slots'>
                <div>
                    <p>Online Consultation Slots<AddOutlinedIcon onClick={() => setSlotOpen(!slotOpen)} className='plus-btn-icon' /></p>
                    <div className='operating-days-btn'>
                        {
                            days.map(day => <button>{day}</button>)
                        }
                    </div>
                </div>
                <div className='consultation-charge'>
                    <p>Consultation Charge</p>
                    <input type="number" />
                </div>
            </div>
            <div style={{ display: slotOpen ? 'block' : 'none' }}>
                <p>Add Slots</p>
                <div className='time-input'>
                    <input type="date" />
                    <span>-</span>
                    <input type="date" />
                </div>
            </div>
            <div>
                <p>Clinic Timings <AddOutlinedIcon onClick={() => setTimingOpen(!timingOpen)} className='plus-btn-icon' /></p>
                <div className='operating-days-btn'>
                    {
                        days.map(day => <button>{day}</button>)
                    }
                </div>
            </div>
            <div style={{ display: timingOpen ? 'block' : 'none' }}>
                <p >Add Timing</p>
                <div className='time-input'>
                    <input type="date" />
                    <span>-</span>
                    <input type="date" />
                </div>
            </div>
            <button style={{ backgroundColor: '#00b4d8' }} className='edit-btn'>Edit</button>
        </div>
    );
};

export default DC_Avialablity;