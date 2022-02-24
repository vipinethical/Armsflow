import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import React from 'react';
import './Patient_Personal_Details.scss';


const Patient_Personal_Details = () => {
    return (
        <div className='personal-details-main'>
            <div className='verified-img-part'>
                <div className='verified-img'></div>
            </div>
            <div className='patient-personal-details-form'>
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
                        <label for='email'>Age</label>
                        <input id='email' type="text" />
                    </div>
                    <div>
                        <label for='experience'>E-mail</label>
                        <input id='experience' type="text" />
                    </div>
                    <div>
                        <label for='holdingBlock'>Contact no</label>
                        <input id='holdingBlock' type="text" />
                    </div>
                    <div>
                        <label for='area'>Gender</label>
                        <input id='area' type="text" />
                    </div>
                    <div>
                        <label for='city'>H. no/Block no</label>
                        <input id='city' type="text" />
                    </div>
                    <div>
                        <label for='state'>Area</label>
                        <input id='state' type="text" />
                    </div>
                    <div className='file-upload-div'>
                        <label>Upload Old prescription (If any)</label>
                        <label className='input-file' for='file'>
                            <CloudUploadIcon />
                        </label>
                        <input className='custom-file-upload' id='file' type="file" />
                    </div>
                    <div>
                        <label for='registration'>City</label>
                        <input id='registration' type="text" />
                    </div>
                    <div>
                        <label for='registration'>State</label>
                        <input id='registration' type="text" />
                    </div>
                    <div>
                        <label for='registration'>Pincode</label>
                        <input id='registration' type="text" />
                    </div>
                    <div>
                        <label for='specification'>Specification</label>
                        <textarea id='specification' type="text" />
                        <button style={{ backgroundColor: '#FFBC2E' }} >Edit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Patient_Personal_Details;