import React from 'react';
import { render } from '@testing-library/react';
import CityInfo from './CityInfo'; //SUT Subject under testing

test('CityInfo render', async () => {
	// Como Escribir los tests standar TRIPLE AAA
	//A Arrange
	//A Act
	//A Assert
	const cityValue = 'Buenos Aires';
	const countryCodeValue = 'AR';
	//renderisa el componente y retorna una serie de funciones
	const { findAllByRole } = render(
		<CityInfo city={cityValue} countryCode={countryCodeValue} />
	);

	const cityAndCountryComponents = await findAllByRole('heading');

	//
	const [cityHeading, countryHeading] = cityAndCountryComponents;
	expect(cityHeading).toHaveTextContent(cityValue);
	expect(countryHeading).toHaveTextContent(countryCodeValue);
});
