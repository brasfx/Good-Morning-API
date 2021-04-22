import React from 'react';
import News from './new';

export default function NewsCard({ news }) {
  return (
    <div className="items-center flex-row items-center flex-wrap justify-center p-30 mt-10 ">
      <p className="tracking-wide text-4xl font-bold text-center font-serif">
        Principais noticias do dia
      </p>
      {news.map((article) => {
        return (
          <News
            key={article.url}
            title={article.title}
            description={article.description}
            url={article.url}
            image={article.image}
            publishedAt={article.publishedAt}
            name={article.name}
            sourceUrl={article.sourceUrl}
          />
        );
      })}
    </div>
  );
}
