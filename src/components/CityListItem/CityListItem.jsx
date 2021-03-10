import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import CityInfo from '../CityInfo';
import Weather from '../Weather';

const CityListItem = ({ weather, city, countryCode, eventOnClickCity }) => {
	return (
		<ListItem onClick={() => eventOnClickCity(city, countryCode)} button>
			<Grid container justify="center" alignItems="center">
				<Grid item sm={8} xs={12}>
					<CityInfo city={city} countryCode={countryCode} />
				</Grid>

				<Grid item sm={4} xs={12}>
					<Weather
						temperature={weather?.temperature}
						state={weather?.state}
					/>
				</Grid>
			</Grid>
		</ListItem>
	);
};

CityListItem.propTypes = {
	city: PropTypes.string.isRequired,
	countryCode: PropTypes.string.isRequired,
	eventOnClickCity: PropTypes.func.isRequired,
};

export default CityListItem;
