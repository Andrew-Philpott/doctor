export class GeocodeService {
  constructor() {

  }

  async asyncCoordinatesForCity(city) {
    const embedded = encodeURIComponent(city);
  try {
    const response = await fetch(`https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_KEY}&q=${embedded}&format=json`);
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