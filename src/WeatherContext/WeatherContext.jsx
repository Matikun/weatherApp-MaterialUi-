import { createContext, useReducer } from 'react';
import { initialState, reducer } from '../reducer/reducer';

const WeatherContextState = createContext();

const WeatherContext = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<WeatherContextState.Provider value={{ data: state, actions: dispatch }}>
			{children}
		</WeatherContextState.Provider>
	);
};

export { WeatherContext, WeatherContextState };
