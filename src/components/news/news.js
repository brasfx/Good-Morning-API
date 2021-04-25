import React from 'react';

export default function News({
  description,
  url,
  image,
  title,
  publishedAt,
  name,
  sourceUrl,
}) {
  // caso uma imagem não venha, definimos uma padrão (não serve caso a imagem venha mas esteja quebrada)
  const imageArticles =
    image === null || image === undefined
      ? 'https://image.freepik.com/vetores-gratis/breaking-news-background_1412-10.jpg'
      : image;
  return (
    <div className="shadow shadow-lg rounded-xl h-auto overflow-hidden w-full md:w-3/5 lg:w-1/2 m-auto mt-10 mb-10 p-10 content-center  flex flex-col self-center">
      <p className="tracking-wide text-2xl font-semibold mb-5 text-center text-gray-700 hover:text-gray-900 font-serif">
        {title}
      </p>
      <section className="hero container max-w-screen-lg mx-auto pb-10 w-1/2 object-center">
        <a
          className="text-justify text-blue-600"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <img src={imageArticles} alt="news" />
        </a>
      </section>
      <p className="tracking-wide text-md  mb-5 text-justify font-serif text-sm">
        {description}
      </p>

      <p className="tracking-wide text-justify pt-5 text-xs">
        Por{' '}
        <a
          className="text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
          href={sourceUrl}
        >
          {name}
        </a>{' '}
        em {publishedAt} -{' '}
        <a
          className="text-justify text-blue-600 text-xs font-serif"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <label>{url}</label>
        </a>
      </p>
    </div>
  );
}

/*Aqui temos o componente de noticia, que é uma noticia em individual, que será usado pelo
  newsCard para rendereizar todas as noticias em tela. Recebemos os dados vindo da API, 
  estilizamos e renderizamos em tela. Usamos somente  html e css para criar a estrutura.  */