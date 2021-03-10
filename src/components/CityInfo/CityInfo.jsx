import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../Styles/StylesForm';

const CityInfo = ({ city, countryCode }) => {
	const classes = useStyles();
	return (
		<>
			<Typography
				className={classes.capitalize}
				display="inline"
				variant="h4"
				color="secondary"
			>
				{city},
			</Typography>
			<Typography display="inline" variant="h6" color="secondary">
				{countryCode}
			</Typography>
		</>
	);
};

CityInfo.propTypes = {
	city: PropTypes.string.isRequired,
	countryCode: PropTypes.string.isRequired,
};

export default CityInfo;
