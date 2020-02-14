import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { GeocodeService } from './js/geocodeService';
import { DoctorService } from './js/doctorService';
import { createAllDoctors, createAllDoctorsContainerHtml } from './js/interface-logic';

$(document).ready(function() {
  $("#find-doctors").click(function() {
    let inputtedCity = $("#city-input").val();
    let inputtedMedicalIssue = $("#medical-issue-input").val();
    let inputtedDoctorName =  $("#doctor-name-input").val();
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
      // doctorResponse = await doctorService.asyncDoctorsForMedicalIssuesForCityCall(inputtedMedicalIssue, coords);
     // console.log(doctorResponse);
      createAllDoctorsContainerHtml();
      createAllDoctors(doctorResponse);
      //console.log(doctors.length);
      //const doc = await doctorService.asyncDoctorsWithMatchingNameForCityCall(coords);
    //console.log(doc);
    })();
  })
});