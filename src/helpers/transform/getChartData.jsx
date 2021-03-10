import React from 'react';
import moment from 'moment';
import { toCelsius } from '../helpers';

const getChartData = (data) => {
	const daysAhead = [0, 1, 2, 3, 4];
	const days = daysAhead.map((d) => moment().add(d, 'd'));
	const getDayOfYear = (item) => moment.unix(item.dt).dayOfYear();

	const dataDays = days
		.map((day) => {
			const dataDaysArray = data.list.filter(
				(item) => getDayOfYear(item) === day.dayOfYear()
			);
			const getDaysTemperatures = (item) => item.main.temp;
			const temperaturesOfDay = dataDaysArray.map(getDaysTemperatures);
			return {
				dayHour: day.format('ddd'),
				min: toCelsius(Math.min(...temperaturesOfDay)),
				max: toCelsius(Math.max(...temperaturesOfDay)),
				hasTemps: temperaturesOfDay.length > 0,
			};
		})
		.filter(({ hasTemps }) => hasTemps);

	return dataDays;
};

export default getChartData;
