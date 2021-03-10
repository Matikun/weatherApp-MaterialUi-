import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link as LinkRouter } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { IconContext } from 'react-icons';
import { WiRain } from 'react-icons/wi';

const NotFoundPage = () => {
	return (
		<Grid container direction="column" justify="center" className="full">
			<div className="highlight">
				<Grid item container xs={12} justify="center" alignItems="center">
					<Grid item>
						<IconContext.Provider value={{ size: '6em' }}>
							<WiRain />
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
							404 | La pagina no Existe!!
						</Typography>
						<Link
							color="inherit"
							aria-label="menu"
							component={LinkRouter}
							to="/"
						>
							Volver al Inicio
						</Link>
					</Grid>
				</Grid>
			</div>
		</Grid>
	);
};

export default NotFoundPage;
