import ForecastItem from './ForecastItem';

export default {
	title: 'Forecast Item',
	component: ForecastItem,
};

export const ForecastItemExample = () => (
	<ForecastItem weekDay="Lunes" hour={12} state="sunny" temperature={20} />
);
