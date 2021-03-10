const API_KEY = 'a89ca95107ae7e004e941df09e136aa5';

export const getWeatherUrl = ({ city, countryCode }) =>
	`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${API_KEY}`;

export const getForecastUrl = ({ city, countryCode }) =>
	`https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${API_KEY}`;
