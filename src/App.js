import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./pages/AboutUs/AboutUs";
import Consultation from "./pages/Consultation/Consultation";
import Diagnostics from "./pages/Diagnostics/Diagnostics";
import DoctorDetails from "./pages/DoctorDetails/DoctorDetails";
import DoctorsList from "./pages/DoctorsList/DoctorsList";
import Home from "./pages/Home/Home";
import Appointment from "./pages/LabAppointment/Appointment";

import Testpackage from "./components/Modal/Testpackage";
import Laboratorytest from "./components/Modal/Laboratorytest";
import Appointmentdetails from "./components/Modal/Appointmentdetails";
import Doclanding from "./pages/DoctorLandingpage/Doclanding";
import LaboratristLandingpage from "./pages/LaboratristLandingpage/LaboratristLandingpage";
import Labtest from "./pages/Labtest/Labtest";
import Payments from "./pages/Payments/Payments";
import DoctorsProfile from "./pages/Profile/DoctorsProfile/DoctorsProfile";
import LabProfile from "./pages/Profile/LabProfile/LabProfile";
import PatientProfile from "./pages/Profile/PatientProfile/PatientProfile";
import AppointmentDetail from "./components/Profile Components/AppointmentDetail/AppointmentDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/consultation" exact component={Consultation} />
        <Route path="/aboutus" exact component={AboutUs} />
        <Route path="/profile" exact component={LabProfile} />
        <Route path="/labs" exact component={Diagnostics} />
        <Route path="/doctorslist" exact component={DoctorsList} />
        <Route path="/doctorsdetails" exact component={DoctorDetails} />
        <Route path="/doctorsprofile" exact component={DoctorsProfile} />
        <Route path="/labappointment" exact component={Appointment} />
        <Route path="/doclanding" exact component={Doclanding} />
        <Route path="/patientProfile" exact component={PatientProfile} />
        <Route path="/payments" exact component={Payments} />
        <Route path="/appointmentDetail" exact component={AppointmentDetail} />
        <Route path="/labtest" exact component={Labtest} />
        <Route path="/lablanding" exact component={LaboratristLandingpage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
