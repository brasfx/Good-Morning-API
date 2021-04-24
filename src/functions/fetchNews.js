import dotenv from 'dotenv';
import mapDataToNewsInterface from './mapDataToNewsInterface';
dotenv.config();

export default async function fetchNews() {
  const NEWS_URL = process.env.REACT_APP_NEWS_URL; // variaveis de ambiente pra armazenar nossas chaves secretas
  const NEWS_KEY = process.env.REACT_APP_NEWS_KEY;

  // aqui usamos o fetch pra conectar com a API de noticias, passando nosso país
  const response = await window.fetch(
    `${NEWS_URL}/top-headlines?country=br&token=${NEWS_KEY}`
  );
  const news = await response.json(); // retornamos um JSON com os dados

  if (response.ok) {
    if (Object.entries(news).length) {
      return news.articles.map(mapDataToNewsInterface); // mandamos nosso retorno pra função onde iremos mapear os dados vindos da API
    }
  } else {
    const error = new Error(`Não há noticiais no momento!"`); // erro caso não consigamos receber nenhuma noticia
    return Promise.reject(error);
  }
}

/* Aqui usamo o fetch por ser nativo do JS e não ser necessário instalar nenhuma outra dependência,
   apesar de não ser compativel no Internet Explorer e Opera, por isso caso haja algum problema pra
   carregar a página inicial, pode ser por isso */
