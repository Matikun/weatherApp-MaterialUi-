import convertUnits from 'convert-units';
export const getCityCode = (city, countryCode) => `${city}-${countryCode}`;

export const toCelsius = (farenheit) => {
	return Number(convertUnits(farenheit).from('K').to('C').toFixed(0));
};

export const capitalize = (string) => {
	return string.chartAt(0) + string.slice(1);
};
