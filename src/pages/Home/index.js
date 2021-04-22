import React, { useState, useEffect, useMemo } from 'react';
import debounce from 'lodash-es/debounce';
import fetchWeather from '../../functions/fetchWeather';
import fetchForecast from '../../functions/fetchForecast';
import userLocation from '../../functions/fetchUserLocation';
import WeatherCard from '../../components/weatherCard';
import Search from '../../components/search';
import Loading from '../../components/loading';
import Footer from '../../components/footer';
import NavBar from '../../components/navbar';

export default function Home() {
  const searchTimeout = 1000;
  const [location, setLocation] = useState('');
  const [error, setError] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [weather, setWeather] = useState({});
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [units, setUnits] = useState('metric');

  const debounceSearch = useMemo(
    () =>
      debounce((searchTerm) => {
        setDebouncedSearchTerm(searchTerm);
      }, searchTimeout),
    []
  );

  const handleLocationChange = (event) => {
    if (event.target.value) {
      setIsSearching(true);
    }
    debounceSearch(event.target.value);
  };

  const handleUnitsChange = (newUnits) => {
    setUnits(newUnits);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      setLocation(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, isSearching]);

  useEffect(() => {
    async function getWeather() {
      setError(null);
      setIsSearching(false);

      try {
        const weather = await fetchWeather(location, units);
        setWeather(weather);
      } catch (err) {
        setError(err);
      }
    }

    getWeather();
  }, [location, units]);

  useEffect(() => {
    async function getForecast() {
      setError(null);
      setIsSearching(false);

      try {
        const forecast = await fetchForecast(location, units);
        setForecast(forecast);
      } catch (err) {
        setError(err);
      }
    }

    getForecast();
  }, [location, units]);

  useEffect(() => {
    async function getUserLocation() {
      setError(null);
      setIsSearching(false);
      try {
        const user = await userLocation();
        setLocation(user);
        setDebouncedSearchTerm(user);
      } catch (err) {
        setError(err);
      }
    }
    getUserLocation();
  }, []);

  return (
    <div>
      {(weather && Object.keys(weather).length) ||
      (forecast && Object.keys(forecast).length) ? (
        <main>
          <div className="mx-auto w-5/6 md:w-full 2xl:w-full xl:w-full">
            <NavBar />
            <Search
              location={location}
              error={error}
              isSearching={isSearching}
              onLocationChange={handleLocationChange}
            />
            <WeatherCard
              forecast={forecast}
              weather={weather}
              units={units}
              onUnitsChange={handleUnitsChange}
            />
            <Footer />
          </div>
        </main>
      ) : (
        <Loading />
      )}
    </div>
  );
}
