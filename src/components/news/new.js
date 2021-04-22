import React from 'react';

export default function News({ description, url, urlToImage, title }) {
  const image =
    urlToImage === null
      ? 'https://image.freepik.com/vetores-gratis/breaking-news-background_1412-10.jpg'
      : urlToImage;
  return (
    <div className="shadow shadow-lg rounded-xl h-auto overflow-hidden w-full md:w-3/5 lg:w-1/2 m-auto mt-10 mb-10 p-10 content-center  flex flex-col self-center">
      <p className="tracking-wide text-2xl font-semibold mb-5 text-center">
        {title}
      </p>
      <section className="hero container max-w-screen-lg mx-auto pb-10 w-1/2 object-center">
        <a
          className="text-justify text-blue-600"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          <img src={image} alt="image-news" />
        </a>
      </section>
      <p className="tracking-wide text-md  mb-5 text-justify">{description}</p>

      <a
        className="text-justify text-blue-600"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        <label>{url}</label>
      </a>
    </div>
  );
}
