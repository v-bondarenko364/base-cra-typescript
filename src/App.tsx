import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';

import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import RepositoryList from '@modules/components/RepositoryList';
import { GlobalStyle, theme } from '@theme/themes/base';
import muiTheme from '@theme/themes/muiTheme';
import store from '@store/index';
import useI18n from '@services/i18n';

const App: React.FC = () => {
	const i18n = useI18n('ru');

	return (
		<Provider store={store}>
			<MuiThemeProvider theme={muiTheme}>
				<ThemeProvider theme={theme}>
					<>
						<GlobalStyle />
						<RepositoryList i18n={i18n} />
					</>
				</ThemeProvider>
			</MuiThemeProvider>
		</Provider>
	);
};

export default App;
