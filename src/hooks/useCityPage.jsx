import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { getForecastUrl } from '../helpers/urls';
import getChartData from '../helpers/transform/getChartData';
import getForecastData from '../helpers/transform/getForecastData';
import { getCityCode } from '../helpers/helpers';
import { types } from '../reducer/reducer';

const useCityPage = (actions, allChartData, allForecastItemList) => {
	//	const [chartData, setChartData] = useState(null);
	//const [forecastItemList, setForecastItemList] = useState(null);
	const { countryCode, city } = useParams();

	useEffect(() => {
		const cityCode = getCityCode(city, countryCode);

		const getForecast = async () => {
			const url = getForecastUrl({ city, countryCode });
			try {
				const { data } = await axios.get(url);
				const daysChartData = getChartData(data);
				const forecastItemListData = getForecastData(data);

				//onSetChartData({ [cityCode]: daysChartData });
				//	onSetForecastItemList({ [cityCode]: forecastItemListData });
				actions({
					type: types.CHART_DATA,
					payload: { [cityCode]: daysChartData },
				});
				actions({
					type: types.FORECAST,
					payload: { [cityCode]: forecastItemListData },
				});
			} catch (error) {
				console.log('error', error);
			}
		};

		if (
			allChartData &&
			allForecastItemList &&
			!allChartData[cityCode] &&
			!allForecastItemList[cityCode]
		) {
			getForecast();
		}
	}, [city, countryCode, actions, allChartData, allForecastItemList]);
	return { city, countryCode };
};

export default useCityPage;
