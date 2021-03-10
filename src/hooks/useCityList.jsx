import { useState, useEffect } from 'react';
import axios from 'axios';
import { getWeatherUrl } from '../helpers/urls';
import getAllWeather from '../helpers/transform/getAllWeather';
import { getCityCode } from '../helpers/helpers';
import { types } from '../reducer/reducer';
import { setNewCity } from '../services/services';

const useCityList = (cities, actions, allWeather) => {
	const [error, setError] = useState(null);

	useEffect(() => {
		const setWeather = async (city, countryCode) => {
			const url = getWeatherUrl({ city, countryCode });
			try {
				const propName = getCityCode(city, countryCode);
				actions({
					type: types.ALL_WEATHER,
					payload: { [propName]: {} },
				});
				const response = await axios.get(url);
				setNewCity(city, countryCode);

				const allWeatherAux = getAllWeather(response, city, countryCode);
				actions({ type: types.ALL_WEATHER, payload: allWeatherAux });
			} catch (error) {
				if (error.response) {
					// error respuesta del server
					setError('Server Error:Wrong City or Country Code');
				} else if (error.request) {
					//error por no llegar al server
					setError('Verifique la coneccion a internet');
				} else {
					//errores imprevistos
					setError('Error al Cargar los datos');
				}
			}
		};
		cities &&
			cities.forEach(({ city, countryCode }) => {
				if (!allWeather[getCityCode(city, countryCode)]) {
					setWeather(city, countryCode);
				}
			});
	}, [cities, actions, allWeather]);
	return { error, setError };
};

export { useCityList };
