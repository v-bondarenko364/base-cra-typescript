const config = {
	extends: ['@commitlint/config-conventional'],
	'type-enum': ['chore', 'docs', 'feat', 'fix', 'refactor', 'revert', 'style', 'test'],
};

export default config;
