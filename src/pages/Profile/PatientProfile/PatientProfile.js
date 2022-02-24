import React from 'react';
import {
    BrowserRouter as Router, Link, Route, Switch, useRouteMatch
} from "react-router-dom";
import Patient_Appointment from '../../../components/Profile Components/Patient Profile Components/Patient_Appointment/Patient_Appointment';
import Patient_Personal_Details from '../../../components/Profile Components/Patient Profile Components/Patient_Personal_Details/Patient_Personal_Details';

const PatientProfile = () => {
    let { path, url } = useRouteMatch();

    return (
        <>
            <div className='container profile-main-section'>
                <h4 className='text-start profile-text'>Profile</h4>
                <p>Hello, User</p>
                <p>You have 01 appointments scheduled today</p>
                <Router>
                    <nav>
                        <Link to={`${url}/personal-details`}>Personal Details</Link>
                        <Link to={`${url}/appointments`}>Appointments</Link>
                    </nav>
                    <div className='switch-component-section'>
                        <Switch>
                            <Route path={`${path}`} exact component={Patient_Personal_Details} />
                            <Route path={`${path}/personal-details`} component={Patient_Personal_Details} />
                            <Route path={`${path}/appointments`} component={Patient_Appointment} />
                        </Switch>
                    </div>
                </Router>
            </div>
        </>
    );
};

export default PatientProfile;