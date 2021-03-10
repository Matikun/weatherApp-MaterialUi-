import { render } from '@testing-library/react';
import ForecastItem from './ForecastItem';

test('Forecast Item render', async () => {
	const { findByText } = render(
		<ForecastItem temperature={10} hour={20} state="clear" weekDay="lunes" />
	);

	const temperature = await findByText(/10/);
	const hour = await findByText(/20/);
	const weekDay = await findByText('lunes');

	expect(temperature).toHaveTextContent('10');
	expect(hour).toHaveTextContent('20');
	expect(weekDay).toHaveTextContent('lunes');
});
