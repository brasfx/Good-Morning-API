export default function mapDataToWeatherInterface(data) {
  const mapped = {
    location: data.name, // nome do local
    condition: data.cod, // cod do local(usar como key)
    country: data.sys.country, // nome do pais
    date: data.dt * 1000, // converter em milisegundos
    description: data.weather[0].description, //descricao 
    feels_like: Math.round(data.main.feels_like), //sensacao termica
    temp_max: Math.round(data.main.temp_max), // temperatura max
    temp_min: Math.round(data.main.temp_min), // temperatura min
    humidity: data.main.humidity, // umidade
    icon_id: data.weather[0].id, // vento
    sunrise: data.sys.sunrise * 1000, // converter segundos em milisegundos
    sunset: data.sys.sunset * 1000, // converter segundos em milisegundos
    temperature: Math.round(data.main.temp),
    timezone: data.timezone / 3600, // converter segundos em horas
    wind_speed: Math.round(data.wind.speed * 3.6), // converter m/s em km/h
    
  };
  // adicionar previsao dos proximos 5 dias
  if (data.dt_txt) {
    mapped.dt_txt = data.dt_txt;
  }

  if (data.weather[0].icon) {
    mapped.icon = data.weather[0].icon;
  }

  if (data.main.temp_min && data.main.temp_max) {
    mapped.max = Math.round(data.main.temp_max);
    mapped.min = Math.round(data.main.temp_min);
  }

  // remove undefined fields
  Object.entries(mapped).map(
    ([key, value]) => value === undefined && delete mapped[key],
  );

  return mapped;
}