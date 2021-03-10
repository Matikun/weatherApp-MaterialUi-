import React from 'react';
import Alert from '@material-ui/lab/Alert';

const ErrorAlert = ({ error, setError }) => {
	return (
		<Alert onClose={() => setError(null)} severity="error">
			{`${error} `}
		</Alert>
	);
};

export default ErrorAlert;
