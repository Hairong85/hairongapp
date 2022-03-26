import React from 'react';
import PatientInformation from '../Patient/PatientInformation';
import Diagnosis from '../Patient/Diagnosis';

const Home = () => {
      return (
            <div>
                  <h2>Home</h2>
                  <PatientInformation />
                  <Diagnosis />
            </div>
      )
}

export default Home
