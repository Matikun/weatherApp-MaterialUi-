import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Weather from './Weather';

test('Weather render Sunny', async () => {
	const { findByRole } = render(<Weather temperature={10} state="clear" />);

	const temperature = await findByRole('heading');

	expect(temperature).toHaveTextContent('10');
});

test('Weather render rainy', async () => {
	const { findByRole } = render(<Weather temperature={10} state="rain" />);

	const temperature = await findByRole('heading');

	expect(temperature).toHaveTextContent('10');
});
