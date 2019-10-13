import React from 'react';

import { Repository } from 'types/redux';

interface RepositoryItemProps {
	repository: Repository;
}

export default ({ repository }: RepositoryItemProps) => <li>{repository.name}</li>;
