
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';

import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import RepositoryList from './components/RepositoryList';
import { GlobalStyle, theme } from './theme/themes/base';
import muiTheme from './theme/themes/muiTheme';
import store from './store';

const App: React.FC = () => (
	<Provider store={store}>
		<MuiThemeProvider theme={muiTheme}>
			<ThemeProvider theme={theme}>
				<>
					<GlobalStyle />
					<RepositoryList />
				</>
			</ThemeProvider>
		</MuiThemeProvider>
	</Provider>
);

export default App;
