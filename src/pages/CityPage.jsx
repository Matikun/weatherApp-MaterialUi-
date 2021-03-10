import React, { useContext, useMemo } from 'react';
import Grid from '@material-ui/core/Grid';
import 'moment/locale/es';
import LinearProgress from '@material-ui/core/LinearProgress';
import AppFrame from '../components/AppFrame';
import CityInfo from '../components/CityInfo';
import Weather from '../components/Weather';
import WeatherDetails from '../components/WeatherDetails/WeatherDetails';
import ForecastChart from '../components/ForecastChart/ForecastChart';
import Forecast from '../components/Forecast/Forecast';
import useCityPage from '../hooks/useCityPage';
import { useCityList } from '../hooks/useCityList';
import { getCityCode } from '../helpers/helpers';
import { WeatherContextState } from '../WeatherContext/WeatherContext';

const CityPage = () => {
	const { data, actions } = useContext(WeatherContextState);
	const { allWeather, allChartData, allForecastItemList } = data;
	//const { onSetAllWeather, onSetChartData, onSetForecastItemList } = actions;
	const { city, countryCode } = useCityPage(
		actions,
		allChartData,
		allForecastItemList
	);

	const cities = useMemo(() => [{ city, countryCode }], [city, countryCode]);

	useCityList(cities, actions, allWeather);
	const cityCode = getCityCode(city, countryCode);
	const weather = allWeather[cityCode];
	const chartData = allChartData[cityCode];
	const forecastItemList = allForecastItemList[cityCode];
	const humidity = weather?.humidity;
	const wind = weather?.wind;

	const state = weather?.state;
	const temperature = weather?.temperature;

	return (
		<AppFrame>
			<Grid container justify="space-around" direction="column" spacing={2}>
				<Grid container item xs={12} justify="center" alignItems="flex-end">
					<CityInfo city={city} countryCode={countryCode} />
				</Grid>

				<Grid container item xs={12} justify="center">
					<Weather state={state} temperature={temperature} />
					{wind && humidity && (
						<WeatherDetails humidity={humidity} wind={wind} />
					)}
				</Grid>
				<Grid item>
					{!chartData && !forecastItemList && <LinearProgress />}
				</Grid>
				<Grid item>{chartData && <ForecastChart data={chartData} />}</Grid>
				<Grid item>
					{forecastItemList && (
						<Forecast forecastItemList={forecastItemList} />
					)}
				</Grid>
			</Grid>
		</AppFrame>
	);
};

export default CityPage;
