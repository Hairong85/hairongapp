import React from 'react'
import {useAuth0} from '@auth0/auth0-react';

const PatientInformation = () => {
      const {loginWithRedirect, logout, isAuthenticated} = useAuth0();

      return (
            isAuthenticated?(
                  <div class="container">
      <h1>Patient Information</h1>
      <form>
        <div class="row">
          <div class="col mb-3">
            <label for="firstName" class="form-label">First Name</label>
            <input type="text" class="form-control" id="firstName"/>
          </div>
          <div class="col mb-3">
            <label for="dob" class="form-label">Date of Birth</label>
            <input type="text" class="form-control" id="dob"/>
          </div>
          <div class="col mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="text" class="form-control" id="email"/>
          </div>
          <div class="col mb-3">
            <label for="phone" class="form-label">Phone</label>
            <input type="text" class="form-control" id="phone"/>
          </div>
        </div>

        <div class="row">
          <div class=" col mb-3">
            <label for="lastName" class="form-label">Last Name</label>
            <input type="text" class="form-control" id="lastName"/>
          </div>
          <div class="col mb-3">
            <label for="gender" class="form-label">Gender</label>
            <select class="form-select" aria-label="Gender" id="gender">
              <option selected>Open this select menu</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Not Sure</option>
            </select>
          </div>
          <div class="col mb-3">
            <label for="hfund" class="form-label">Health Fund</label>
            <select class="form-select" aria-label="Health Fund" id="hfund">
              <option selected>Open this select menu</option>
              <option value="1">Medibank</option>
              <option value="2">Bupa</option>
              <option value="3">HCF</option>
            </select>
          </div>
          <div class="col mb-3">
            <label for="emergency" class="form-label">Emergency Contact Number</label>
            <input type="text" class="form-control" id="emergency"/>
          </div>
        </div>
        
        <div class="row">
          <div class=" col mb-3">
            <label for="occupation" class="form-label">Occupation</label>
            <input type="text" class="form-control" id="occupation"/>
          </div>
          <div class="col-9 mb-3">
            <label for="address" class="form-label">Address</label>
            <input type="text" class="form-control" id="address"/>
          </div>
        </div>
        
        <div class="row">
          <div class=" col mb-3">
            <label for="allergies" class="form-label">Allergies</label>
            <input type="text" class="form-control" id="allergies"/>
          </div>
        </div>

        <div class="row">
          <div class=" col mb-3">
            <label for="hasPacemakeImplanted" class="form-label">Has Pacemake Implanted</label>
            <select class="form-select" aria-label="Has Pacemake Implanted" id="hasPacemakeImplanted">
              <option selected>Open this select menu</option>
              <option value="1">Yes</option>
              <option value="2">No</option>
            </select>
          </div>
          <div class=" col mb-3">
            <label for="hasAbnormalBleeding" class="form-label">Has Abnormal Bleeding</label>
            <select class="form-select" aria-label="Has Abnormal Bleeding" id="hasAbnormalBleeding">
              <option selected>Open this select menu</option>
              <option value="1">Yes</option>
              <option value="2">No</option>
            </select>
          </div>
        </div>

        <p>
        Pre-existing Medical Conditions:
        </p>

        <div class="row">
          <div class=" col mb-3">
            <label class="form-label">Disease Name</label>
          </div>
          <div class=" col mb-3">
            <label class="form-label">Duration</label>
          </div>
          <div class=" col mb-3">
            <label  class="form-label">Patient Description</label>
          </div>
        </div>

        <div class="row">
          <div class=" col mb-3">
            <select class="form-select" aria-label="Disease Name 1" id="diseaseName1">
              <option selected>Open this select menu</option>
              <option value="1">Disease 1</option>
              <option value="1">Disease 2</option>
              <option value="1">Disease 3</option>
              <option value="1">Disease 4</option>
              <option value="1">Disease 5</option>
            </select>
            
          </div>

          <div class=" col mb-3">
            <input type="text" class="form-control" id="duration1"/>
          </div>
          <div class=" col mb-3">
            <input type="text" class="form-control" id="patientDescription1"/>
          </div>
        </div>

        <div class="row">
          <div class=" col mb-3">
            <select class="form-select" aria-label="Disease Name 2" id="diseaseName2">
              <option selected>Open this select menu</option>
              <option value="1">Disease 1</option>
              <option value="1">Disease 2</option>
              <option value="1">Disease 3</option>
              <option value="1">Disease 4</option>
              <option value="1">Disease 5</option>
            </select>
            
          </div>
          <div class=" col mb-3">
            <input type="text" class="form-control" id="duration2"/>
          </div>
          <div class=" col mb-3">
            <input type="text" class="form-control" id="patientDescription2"/>
          </div>
        </div>

      </form>
    </div>):(''))
      
}

export default PatientInformation
