import mapDataToWeatherInterface from './mapDataToWeatherInterface';
import dotenv from 'dotenv';
dotenv.config();

export default async function fetchWeather(location, units) {
  const API_URL = process.env.REACT_APP_API_URL; // variaveis de ambiente pra armazenar nossas chaves secretas
  const API_KEY = process.env.REACT_APP_API_KEY;

  // aqui usamos o fetch pra conectar com a API do tempo, passando a localização e unidade que queremos, além da lingua e trazemos a previsão atual
  const response = await window.fetch(
    `${API_URL}/weather/?q=${location}&units=${units}&lang=pt_br&APPID=${API_KEY}`
  );
  const weather = await response.json(); // retornamos um JSON com os dados

  if (response.ok) {
    if (Object.entries(weather).length) {
      return mapDataToWeatherInterface(weather); // mandamos nosso retorno pra função onde iremos mapear os dados vindos da API
    }
  } else {
    const error = new Error(`Não há resultados para "${location}"`); // caso hajá algum erro pra localização, enviamos uma mensagem ao usuário
    return Promise.reject(error);
  }
}

/* Aqui usamo o fetch por ser nativo do JS e não ser necessário instalar nenhuma outra dependência,
   apesar de não ser compativel no Internet Explorer e Opera, por isso caso haja algum problema pra
   carregar a página inicial, pode ser por isso */
