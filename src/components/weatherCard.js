import React, { useState } from 'react';
import dayjs from 'dayjs';
import Forecast from './forecast';
import * as weatherIcons from '../json/icons';
import * as recommendations from '../json/recommendations';
import utc from 'dayjs/plugin/utc';
import * as isLeapYear from 'dayjs/plugin/isLeapYear';
import 'dayjs/locale/pt-br';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
dayjs.extend(utc);
dayjs.extend(isLeapYear);
dayjs.locale('pt-br');

export default function WeatherCard(props) {
  const iconPrefix = `wi wi-`;
  const { weather, forecast, units, onUnitsChange } = props;
  const [isSettingsMenuOpened, setIsSettingsMenuOpened] = useState(false);
  const [isMetric, setIsMetric] = useState(
    units.match(/metric/i) ? true : false
  );

  const date = dayjs().isValid(weather.date) ? weather.date : '';
  const currentTime = dayjs.utc(date).utcOffset(weather.timezone).format();
  const sunrise = dayjs
    .utc(weather.sunrise)
    .utcOffset(weather.timezone)
    .format();
  const sunset = dayjs
    .utc(weather?.sunset)
    .utcOffset(weather.timezone)
    .format();
  const isDay = currentTime > sunrise && currentTime < sunset ? true : false;
  const description =
    weather.description.charAt(0).toUpperCase() + weather.description.slice(1);
  const icon =
    iconPrefix +
    weatherIcons.default[isDay ? 'day' : 'night'][weather.icon_id].icon;
  const recommendation =
    recommendations.default[isDay ? 'day' : 'night'][weather.icon_id]
      .recommendation;

  const toggleSettingsMenu = () => {
    setIsSettingsMenuOpened(!isSettingsMenuOpened);
  };

  const handleChange = () => {
    onUnitsChange(units.match(/metric/i) ? 'imperial' : 'metric');
    setIsMetric(!isMetric);
    toggleSettingsMenu();
  };

  return (
    <>
      <div className="shadow-lg rounded-xl h-auto overflow-hidden w-full md:w-3/5 lg:w-1/2 m-auto mt-4 p-10 pt-0">
        <div className="m-4">
          <div className="sm">
            <p className="tracking-wide text-2xl font-semibold font-serif">
              {weather.location}, {weather.country}
            </p>
            <p className="text-gray-500 tracking-wide ">
              {dayjs(date).format('dddd')},{' '}
              {dayjs.utc(date).utcOffset(weather.timezone).format('h:mm A')},{' '}
              {description}
            </p>
          </div>
          <div className="flex flex-row justify-between my-8 lg:my-4 text-5xl lg:text-6xl tracking-wide ">
            <span className="mt-6 md:mt-10 text-gray-500 font-light">
              {weather.temperature}&deg;
              <span className="flex flex-col text-gray-500 font-normal tracking-wide text-base mt-1">
                Sensacão térmica: {weather.feels_like}&deg;
              </span>{' '}
            </span>
            <div className="text-8xl sm:text-9xl mt-4 text-indigo-500">
              <span className={icon}></span>
            </div>
          </div>
          <div className="text-indigo-500 mt-1">
            <span className="wi wi-strong-wind text-xl"></span>
            <span className="ml-1 mr-2 text-gray-500 tracking-wide">
              Vento: {weather.wind_speed}
              {isMetric ? ` km/h` : ` mp/h`}
            </span>
            <span className="wi wi-humidity text-xl"></span>
            <span className="ml-1 text-gray-500 tracking-wide">
              Umidade: {weather.humidity}%
            </span>
          </div>
          <div className="mt-10 text-center text-xl text-gray-500 tracking-wide font-mono">
            {recommendation}
          </div>
          <Forecast forecast={forecast} />
        </div>
      </div>
      <div className="w-full md:w-3/5 lg:w-1/2 m-auto mt-4">
        <button
          type="button"
          className="text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-green-200"
          id="user-menu"
          aria-expanded="false"
          aria-haspopup="true"
          onClick={toggleSettingsMenu}
        >
          <SettingsApplicationsIcon className="text-lg text-red-600" />
        </button>
        {isSettingsMenuOpened ? (
          <div
            className="origin-top mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu"
          >
            <ul>
              <li
                onClick={handleChange}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Mudar unidade
                <br />
                <span className="text-xs text-indigo-500">
                  {isMetric ? 'Imperial' : 'Métrica'}{' '}
                  {isMetric ? `(F°, mph)` : `(C°, m/s)`}
                </span>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
}
