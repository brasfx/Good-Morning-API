import dayjs from 'dayjs';

export default function mapDataToNewsInterface(articles) {
  const mapped = {
    title: articles.title, // titulo do artigo
    content: articles.content, // conteudo do artigo
    description: articles.description, // descrição do artigo
    url: articles.url, // url do artigo
    image: articles.image, // imagem do artigo
    publishedAt: dayjs(articles.publishedAt).format('DD/MM/YYYY H:mm'), // data que o artigo foi publicado
    name: articles.source.name, // quem publicou o artigo
    sourceUrl: articles.source.url, // url da página que publicou o artigo
  };

  Object.entries(mapped).map(
    ([key, value]) => value === undefined && delete mapped[key]
  );

  return mapped;
}

/* Aqui criamos um objeto para armazenar os dados da API de acordo sua estrtura em JSON, 
   onde cada dado e seu indice serão passados com uma chave e valor para serem usadas nas noticias,
   caso tenhamos um retorno undefined ele é removido.
   Importamos o dayjs pra formatar a data para o usuário*/
