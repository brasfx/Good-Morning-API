import React from 'react';
import dayjs from 'dayjs';

import * as weatherIcons from '../json/icons';

export default function Forecast({ forecast }) {
  const iconPrefix = 'wi wi-';

  return (
    <div className="mt-4 border-t border-blue-300">
      <div className="mt-5 mb-8 text-center text-2xl text-gray-800 tracking-wide font-serif">
        Previsão para semana
      </div>
      {forecast.map((item, index) => {
        const currentHour = dayjs(item.date).format('H');
        const isDay = currentHour > 6 && currentHour < 18 ? true : false; // definir periodo do dia
        const icon =
          iconPrefix +
          weatherIcons.default[isDay ? 'day' : 'night'][item.icon_id].icon; // setar a mudança de icones para quando é noite ou dia

        return (
          <ul className="mt-4" key={index}>
            <li className="flex flex-row text-gray-500 p-1">
              <span className="flex-1 text-left">
                {dayjs(item.dt_txt).format('dddd')}
              </span>
              <span className="text-purple-500 hover:text-purple-600 text-2xl">
                <span className={icon}></span>
              </span>
              <span className="flex-1 text-right">{item.max}&deg;</span>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

/* Aqui temos o componente de previsão dos 5 dias, que recebe os dados da fetchForecast e mostra em tela os dados.
   Importamos os icones de dentro do nosso JSON de icones da pasta json e o dayjs pra formatar a hora, 
   setamos ainda a mudança de icone de acordo seja dia ou noite.
   Aqui usamos basicamente css com tailwind para estilizar e tags html para renderização do componente em tela.
      
*/
