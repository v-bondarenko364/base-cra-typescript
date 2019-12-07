import React from 'react';
import { Link } from 'react-router-dom';
import { I18nModel } from '@services/i18n';

interface HomeProps {
	i18n: I18nModel;
}
const Home = ({ i18n }: HomeProps) => {
	return (
		<div>
			<p>Home page</p>
			<p>{i18n.t.greeting('test')}</p>
			<Link to="list">List page</Link>
		</div>
	);
};

export default Home;
