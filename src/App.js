import {useState,useEffect} from 'react';
import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./components/Account/Login";
import Profile from "./components/Account/Profile";
import Home from "./components/Home/Home";
import About from "./components/Home/About";
import {Nav} from 'react-bootstrap';
import PatientInformation from "./components/Patient/PatientInformation";
import Diagnosis from "./components/Patient/Diagnosis";
import fetchPatients from "./components/Patient/patientFunctions";
import Patients from "./components/Patient/Patients";



const App = ()=>{
  const [patients, setPatients] = useState([]);
  useEffect(()=>{
    const getPatients = async()=>{
      const patientsFromServer = await fetchPatients()
      setPatients(patientsFromServer)
    }
    getPatients()
  })
  return (
    <Router>
      <div>
        <Nav variant="tabs">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Profile">Profile</Nav.Link>
          <Nav.Link href="/Patients">Patients</Nav.Link>
          <Nav.Link href="/Patient">New Patient</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
        </Nav>
      </div>
      <div>
        <Login />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Patients" element={<Patients patients={patients} />} />
          <Route path="/Patient" element={<PatientInformation />} />
          <Route path="/Diagnosis" element={<Diagnosis />} />
          <Route path="/About" element={<About />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
    );
  
  
}


// class App extends React.Component{
//   render(){
//     return(
//       <h1>Hello from a class</h1>
//     )
//   }
// }
export default App;
