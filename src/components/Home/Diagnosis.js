import React from 'react'
import {useAuth0} from '@auth0/auth0-react';

const Diagnosis = () => {
      const {loginWithRedirect, logout, isAuthenticated} = useAuth0();

      return (
            isAuthenticated?(

         <div class="container">
            <h1>Patient Diagnosis</h1>
            <form>
              <div class="row">
                <div class="col mb-3">
                  <label for="date" class="form-label">Date</label>
                  <input type="text" class="form-control" id="date"/>
                </div>
                <div class="col mb-3">
                  <label for="diagnosis" class="form-label">Diagnosis</label>
                  <textarea  type="text" class="form-control" id="diagnosis" rows="5"></textarea>
                </div>
              </div>
              <p>
              Treatment:
              </p>
      
              <div class="row">
                <div class=" col mb-3">
                  <label class="form-label">Acuputure Point</label>
                </div>
                <div class=" col mb-3">
                  <label class="form-label">Duration in Minute</label>
                </div>
                <div class=" col mb-3">
                  <label  class="form-label">Herb</label>
                </div>
                <div class=" col mb-3">
                  <label  class="form-label">Day of Take</label>
                </div>
              </div>
      
              <div class="row">
                <div class=" col mb-3">
                  <select class="form-select" aria-label="Acuputure Point 1" id="acuputurePoint1">
                    <option selected>Open this select menu</option>
                    <option value="1">Acuputure Point 1</option>
                    <option value="1">Acuputure Point 2</option>
                    <option value="1">Acuputure Point 3</option>
                    <option value="1">Acuputure Point 4</option>
                    <option value="1">Acuputure Point 5</option>
                  </select>
                </div>
      
                <div class=" col mb-3">
                  <select class="form-select" aria-label="Duration in Minute 1" id="durationInMinute1">
                    <option selected>Open this select menu</option>
                    <option value="1">Duration in Minute 1</option>
                    <option value="1">Duration in Minute 2</option>
                    <option value="1">Duration in Minute 3</option>
                    <option value="1">Duration in Minute 4</option>
                    <option value="1">Duration in Minute 5</option>
                  </select>
                </div>
      
                <div class=" col mb-3">
                  <select class="form-select" aria-label="Herb 1" id="herb1">
                    <option selected>Open this select menu</option>
                    <option value="1">Herb 1</option>
                    <option value="1">Herb 2</option>
                    <option value="1">Herb 3</option>
                    <option value="1">Herb 4</option>
                    <option value="1">Herb 5</option>
                  </select>
                </div>
      
                <div class=" col mb-3">
                  <select class="form-select" aria-label="Day of Take 1" id="dayOfTake1">
                    <option selected>Open this select menu</option>
                    <option value="1">Day of Take 1</option>
                    <option value="1">Day of Take 2</option>
                    <option value="1">Day of Take 3</option>
                    <option value="1">Day of Take 4</option>
                    <option value="1">Day of Take 5</option>
                  </select>
                </div>
              </div>
            <div class="row">

            </div>
            <div class=" col mb-3">
                  <select class="form-select" aria-label="Acuputure Point 1" id="acuputurePoint1">
                    <option selected>Open this select menu</option>
                    <option value="1">Acuputure Point 1</option>
                    <option value="1">Acuputure Point 2</option>
                    <option value="1">Acuputure Point 3</option>
                    <option value="1">Acuputure Point 4</option>
                    <option value="1">Acuputure Point 5</option>
                  </select>
                </div>
      
                <div class=" col mb-3">
                  <select class="form-select" aria-label="Duration in Minute 1" id="durationInMinute1">
                    <option selected>Open this select menu</option>
                    <option value="1">Duration in Minute 1</option>
                    <option value="1">Duration in Minute 2</option>
                    <option value="1">Duration in Minute 3</option>
                    <option value="1">Duration in Minute 4</option>
                    <option value="1">Duration in Minute 5</option>
                  </select>
                </div>
      
                <div class=" col mb-3">
                  <select class="form-select" aria-label="Herb 1" id="herb1">
                    <option selected>Open this select menu</option>
                    <option value="1">Herb 1</option>
                    <option value="1">Herb 2</option>
                    <option value="1">Herb 3</option>
                    <option value="1">Herb 4</option>
                    <option value="1">Herb 5</option>
                  </select>
                </div>
      
                <div class=" col mb-3">
                  <select class="form-select" aria-label="Day of Take 1" id="dayOfTake1">
                    <option selected>Open this select menu</option>
                    <option value="1">Day of Take 1</option>
                    <option value="1">Day of Take 2</option>
                    <option value="1">Day of Take 3</option>
                    <option value="1">Day of Take 4</option>
                    <option value="1">Day of Take 5</option>
                  </select>
                </div>
            </form>
            </div>):(''));
      
}

export default Diagnosis
