import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { IconContext } from 'react-icons';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Link as LinkRouter } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { WiDaySunny } from 'react-icons/wi';
import { CgDarkMode } from 'react-icons/cg';
import ErrorBoundary from '../../generic/ErrorBoundary';
import { darkTheme, lightTheme, useStyles } from '../../Styles/StylesForm';
import { WeatherContextState } from '../../WeatherContext/WeatherContext';
import { types } from '../../reducer/reducer';
import { ThemeProvider } from '@material-ui/styles';

const AppFrame = ({ children }) => {
	const { data, actions } = useContext(WeatherContextState);
	const classes = useStyles();
	return (
		<ThemeProvider theme={data.darkMode ? darkTheme : lightTheme}>
			<Paper style={{ height: 'auto', flexGrow: 1, paddingBottom: '3em' }}>
				<Grid container justify="center">
					<AppBar position="static" className={classes.appBar}>
						<Toolbar>
							<IconButton edge="start" color="inherit" aria-label="menu">
								<Link
									component={LinkRouter}
									to="/main"
									color="inherit"
									aria-label="menu"
								>
									<IconContext.Provider value={{ size: '2em' }}>
										<WiDaySunny />
									</IconContext.Provider>
								</Link>
							</IconButton>
							<Typography
								variant="h6"
								color="inherit"
								className={classes.title}
							>
								Weather App
							</Typography>
							<IconButton>
								<IconContext.Provider value={{ size: '2em' }}>
									<CgDarkMode
										onClick={() => actions({ type: types.DARK_MODE })}
									/>
								</IconContext.Provider>
							</IconButton>
						</Toolbar>
					</AppBar>
					<Grid item xs={12} sm={11} md={10} lg={8}>
						<ErrorBoundary>{children}</ErrorBoundary>
					</Grid>
				</Grid>
			</Paper>
		</ThemeProvider>
	);
};

export default AppFrame;
