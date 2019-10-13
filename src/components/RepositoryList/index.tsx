import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as RepositoriesActions from 'store/ducks/repositories/actions';
import { ApplicationState } from 'store';


import RepositoryItem from '../RepositoryItem';

const RepositoryList = () => {
	const repositories = useSelector((state: ApplicationState) => state.repositories.data);
	const dispatch = useDispatch();

	const loadRepositories = () => {
		dispatch(RepositoriesActions.loadRequest());
	};

	return (
		<>
			<ul>
				{repositories.map(repository => (
					<RepositoryItem key={repository.id} repository={repository} />
				))}
			</ul>
			<button onClick={loadRepositories} type="button">
				Load repo
			</button>
		</>
	);
};

export default RepositoryList;
