import React from 'react';
import News from './news';

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

/* Aqui temos o componente que contêm todas as noticias trazidas da API, apesar de virem mapeadas pela mapDataToNews(ela mapeia só os dados como um todo),
   é necessário mapear cada noticia novamente para poderem ser renderizadas.
   Importamos o componente New que comtém uma única noticia e enviamos para ele toda informação fornecida pela API que será usada
   para renderizarmos em tela.*/
