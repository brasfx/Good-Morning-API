import mapDataToWeatherInterface from './mapDataToWeatherInterface';

export default async function fetchForecast(location, units) {
  const API_URL = process.env.REACT_APP_API_URL; // variaveis de ambiente pra armazenar nossas chaves secretas
  const API_KEY = process.env.REACT_APP_API_KEY;

  // aqui usamos o fetch pra conectar com a API do tempo, passando a localização e unidade que queremos, além da lingua e trazemos a previsão de 5 dias
  const response = await window.fetch(
    `${API_URL}/forecast/?q=${location}&units=${units}&lang=pt_br&APPID=${API_KEY}`
  );
  const forecast = await response.json(); // retornamos um JSON com os dados

  if (response.ok) {
    if (Object.entries(forecast).length) {
      return forecast.list
        .filter((f) => f.dt_txt.match(/09:00:00/)) //filtramos e mandamos pra função onde iremos mapear os dados vindos da API
        .map(mapDataToWeatherInterface);
    }
  } else {
    const error = new Error(`Não há resultados para "${location}"`); // caso hajá algum erro pra localização, enviamos uma mensagem ao usuário
    return Promise.reject(error);
  }
}

/* Aqui usamo o fetch por ser nativo do JS e não ser necessário instalar nenhuma outra dependência,
   apesar de não ser compativel no Internet Explorer e Opera, por isso caso haja algum problema pra
   carregar a página inicial, pode ser por isso */
