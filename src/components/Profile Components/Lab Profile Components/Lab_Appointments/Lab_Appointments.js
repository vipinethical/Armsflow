import React from 'react';
import './Lab_Appointments.scss';

const Appointments = () => {

    const appointmentsList = [
        {
            patientsName: "Ramsesh S.",
            testType: 'Blood Test',
            appointmentAt: 'In-Lab',
            appointmentDate: 'June 1, 2021',
            appointmentTime: '8:00',
            paymentType: 'In-Person',
            action: 'view'
        },
        {
            patientsName: "Ramsesh S.",
            testType: 'Blood Test',
            appointmentAt: 'In-Lab',
            appointmentDate: 'June 1, 2021',
            appointmentTime: '8:00',
            paymentType: 'In-Person',
            action: 'view'
        },
        {
            patientsName: "Ramsesh S.",
            testType: 'Blood Test',
            appointmentAt: 'In-Lab',
            appointmentDate: 'June 1, 2021',
            appointmentTime: '8:00',
            paymentType: 'In-Person',
            action: 'view'
        },
        {
            patientsName: "Ramsesh S.",
            testType: 'Blood Test',
            appointmentAt: 'In-Lab',
            appointmentDate: 'June 1, 2021',
            appointmentTime: '8:00',
            paymentType: 'In-Person',
            action: 'view'
        },
        {
            patientsName: "Ramsesh S.",
            testType: 'Blood Test',
            appointmentAt: 'In-Lab',
            appointmentDate: 'June 1, 2021',
            appointmentTime: '8:00',
            paymentType: 'In-Person',
            action: 'view'
        }
    ]

    return (
        <div className='appointment-section'>
            <h4>All Appointments</h4>
            <div className='appointment-table-wrapper'>
                <table>
                    <thead>
                        <tr>
                            <th>Patients Name</th>
                            <th>Test Type</th>
                            <th>Appointment At</th>
                            <th>Appointment Date</th>
                            <th>Appointment Time</th>
                            <th>Payment Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointmentsList.map(patient => (
                            <tr>
                                <td>{patient.patientsName}</td>
                                <td>{patient.testType}</td>
                                <td>{patient.appointmentAt}</td>
                                <td>{patient.appointmentDate}</td>
                                <td>{patient.appointmentTime}</td>
                                <td>{patient.paymentType}</td>
                                <td>{patient.action}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Appointments;