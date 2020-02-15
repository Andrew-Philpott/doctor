import { displayHttpRequestFailure } from './interface-logic.js';

export class DoctorService {
  constructor() {

  }
  async asyncDoctorsForMedicalIssuesForCityCall(coordinates, medicalIssues) {
    const coordinatesEncoded = encodeURIComponent(coordinates);
    const medicalIssuesEncoded = encodeURIComponent(medicalIssues); 
    try {
      const response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${medicalIssuesEncoded}&location=${coordinatesEncoded}%2C100&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      let jsonResponse;
      if(response.ok && response.status == 200) {
        jsonResponse = await response.json();
      } else {
        throw new Error(response.statusText);
      }
      return jsonResponse;
    } catch (error) {
      displayHttpRequestFailure(error.message);
    }
  }
  async asyncDoctorsWithMatchingNameForCityCall(coordinates, name) {
    const coordinatesEncoded = encodeURIComponent(coordinates);
    const nameEncoded = encodeURIComponent(name);
    try {
      const response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${nameEncoded}&location=${coordinatesEncoded}%2C100&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      let jsonResponse;
      if(response.ok && response.status == 200) {
        jsonResponse = await response.json();
      } else {
        throw new Error(response.statusText);
      }
      return jsonResponse;
    } catch (error) {
      displayHttpRequestFailure(error.message);
    }
  }
  async asyncDoctorsForMedicalIssuesWithMatchingNameForCityCall(coordinates, medicalIssues, name) {
    const coordinatesEncoded = encodeURIComponent(coordinates);
    const medicalIssuesEncoded = encodeURIComponent(medicalIssues);
    const nameEncoded = encodeURIComponent(name);
    try {
      const response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${medicalIssuesEncoded}&name=${nameEncoded}&location=${coordinatesEncoded}%2C100&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      let jsonResponse;
      if(response.ok && response.status == 200) {
        jsonResponse = await response.json();
      } else {
        throw new Error(response.statusText);
      }
      return jsonResponse;
    } catch (error) {
      displayHttpRequestFailure(error.message);
    }
  }
}