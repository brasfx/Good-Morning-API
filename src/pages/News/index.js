import React, { useState, useEffect } from 'react';
import fetchNews from '../../functions/fetchNews';
import NewsCard from '../../components/news/newsCard';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import Loading from '../../components/loading';

export default function News() {
  const [news, setNews] = useState([]); // constante para guardar o estado e uma array com informações das noticias

  // aqui iremos renderizar em tela nossas noticias, que sempre que chamadas, irão atualizar
  //sempre que atualizada a página, nosso hook useEffect nos possibilitará preencher o estado das noticias, antes vazio
  useEffect(() => {
    async function getNews() {
      try {
        const news = await fetchNews(); // chama a função fetchNews que faz conexão com a API
        setNews(news); // passa o retorno da função pro array no useState
      } catch (err) {
        console.log(err); // só pra printar se der algum erro
      }
    }

    getNews(); // chama a função assincrona de dentro pra realizar a busca na API
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

/* Na página News ou noticias, importamos os componentes de Loading, Navbar, Footer e o principal que é o NewsCard
   importamos também a função fetchNews, que faz nossa conexão com a API de noticias  e retorna os dados 
   O NewsCard faz referência a página de noticias, onde está contida nossas requisições para API, 
   e odne disponibilizamos as principais noticiais do dia */
