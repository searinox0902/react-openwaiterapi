
import clouds from './../assets/weather/clouds.png'
import drizzle from './../assets/weather/drizzle.png'
import rain from './../assets/weather/rain.png'
import snow from './../assets/weather/snow.png'
import clear from './../assets/weather/clear.png'
import storm from './../assets/weather/storm.png'

function weatherDescription(status) {

    if(status){
        status = status.toLowerCase();
    }

    let path = '';

    switch (status) {
        case 'rain': 
            path = rain;
        break;

        case 'drizzle': 
            path = drizzle;
        break;

        case 'snow': 
            path = snow;
        break;

        case 'clear': 
            path = clear;
        break;

        case 'clouds': 
            path = clouds;
        break;

        case 'thunderstorm': 
            path = storm;
        break;
        
        default:
            path = clouds;
        break;
    }
   
    return path
}

export default weatherDescription;