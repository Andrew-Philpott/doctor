export class DoctorService {
  constructor() {

  }

  async asyncDoctorsForCityCall(medicalIssues, coordinates) {
    const medicalIssuesEncoded = encodeURIComponent(medicalIssues);
    const coordinatesEncoded = encodeURIComponent(coordinates);
    try {
      const response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${medicalIssuesEncoded}&location=${coordinatesEncoded}%2C100&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      let jsonResponse;
      if(response.ok && response.status == 200) {
        jsonResponse = await response.json();
      } else {
        jsonResponse = false;
      }
      return jsonResponse;
    } catch (error) {
      console.log(error);
      return false; 
    }
  }
}