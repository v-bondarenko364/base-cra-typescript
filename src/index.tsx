import * as Sentry from '@sentry/browser';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import SentryConfig from './config/sentry';

import Error from './error';

// if (process.env.NODE_ENV !== Environment.Development) {
Sentry.init(SentryConfig);
// }
// console.log(process.env);
ReactDOM.render(
	<p>
		<Error />
		<App />
	</p>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
