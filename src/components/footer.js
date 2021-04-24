import React from 'react';

export default function Footer() {
  return (
    <footer className="items-center mt-20 h-10 text-center ">
      <p className="text-center items-center ">
        <span className="text-center text-gray-600">
          Direitos reservados{' '}
          <a
            className="text-center text-indigo-500 hover:text-indigo-800 font-serif"
            href="https://github.com/brasfx/Good-Morning-API"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Good Morning API
          </a>
          <span className="ml-4">&copy;2021</span>
        </span>
      </p>
    </footer>
  );
}

/*Footer padrão com link pro github do projeto, não há muito o que explicar, só usamos o bom e velho html e css com tailwind.
  Esse footer é exportado como componente e renderizado em todas as páginas*/
