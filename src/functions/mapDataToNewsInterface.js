export default function mapDataToNewsInterface(articles) {
  const mapped = {
    title: articles.title,
    content: articles.content,
    description: articles.description,
    url: articles.url,
    urlToImage: articles.urlToImage,
    publishedAt: articles.publishedAt,
  };

  // remove undefined fields
  Object.entries(mapped).map(
    ([key, value]) => value === undefined && delete mapped[key]
  );

  return mapped;
}
