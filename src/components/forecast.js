import React from 'react';
import dayjs from 'dayjs';

import * as weatherIcons from '../json/icons';

export default function Forecast (props) {

  const { forecast } = props;
  const iconPrefix = 'wi wi-';

  return (
    <div className="mt-4 border-t border-blue-300">
      <div className="mt-5 mb-8 text-center text-2xl text-gray-500 tracking-wide ">
            Previsão para semana
      </div>
      {forecast.map((item, index) => {
        const currentHour = dayjs(item.date).format('H');
        const isDay = currentHour > 7 && currentHour < 19 ? true : false;
        const icon = iconPrefix + weatherIcons.default[isDay ? 'day' : 'night'][item.icon_id].icon;

        return (
          <ul className="mt-4" key={index}>
            <li className="flex flex-row text-gray-500 p-1">
              <span className="flex-1 text-left">
                {dayjs(item.dt_txt).format('dddd')}
              </span>
              <span className="text-indigo-700 text-2xl">
                <span className={icon} style={{color:"red"}} ></span>
              </span>
              <span className="flex-1 text-right">
                {item.max}&deg;
              </span>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

