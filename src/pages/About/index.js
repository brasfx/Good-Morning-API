import React, { useState } from 'react';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import AboutPage from '../../components/about';
import Loading from '../../components/loading';

export default function About() {
  const [loading, setLoading] = useState(
    true
  ); /* constante pra guardar o estado do loading 
                                                   e dizer quando os demais componentes poderão ser renderizados em tela */

  setTimeout(() => {
    setLoading(false);
  }, 1000); // um set timeout pra dar um tempinho pra animação rodar

  // aqui renderizamos todos os componentes importados
  return (
    <div>
      {loading === true ? (
        <Loading />
      ) : (
        <div className="mx-auto w-5/6 md:w-full 2xl:w-full xl:w-full">
          <NavBar />
          <AboutPage />
          <Footer />
        </div>
      )}
    </div>
  );
}

/* Na página About ou sobre, importamos os componentes de Loading, Navbar, Footer e o principal que é o AboutPage
   O AboutPage faz referência a nossa página de sobre, onde disponibilizamos informações gerais sobre o projeto  */
