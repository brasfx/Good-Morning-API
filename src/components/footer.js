import React from 'react';

export default function Footer() {
  return (
    <footer className="items-center mt-20" style={{paddingBottom:'100px'}}>
      <p className="text-center">
        <span className="text-gray-600">
          Direitos reservados a  {' '}
          <a className="text-indigo-600" href="https://github.com/">
            Good Morning API
          </a>
          <span className="ml-4">&copy;2021 - now</span>
        </span>
      </p>

    </footer>
  );
};

