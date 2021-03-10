import React from 'react';
import { render } from '@testing-library/react';
import WeatherDetails from './WeatherDetails';
const humidityValue = 50;
const windValue = 20;

test('Weather Detail Render ', async () => {
	const { findByText } = render(
		<WeatherDetails humidity={humidityValue} wind={windValue} />
	);

	const humidity = await findByText(/50/);

	const wind = await findByText(/20/);

	expect(humidity).toHaveTextContent('Humedad: 50%');
	expect(wind).toHaveTextContent('Viento: 20 km/h');
});
