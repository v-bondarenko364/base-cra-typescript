import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Home from '@modules/Home/pages/Home';
import RepositoryList from '@modules/Repository/pages/RepositoryList';
import NotFound from '@modules/Home/pages/NotFound';
import { GlobalStyle, theme } from '@theme/themes/base';
import muiTheme from '@theme/themes/muiTheme';
import store from '@store/index';
import useI18n from '@services/i18n';
// import WithRouteParams from './hoks/WithRouteParams';

const App: React.FC = () => {
	const i18n = useI18n('ru');

	return (
		<Provider store={store}>
			<BrowserRouter>
				<MuiThemeProvider theme={muiTheme}>
					<ThemeProvider theme={theme}>
						<GlobalStyle />
						<Switch>
							<Route exact path="/" render={props => <Home {...props} i18n={i18n} />} />
							<Route
								exact
								path="/list"
								render={props => <RepositoryList {...props} i18n={i18n} />}
							/>
							<Route component={NotFound} />
						</Switch>
					</ThemeProvider>
				</MuiThemeProvider>
			</BrowserRouter>
		</Provider>
	);
};

export default App;
