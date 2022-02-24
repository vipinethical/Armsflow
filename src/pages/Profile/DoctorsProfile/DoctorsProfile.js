import React from 'react';
import {
    BrowserRouter as Router, Link, Route, Switch, useRouteMatch
} from "react-router-dom";
import DC_AccountDetails from '../../../components/Profile Components/Doctor Profile Components/DC_AccountDetails/DC_AccountDetails';
import DC_Appointments from '../../../components/Profile Components/Doctor Profile Components/DC_Appointments/DC_Appointments';
import DC_Avialablity from '../../../components/Profile Components/Doctor Profile Components/DC_Avialablity/DC_Avialablity';
import DC_PatientsList from '../../../components/Profile Components/Doctor Profile Components/DC_PatientsList/DC_PatientsList';
import DC_PersonalDetails from '../../../components/Profile Components/Doctor Profile Components/DC_PersonalDetails/DC_PersonalDetails';
import DC_ProfessionalDetails from '../../../components/Profile Components/Doctor Profile Components/DC_ProfessionalDetails/DC_ProfessionalDetails';
import Reviews from '../../../components/Profile Components/Reviews/Reviews';
import './DoctorsProfile.scss';

const DoctorsProfile = () => {
    let { path, url } = useRouteMatch();
    return (
        <>
            <div className='container profile-main-section'>
                <h4 className='text-start profile-text'>Profile</h4>
                <p>Hello, Dr. Ramesh S</p>
                <p>You have 20 appointments scheduled today</p>
                <Router>
                    <nav>
                        <Link to={`${url}/personal-details`}>Personal Details</Link>
                        <Link to={`${url}/professional-details`}>Professional Details</Link>
                        <Link to={`${url}/account-details`}>Account Details</Link>
                        <Link to={`${url}/patients-list`}>Patients List</Link>
                        <Link to={`${url}/appointments`}>Appointments</Link>
                        <Link to={`${url}/availability`}>Availability</Link>
                        <Link to={`${url}/reviews`}>Reviews</Link>
                    </nav>
                    <div className='switch-component-section'>
                        <Switch>
                            <Route path={`${path}`} exact component={DC_PersonalDetails} />
                            <Route path={`${path}/personal-details`} component={DC_PersonalDetails} />
                            <Route path={`${path}/professional-details`} component={DC_ProfessionalDetails} />
                            <Route path={`${path}/account-details`} component={DC_AccountDetails} />
                            <Route path={`${path}/patients-list`} component={DC_PatientsList} />
                            <Route path={`${path}/appointments`} component={DC_Appointments} />
                            <Route path={`${path}/availability`} component={DC_Avialablity} />
                            <Route path={`${path}/reviews`} component={Reviews} />
                        </Switch>
                    </div>
                </Router>
            </div>
        </>
    );
};

export default DoctorsProfile;