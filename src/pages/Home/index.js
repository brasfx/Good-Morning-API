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
  const [location, setLocation] = useState([]); // constantes para armazenar a localização
  const [error, setError] = useState(null); // constantes para armazenaar erros
  const [forecast, setForecast] = useState([]); // constantes para armazenar a previsão futura
  const [weather, setWeather] = useState({}); //constantes para armazenar a previsão atual
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(''); //constantes para armazenar a busca
  const [isSearching, setIsSearching] = useState(false); //constantes para armazenar o estado da busca
  const [units, setUnits] = useState('metric'); //constantes para armazenar o tipo de unidade

  const debounceSearch = useMemo(
    //aqui setamos um timer e armazenamos o estado da busca com o useMemo, para evitar buscar a cada letra digitada
    () =>
      debounce((searchTerm) => {
        setDebouncedSearchTerm(searchTerm);
      }, 1000),
    []
  );

  const handleLocationChange = (event) => {
    // um handle pra pegar o que é digitado na busca e passa o valor pra função
    if (event.target.value) {
      setIsSearching(true);
    }
    debounceSearch(event.target.value);
  };

  const handleUnitsChange = (newUnits) => {
    // um handle pra pegar a mudança de unidade (metrica ou imperial)
    setUnits(newUnits);
  };

  useEffect(() => {
    // aqui vamos atualizar o estado da página a cada busca
    if (debouncedSearchTerm) {
      setLocation(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, isSearching]);

  useEffect(() => {
    //aqui  vamos chamar a função que conecta com a API que busca a temperatura do momento e passamos a localização e unidade que queremos
    async function getWeather() {
      setError(null); //setamos que não temos erro
      setIsSearching(false); // setamos que não é uma busca

      try {
        const weather = await fetchWeather(location, units); // chamamos a função de conexão com a API
        setWeather(weather); // passamos seu retorno pra useState
      } catch (err) {
        setError(err); // enviamos um erro caso não ache o local
      }
    }

    getWeather(); // chamamos a função assincrona pra chamar a função interna de conexão com a API
  }, [location, units]);

  useEffect(() => {
    // mesma coisa da função de buscar a temperatura do momento, só que pra previsão dos 5 dias
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
    // aqui vamos chamar a função que conecta com a API que irá definir a localização do usuário de acordo seu IP e mandar como localização pra API do tempo
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
      {(weather && Object.keys(weather).length) || //um ternário pra permitir que seja feito um loading antes dos dados serem trazidos
      (forecast && Object.keys(forecast).length) ? ( //enquanto não atingirmos o tamanho do vetor de previsão do tempo, continuamos com a animação loading
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

/* Na página Home ou inicio, importamos os componentes de Loading, Navbar, Search, Footer e o principal que é o  WeatherCard.
   importamos ainda as funções fetchWeather e fecthForecast, que fazem conexão com a API do tempo e nos tras os dados.
   A Home é nossa página inicial  onde encontramso a previsão do tempo inicial do local que você se encontra, 
   previsão para os proximos 5 dias e ainda possibilita a busca de outras localidades  */
