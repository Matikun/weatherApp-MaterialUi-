import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const WeatherDetails = ({ humidity, wind }) => {
	return (
		<>
			<Typography style={{ margin: '1em' }} variant="subtitle1">
				Humedad: {humidity}%
			</Typography>
			<Typography style={{ margin: '1em' }} variant="subtitle1">
				Viento: {wind} km/h
			</Typography>
		</>
	);
};

WeatherDetails.propTypes = {
	humidity: PropTypes.number.isRequired,
	wind: PropTypes.number.isRequired,
};

export default WeatherDetails;
