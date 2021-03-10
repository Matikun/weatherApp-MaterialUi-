import { lightBlue, orange } from '@material-ui/core/colors';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
	capitalize: {
		textTransform: 'capitalize',
	},
	appBar: {
		marginBottom: theme.spacing(2),
	},

	title: {
		flexGrow: 1,
	},
	margin: {
		margin: theme.spacing(2.5),
	},
	buttonForm: {
		position: 'relative',
		marginLeft: '1em',
		marginBottom: '1.2em',
		top: '0',
	},
	form: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap',
		margin: 'auto',
		padding: '1em',
		width: '90%',
	},
}));

const darkTheme = createMuiTheme({
	palette: {
		primary: orange,

		secondary: orange,

		type: 'dark',
	},
});
const lightTheme = createMuiTheme({
	palette: {
		primary: lightBlue,

		secondary: {
			main: '#4c99f1',
		},
	},
});
export { useStyles, darkTheme, lightTheme };
