import React from 'react';

export default function Footer() {
  return (
    <footer className="items-center mt-20 h-10 text-center">
      <p className="text-center items-center ">
        <span className="text-center text-gray-600">
          Direitos reservados{' '}
          <a
            className="text-center text-indigo-600"
            href="https://github.com/brasfx/Good-Morning-API"
            target="_blank"
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
