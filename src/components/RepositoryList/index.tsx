import * as RepositoriesActions from 'store/ducks/repositories/actions';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

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
			<List>
				{repositories.map(repository => (
					<RepositoryItem key={repository.id} repository={repository} />
				))}
			</List>
			<button onClick={loadRepositories} type="button">
				Load repo
			</button>
		</>
	);
};

const List = styled.ul`
	list-style: none;
	color: ${({theme}) => theme.colors.black};
`;


export default RepositoryList;
