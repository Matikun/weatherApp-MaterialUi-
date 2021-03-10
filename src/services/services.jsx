const cities = [
	{ city: 'Buenos Aires', countryCode: 'AR' },
	{ city: 'Washington', countryCode: 'US' },
	{ city: 'Madrid', countryCode: 'ES' },
	{ city: 'Bogota', countryCode: 'CO' },
];

export const getCities = () => cities;
export const setNewCity = (cityName, countryCode) => {
	if (!cityName || !countryCode) return;
	return !cities.find((city) => city.city === cityName)
		? cities.unshift({ city: cityName, countryCode })
		: false;
};

setNewCity();
export const getCountryByCountryCode = (countryCode) =>
	cities.filter((city) => city.countryCode === countryCode)[0].country;
