import mapDataToWeatherInterface from './mapDataToWeatherInterface';
import dotenv from 'dotenv';
dotenv.config();

export default async function fetchWeather(location, units) {
  const API_URL = process.env.REACT_APP_API_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;

  const response = await window.fetch(
    `${API_URL}/weather/?q=${location}&units=${units}&lang=pt_br&APPID=${API_KEY}`
  );
  const weather = await response.json();

  if (response.ok) {
    if (Object.entries(weather).length) {
      return mapDataToWeatherInterface(weather);
    }
  } else {
    const error = new Error(`Não há resultados para "${location}"`);
    return Promise.reject(error);
  }
}
