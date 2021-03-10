import React from 'react';
import WelcomeScreen from '../components/WelcomeScreen';
import Grid from '@material-ui/core/Grid';
import { Link as LinkRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { IconContext } from 'react-icons';
import { WiDaySunny } from 'react-icons/wi';
import { Button } from '@material-ui/core';

const WelcomePage = (props) => {
	return (
		<div>
			<WelcomeScreen>
				<Grid
					container
					direction="column"
					justify="center"
					className="full"
				>
					<div className="highlight">
						<Grid
							item
							container
							xs={12}
							justify="center"
							alignItems="center"
						>
							<Grid item>
								<IconContext.Provider value={{ size: '6em' }}>
									<WiDaySunny />
								</IconContext.Provider>
							</Grid>
							<Grid
								item
								container
								justify="center"
								alignItems="center"
								direction="column"
							>
								<Typography variant="h4" color="inherit">
									Weather App
								</Typography>
								<Button
									color="primary"
									component={LinkRouter}
									to="/main"
									variant="outlined"
								>
									Ingresar
								</Button>
							</Grid>
						</Grid>
					</div>
				</Grid>
			</WelcomeScreen>
		</div>
	);
};

export default WelcomePage;
