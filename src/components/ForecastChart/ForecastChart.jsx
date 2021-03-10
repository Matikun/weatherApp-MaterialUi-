import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';
import { WeatherContextState } from '../../WeatherContext/WeatherContext';
import { forecastColors } from '../../Styles/foreCastColors';

const ForecastChart = ({ data }) => {
	const { data: darkState } = useContext(WeatherContextState);
	const { grey, lightBlue, blueWithe, orange } = forecastColors;
	const minColor = darkState.darkMode ? grey : blueWithe;
	const maxColor = darkState.darkMode ? orange : lightBlue;
	return (
		<ResponsiveContainer height={250} width={'95%'}>
			<LineChart
				data={data}
				margin={{ top: 20, bottom: 20, left: 5, right: 5 }}
			>
				<XAxis dataKey="dayHour" />
				<YAxis />
				<CartesianGrid />
				<Line type="monotone" stroke={maxColor} dataKey="max"></Line>
				<Line type="monotone" stroke={minColor} dataKey="min"></Line>
				<Tooltip />
				<Legend />
			</LineChart>
		</ResponsiveContainer>
	);
};

ForecastChart.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			dayHour: PropTypes.string.isRequired,
			min: PropTypes.number.isRequired,
			max: PropTypes.number.isRequired,
		})
	).isRequired,
};

export default ForecastChart;
