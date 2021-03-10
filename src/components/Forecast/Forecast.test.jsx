import { render } from '@testing-library/react';
import Forecast from './Forecast';
import { foreCastItemList } from './Forecast.stories';

test('Forecast render', async () => {
	const { findAllByTestId } = render(
		<Forecast forecastItemList={foreCastItemList} />
	);

	const forecastItems = await findAllByTestId('forecast-item-container');

	expect(forecastItems).toHaveLength(foreCastItemList.length);
});
