import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { IconContext } from 'react-icons';
import IconState, { validValues } from '../IconState';
import { Skeleton } from '@material-ui/lab';

const Weather = ({ temperature, state }) => {
	return (
		<Grid container item direction="row" justify="center" alignItems="center">
			<IconContext.Provider value={{ size: '5em' }}>
				{state ? (
					<IconState state={state} />
				) : (
					<Skeleton variant="circle" height={80} width={80} />
				)}
			</IconContext.Provider>
			{temperature ? (
				<Typography display="inline" variant="h3">
					{temperature}°
				</Typography>
			) : (
				<Skeleton variant="circle" height={80} width={80} />
			)}
		</Grid>
	);
};

Weather.propTypes = {
	temperature: PropTypes.number,
	state: PropTypes.oneOf(validValues),
};

export default Weather;
