import React, { useState, useEffect } from 'react';
import fetchNews from '../../functions/fetchNews';
import NewsCard from '../../components/news/news-card';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import Loading from '../../components/loading';

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function getWeather() {
      try {
        const news = await fetchNews();
        setNews(Object.assign([], news));
      } catch (err) {
        console.log(err);
      }
    }

    getWeather();
  }, []);

  return (
    <div>
      {news && Object.keys(news).length ? (
        <div className="mx-auto w-5/6 md:w-full 2xl:w-full xl:w-full">
          <NavBar />
          <NewsCard news={news} />
          <Footer />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
