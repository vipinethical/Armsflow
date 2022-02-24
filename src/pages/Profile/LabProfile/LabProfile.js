import React from 'react';
import {
    BrowserRouter as Router, Link, Route, Switch, useRouteMatch
} from "react-router-dom";
import Lab_AccountDetails from '../../../components/Profile Components/Lab Profile Components/Lab_AccountDetails/Lab_AccountDetails';
import Lab_Appointments from '../../../components/Profile Components/Lab Profile Components/Lab_Appointments/Lab_Appointments';
import Lab_Availability from '../../../components/Profile Components/Lab Profile Components/Lab_Availability/Lab_Availability';
import Lab_PatientList from '../../../components/Profile Components/Lab Profile Components/Lab_PatientList/Lab_PatientList';
import Lab_PersonalDetails from '../../../components/Profile Components/Lab Profile Components/Lab_PersonalDetails/Lab_PersonalDetails';
import Lab_Tests from '../../../components/Profile Components/Lab Profile Components/Lab_Tests/Lab_Tests';
import Reviews from '../../../components/Profile Components/Reviews/Reviews';
import './LabProfile.scss';

const Profile = () => {

    let { path, url } = useRouteMatch();

    return (
        <>
            <div className='container profile-main-section'>
                <h4 className='text-start profile-text'>Profile</h4>
                <p>Hello, Delhi metro Lab</p>
                <p>You have 20 appointments scheduled today</p>
                <Router>
                    <nav>
                        <Link to={`${url}/personal-details`}>Personal Details</Link>
                        <Link to={`${url}/account-details`}>Account Details</Link>
                        <Link to={`${url}/tests`}>Tests</Link>
                        <Link to={`${url}/patients-list`}>Patients List</Link>
                        <Link to={`${url}/appointments`}>Appointments</Link>
                        <Link to={`${url}/availability`}>Availability</Link>
                        <Link to={`${url}/reviews`}>Reviews</Link>
                    </nav>
                    <div className='switch-component-section'>
                        <Switch>
                            <Route path={`${path}`} exact component={Lab_PersonalDetails} />
                            <Route path={`${path}/personal-details`} component={Lab_PersonalDetails} />
                            <Route path={`${path}/account-details`} component={Lab_AccountDetails} />
                            <Route path={`${path}/tests`} component={Lab_Tests} />
                            <Route path={`${path}/patients-list`} component={Lab_PatientList} />
                            <Route path={`${path}/appointments`} component={Lab_Appointments} />
                            <Route path={`${path}/availability`} component={Lab_Availability} />
                            <Route path={`${path}/reviews`} component={Reviews} />
                        </Switch>
                    </div>
                </Router>
            </div>
        </>
    );
};

export default Profile;