import React from 'react';
import ErrorBoundary from './ErrorBoundary';

export default {
	title: 'Error Bounday',
	component: ErrorBoundary,
};
const prop = undefined;
const ComponentWithoutError = () => <h1>SIN ERROR</h1>;
const ComponentWithError = () => <h1>{prop.hola}</h1>;

export const ErrorBoundaryWithError = () => (
	<ErrorBoundary>
		<ComponentWithError />
	</ErrorBoundary>
);

export const ErrorBoundaryWithoutError = () => (
	<ErrorBoundary>
		<ComponentWithoutError />
	</ErrorBoundary>
);
