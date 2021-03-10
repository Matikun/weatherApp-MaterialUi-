import Forecast from './Forecast';

export default {
	title: 'Forecast',
	component: Forecast,
};
const foreCastItemList = [
	{ weekDay: 'lunes', hour: 20, state: 'clear', temperature: 24 },
	{ weekDay: 'martes', hour: 13, state: 'rain', temperature: 11 },
	{ weekDay: 'miercoles', hour: 15, state: 'clear', temperature: 29 },
	{ weekDay: 'jueves', hour: 11, state: 'rain', temperature: 9 },
	{ weekDay: 'viernes', hour: 10, state: 'clouds', temperature: 17 },
	{ weekDay: 'sabado', hour: 22, state: 'snow', temperature: 14 },
	{ weekDay: 'domingo', hour: 18, state: 'drizzle', temperature: 10 },
];

export const ForecastExample = () => (
	<Forecast forecastItemList={foreCastItemList} />
);

export { foreCastItemList };
