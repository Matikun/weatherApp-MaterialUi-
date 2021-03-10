import { validValues } from '../../components/IconState';
import { getCityCode, toCelsius } from '../helpers';

const getAllWeather = (response, city, countryCode) => {
	const { data } = response;
	const temperature = toCelsius(data.main.temp);
	const stateFromServer = data.weather[0].main.toLowerCase();
	const state = validValues.includes(stateFromServer) ? stateFromServer : null;
	const wind = data.wind.speed;
	const humidity = data.main.humidity;
	const propName = getCityCode(city, countryCode);
	const propValue = { temperature, state, humidity, wind };

	return {
		[propName]: propValue,
	};
};

export default getAllWeather;
