import React from 'react';
import Lottie from 'react-lottie';
import LoadingAnimation from '../assets/loading-animation';

export default function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="rounded-md p-4 max-w-sm w-full mx-auto h-40 mt-16">
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
}

/*Aqui está nosso componente de loading que é importado em todas as páginas, e foi feito usando o Lottie, 
  que é uma biblioteca que nos permite renderizar em tela animações JSON e em outros formatos.
  Em nossa animação em especifico usamos uma animação que é um JSON(que se encontra lá na pasta assets), 
  baixado no próprio site do Lottie, definimos suas configurações padrão, um tamanho. 
  Importamos aqui a animação e o reatc-lottie que é a biblioteca que disponibiliza essas funcionalidades.*/
