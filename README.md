**Before staring:**
You should create .env file in root directory
And put following content `BROWSER=none`

### `yarn web:start:dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn web:build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn prettier`

Format all files `src` folder.<br />

### `yarn lint`

Lints all files `src` folder.<br />

### `yarn lint:commit`

Lint last commit `src` folder.<br />

### VS Code packages to install:

- editorconfig for vs code
- eslint
- gitlens
- stylelint
- vscode icons

### Add to VS Code settings following:

```
	"eslint.autoFixOnSave": true,
	"eslint.validate": [
	"javascript",
	"javascriptreact",
	{
	"language": "typescript",
	"autoFix": true
	},
	{
	"language": "typescriptreact",
	"autoFix": true
	}
	],
	"editor.formatOnSave": true,
	"[javascript]": {
	"editor.formatOnSave": false,
	},
	"[javascriptreact]": {
	"editor.formatOnSave": false,
	},
	"[typescript]": {
	"editor.formatOnSave": false,
	},
	"[typescriptreact]": {
	"editor.formatOnSave": false,
	},
```
