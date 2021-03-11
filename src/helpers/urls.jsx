const API_KEY = YOUR API KEY HERE;

export const getWeatherUrl = ({ city, countryCode }) =>
	`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${API_KEY}`;

export const getForecastUrl = ({ city, countryCode }) =>
	`https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${API_KEY}`;
