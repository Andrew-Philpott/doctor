import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { GeocodeService } from './js/geocodeService';
import { DoctorService } from './js/doctorService';
import { createAllDoctors, createAllDoctorsContainerHtml, displayZeroMatchesMessage } from './js/interface-logic';

$(document).ready(function() {
  $("#find-doctors").click(function() {
    let inputtedCity = $("#city-input").val();
    let inputtedMedicalIssue = $("#medical-issue-input").val();
    let inputtedDoctorName =  $("#doctor-name-input").val();
    $("#city-input").val("");
    $("#medical-issue-input").val();
    $("#doctor-name-input").val();
    if(inputtedCity) {
      let doctorsContainer = document.getElementById("doctors-container");
      let zeroMatchError = document.getElementById("zero-matches");
      if(doctorsContainer) {
        doctorsContainer.remove();
      }
      if(zeroMatchError) {
        zeroMatchError.remove();
      }
      createAllDoctorsContainerHtml();
      (async () => {
        const geocodeService = new GeocodeService();
        const geocodeResponse = await geocodeService.asyncCoordinatesForCity(inputtedCity);
        const coords = [geocodeResponse[0].lat, geocodeResponse[0].lon];
        const doctorService = new DoctorService();
        let doctorResponse;
        if(inputtedDoctorName && inputtedMedicalIssue) {
          doctorResponse = await doctorService.asyncDoctorsForMedicalIssuesForCityCall(coords, inputtedMedicalIssue, inputtedDoctorName);
        } else if (inputtedMedicalIssue) {
          doctorResponse = await doctorService.asyncDoctorsForMedicalIssuesForCityCall(coords, inputtedMedicalIssue);
        } else {
          doctorResponse = await doctorService.asyncDoctorsForMedicalIssuesForCityCall(coords, inputtedDoctorName);
        }
        if(doctorResponse.data.length === 0) {
          displayZeroMatchesMessage();
        }
        createAllDoctors(doctorResponse);
      })();
    }
  })
});