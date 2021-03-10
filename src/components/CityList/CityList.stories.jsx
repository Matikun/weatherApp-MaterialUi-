import React from 'react';
import { action } from '@storybook/addon-actions';
import CityList, { cities } from './CityList';

export default {
	title: 'CityList',
	component: CityList,
};

export const CityListExample = () => (
	<CityList cities={cities} onClickCity={action('click en city')} />
);
