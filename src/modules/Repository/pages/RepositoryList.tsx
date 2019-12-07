import * as RepositoriesActions from '@store/ducks/repositories/actions';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Repository } from '@store/types';
import { ApplicationState } from '@store/index';
import { I18nModel } from '@services/i18n';

import RepositoryItem from '../components/RepositoryItem';

interface RepositoryListProps {
	i18n: I18nModel;
}

const RepositoryList = ({ i18n }: RepositoryListProps) => {
	const repositories = useSelector((state: ApplicationState) => state.repositories.data);
	const dispatch = useDispatch();

	const loadRepositories = () => {
		dispatch(RepositoriesActions.loadRequest());
	};

	return (
		<>
			<List>
				{repositories.map((repository: Repository) => (
					<RepositoryItem key={repository.id} repository={repository} />
				))}
			</List>
			<button onClick={loadRepositories} type="button">
				{i18n.t.greeting('test')}
			</button>

			<Link to="/">To home page</Link>
		</>
	);
};

const List = styled.ul`
	list-style: none;
	color: ${({ theme }) => theme.colors.black};
`;

export default RepositoryList;
