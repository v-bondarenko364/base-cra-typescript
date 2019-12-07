import React from 'react';

import { Repository } from '@store/types';

interface RepositoryItemProps {
	repository: Repository;
}

export default ({ repository }: RepositoryItemProps) => <li>{repository.name}</li>;
