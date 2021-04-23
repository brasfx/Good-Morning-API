import React from 'react';

export default function AboutPage() {
  return (
    <div className="shadow shadow-lg rounded-xl h-auto overflow-hidden w-full md:w-3/5 lg:w-1/2 m-auto mt-10 mb-10 p-10 content-center  flex flex-col self-center text-justify">
      <section className="font-serif">
        <p className="pt-2 pb-5 font-bold text-2xl text-center font-serif">
          Good Morning API
        </p>
        O Bom dia Brasil é uma página desenvolvida para disciplina de Sistemas
        Distribuidos do curso de Engenharia de Computação da Universidade
        Federal de Rio Grande - FURG.
        <p>
          Good Morning API é nosso serviço onde disponibilizamos ao usuário ter
          acesso a previsão do tempo de acordo sua cidade e noticias que estão
          no trend topic do país no momento.
        </p>
      </section>
      <section>
        <p className="pt-5 pb-2 font-bold text-xl font-serif">Objetivo</p>
        <p className="font-serif">
          Esse trabalho aborda aplicações de cliente/servidor para web. Foi
          implementada a parte do cliente, o servidor foi acessado via API.
          Dessa forma, o trabalho consiste em apresentar um sistema web
          (cliente) que use alguma(s) funcionalidade(s) de um servidor web.
        </p>
      </section>
      <section className="font-serif">
        <p className="pt-5 pb-2 font-bold text-xl font-serif">
          API's utilizadas
        </p>

        <p>
          <a
            target="_blank"
            href="https://openweathermap.org/api"
            className="hover:text-indigo-800 text-indigo-600"
          >
            Weather API
          </a>{' '}
          - para realizar consulta do tempo em diversas localidades e a previsão
          futura.
        </p>
        <p>
          {' '}
          <a
            target="_blank"
            href="https://gnews.io/"
            className="hover:text-indigo-800 text-indigo-600"
          >
            GNews API
          </a>{' '}
          - para capturar as principais noticias do dia em nosso país.
        </p>
      </section>
      <section>
        <p className="pt-5 pb-2 font-bold text-xl font-serif">
          Tecnologias utilizadas
        </p>
        <p>
          {' '}
          <a
            target="_blank"
            href="https://www.javascript.com/"
            className="hover:text-indigo-800 text-indigo-600"
          >
            😍 JavaScript
          </a>{' '}
        </p>

        <p>
          {' '}
          <a
            target="_blank"
            href="https://pt-br.reactjs.org/"
            className="hover:text-indigo-800 text-indigo-600"
          >
            ⚛️ React
          </a>{' '}
        </p>
        <p>
          {' '}
          <a
            target="_blank"
            href="https://tailwindcss.com/"
            className="hover:text-indigo-800 text-indigo-600"
          >
            🌈 Tailwind CSS
          </a>{' '}
        </p>
        <p>
          {' '}
          <a
            target="_blank"
            href="https://vercel.com/"
            className="hover:text-indigo-800 text-indigo-600"
          >
            ⚙ Vercel
          </a>{' '}
        </p>
      </section>
      <section className="font-serif">
        <p className="pt-5 pb-2 font-bold text-xl font-serif">
          Desenvolvedores
        </p>
        <p>
          {' '}
          <a
            target="_blank"
            href="https://github.com/brasfx"
            className="hover:text-indigo-800 text-indigo-600"
          >
            Davi Ribeiro
          </a>{' '}
        </p>
        <p>
          {' '}
          <a
            target="_blank"
            href="https://github.com/pevferreira"
            className="hover:text-indigo-800 text-indigo-600"
          >
            Pedro Ferreira
          </a>{' '}
        </p>
      </section>
      <section className="font-serif">
        <p className="pt-5 pb-2 font-bold text-xl font-serif">Professor</p>
        <p>
          {' '}
          <a
            target="_blank"
            href="http://www.dalmazo.com/"
            className="hover:text-indigo-800 text-indigo-600"
          >
            Bruno Dalmazo
          </a>{' '}
        </p>{' '}
      </section>
    </div>
  );
}
