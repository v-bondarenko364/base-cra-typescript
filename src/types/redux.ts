/**
 * Action types
 */

export enum RepositoriesTypes {
	LOAD_REQUEST = '@repositories/LOAD_REQUEST',
	LOAD_SUCCESS = '@repositories/LOAD_SUCCESS',
	LOAD_FAILURE = '@repositories/LOAD_FAILURE',
}

/**
 * Data types
 */

export interface Repository {
	id: number;
	name: string;
}

/**
 *  State type
 */

export interface RepositoriesState {
	// can't be changed
	readonly data: Repository[];
	readonly loafing: boolean;
	readonly error: boolean;
}
