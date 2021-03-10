import React, { useState, useContext } from 'react';
import { useCityList } from '../../hooks/useCityList';
import { useStyles } from '../../Styles/StylesForm';
import { WeatherContextState } from '../../WeatherContext/WeatherContext';
import Button from '@material-ui/core/Button';
import ErrorAlert from '../ErrorAlert/ErrorAlert';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import { Box } from '@material-ui/core';

const CitySearch = () => {
	const [cities, setCities] = useState(null);
	const { data, actions } = useContext(WeatherContextState);
	const { allWeather } = data;
	const { error, setError } = useCityList(cities, actions, allWeather);
	const classes = useStyles();
	const hasError = (error) => (error ? true : false);

	const onClickHandler = (e) => {
		e.preventDefault();
		const city = e.target.city.value;
		const countryCode = e.target.countryCode.value.toUpperCase();
		setCities([{ city, countryCode }]);
		e.target.city.value = '';
		e.target.countryCode.value = '';
	};

	return (
		<Box margin="auto" textAlign="center">
			<form
				className={classes.form}
				autoComplete="off"
				onSubmit={onClickHandler}
			>
				<TextField
					id="outlined-basic"
					label="Buscar Ciudad"
					type="Search"
					variant="outlined"
					helperText="Ingrese una Ciudad"
					name="city"
					color="primary"
					error={hasError(error)}
					required
					className={classes.margin}
				/>

				<TextField
					id="outlined-basic"
					label="Codigo de Pais"
					type="Search"
					variant="outlined"
					helperText="Ingrese codigo de Pais Ej:AR"
					name="countryCode"
					color="primary"
					error={hasError(error)}
					className={classes.margin}
					required
				/>

				<Button
					className={classes.buttonForm}
					type="submit"
					size="large"
					variant="contained"
					color="secondary"
					startIcon={<SearchIcon />}
				>
					BUSCAR
				</Button>
			</form>

			{error && <ErrorAlert error={error} setError={setError} />}
		</Box>
	);
};

export default CitySearch;
