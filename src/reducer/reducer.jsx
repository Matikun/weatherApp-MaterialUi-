const types = {
	ALL_WEATHER: 'SET_ALL_WEATHER',
	CHART_DATA: 'SET_CHART_DATA',
	FORECAST: 'SET_FORECAST_ITEM_LIST',
	DARK_MODE: 'SWITCH_MODE',
};

const initialState = {
	allWeather: {},
	allChartData: {},
	allForecastItemList: {},
	darkMode: false,
};

const reducer = (state, action) => {
	switch (action.type) {
		case types.ALL_WEATHER:
			const allWeather = action.payload;
			const newWeather = { ...state.allWeather, ...allWeather };
			return {
				...state,
				allWeather: newWeather,
			};
		case types.CHART_DATA:
			const allChartData = action.payload;
			const newChartData = { ...state.allChartData, ...allChartData };
			return {
				...state,
				allChartData: newChartData,
			};
		case types.FORECAST:
			const allForecastItemList = action.payload;
			const newForecastItemList = {
				...state.allForecastItemList,
				...allForecastItemList,
			};
			return {
				...state,
				allForecastItemList: newForecastItemList,
			};
		case types.DARK_MODE:
			return {
				...state,
				darkMode: !state.darkMode,
			};
		default:
			return state;
	}
};
export { reducer, initialState, types };
