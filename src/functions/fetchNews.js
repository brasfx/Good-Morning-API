import dotenv from 'dotenv';
dotenv.config();

export default async function fetchNews() {
  const NEWS_URL = process.env.REACT_APP_NEWS_URL;
  const NEWS_KEY = process.env.REACT_APP_NEWS_KEY;

  const response = await window.fetch(
    `${NEWS_URL}/top-headlines?country=br&apiKey=${NEWS_KEY}`
  );
  const news = await response.json();
  const articles = news.articles.map(
    ({ content, description, url, urlToImage, title }) => {
      return {
        content,
        description,
        url,
        urlToImage,
        title,
      };
    }
  );
  return articles;
}
