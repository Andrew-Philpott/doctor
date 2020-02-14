import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { GeocodeService } from './js/geocodeService';
import { DoctorService } from './js/doctorService';

$(document).ready(function() {
  $("#find-doctors").click(function() {
    let inputtedCity = $("#city-input").val();
    // let inputtedMedicalIssue = $("#medical-issue-input").val();
    // let inputtedDoctorName =  $("#doctor-name-input").val();
    (async () => {
      const geocodeService = new GeocodeService();
      const geocodeResponse = await geocodeService.asyncCoordinatesForCity(inputtedCity);
      console.log(geocodeResponse);
      let yCoord = geocodeResponse[0].lat;
      let xCoord = geocodeResponse[0].lon;
      let coords = [yCoord, xCoord];
      console.log(xCoord, yCoord);
      // if(inputtedDoctorName) {
      //   const doctorService = new DoctorService();

      // }
      // const doctorService = new DoctorService();
      //const doctorResponse = await doctorService.asyncDoctorsForMedicalIssuesForCityCall(inputtedMedicalIssue, coords);

     
      // const doc = await doctorService.asyncDoctorsWithMatchingNameForCityCall(coords);
      // console.log("names call");
      // console.log(doc);
    })();
  })
});