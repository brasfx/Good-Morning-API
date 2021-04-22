import mapDataToWeatherInterface from './mapDataToWeatherInterface';

export default async function fetchForecast(location, units) {
  const API_URL = process.env.REACT_APP_API_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;

  const response = await window.fetch(
    `${API_URL}/forecast/?q=${location}&units=${units}&lang=pt_br&APPID=${API_KEY}`
  );
  const forecast = await response.json();

  if (response.ok) {
    if (Object.entries(forecast).length) {
      return forecast.list
        .filter((f) => f.dt_txt.match(/09:00:00/))
        .map(mapDataToWeatherInterface);
    }
  } else {
    const error = new Error(`Não há resultados para "${location}"`);
    return Promise.reject(error);
  }
}
