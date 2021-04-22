import dayjs from 'dayjs';

export default function mapDataToNewsInterface(articles) {
  const mapped = {
    title: articles.title,
    content: articles.content,
    description: articles.description,
    url: articles.url,
    image: articles.image,
    publishedAt: dayjs(articles.publishedAt).format('DD/MM/YYYY'),
    name: articles.source.name,
    sourceUrl: articles.source.url,
  };

  Object.entries(mapped).map(
    ([key, value]) => value === undefined && delete mapped[key]
  );

  return mapped;
}
