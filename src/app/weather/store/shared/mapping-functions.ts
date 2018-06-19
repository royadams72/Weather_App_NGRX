import { Weather, Cities } from "../../../model/weather";

// TO BE IMPLEMENTED IF NF-RX IS USED

export function mapCityWeatherToView(cityWeather:Weather){
    let c:Cities = {city:cityWeather.city.name, temps: {temp1: cityWeather.list[4].main.temp, temp2: cityWeather.list[6].main.temp, temp3:cityWeather.list[0].main.temp, temp4: cityWeather.list[2].main.temp}}
      console.log(cityWeather);
    return c;
}