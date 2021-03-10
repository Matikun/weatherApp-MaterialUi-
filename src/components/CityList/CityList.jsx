import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import { useCityList } from '../../hooks/useCityList';
import { getCityCode } from '../../helpers/helpers';
import CityListItem from '../CityListItem';
import { WeatherContextState } from '../../WeatherContext/WeatherContext';
import ErrorAlert from '../ErrorAlert/ErrorAlert';

const renderCityAndCountry = (eventOnClickCity) => (
	cityAndCountry,
	weather
) => {
	const { city, countryCode } = cityAndCountry;
	return (
		<CityListItem
			key={getCityCode(city, countryCode)}
			eventOnClickCity={eventOnClickCity}
			weather={weather}
			{...cityAndCountry}
		/>
	);
};

const CityList = ({ cities, onClickCity }) => {
	const { data, actions } = useContext(WeatherContextState);
	const { allWeather } = data;
	const { error, setError } = useCityList(cities, actions, allWeather);
	return (
		<div>
			{error && <ErrorAlert error={error} setError={setError} />}
			<List>
				{cities.map((cityAndCountry) =>
					renderCityAndCountry(onClickCity)(
						cityAndCountry,
						allWeather[
							getCityCode(
								cityAndCountry.city,
								cityAndCountry.countryCode
							)
						]
					)
				)}
			</List>
		</div>
	);
};

CityList.propTypes = {
	cities: PropTypes.arrayOf(
		PropTypes.shape({
			city: PropTypes.string.isRequired,
			countryCode: PropTypes.string.isRequired,
		})
	).isRequired,
	onClickCity: PropTypes.func.isRequired,
};

export default CityList;
