import dotenv from 'dotenv';
import mapDataToNewsInterface from './mapDataToNewsInterface';
dotenv.config();

export default async function fetchNews() {
  const NEWS_URL = process.env.REACT_APP_NEWS_URL;
  const NEWS_KEY = process.env.REACT_APP_NEWS_KEY;

  const response = await window.fetch(
    `${NEWS_URL}/top-headlines?country=br&token=${NEWS_KEY}`
  );
  const news = await response.json();
  console.log(news);

  if (response.ok) {
    if (Object.entries(news).length) {
      return news.articles.map(mapDataToNewsInterface);
      // return news.articles.map(
      //   ({ content, description, url, urlToImage, title }) => {
      //     return {
      //       content,
      //       description,
      //       url,
      //       urlToImage,
      //       title,
      //     };
      //   }
      // );
    }
  } else {
    const error = new Error(`Não há noticiais no momento!"`);
    return Promise.reject(error);
  }
}
