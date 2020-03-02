## 3rd party docs :

- [react](https://reactjs.org/docs)
- [typescript](https://www.typescriptlang.org/docs/handbook/basic-types.html)
- [web reference](https://developer.mozilla.org/en-US/docs/Web/Reference)
- [react router](https://reacttraining.com/react-router/)
- [typescript cheat sheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#basic-cheatsheet-table-of-contents)
- [axios](https://github.com/axios/axios)
- [react bootstrap](https://react-bootstrap.netlify.com/getting-started/why-react-bootstrap/)
- [i18next](https://react.i18next.com/)

To check out :
- [animated transition](https://reacttraining.com/react-router/web/example/animated-transitions) + [transition group](http://reactcommunity.org/react-transition-group/transition-group)
- [material UI](https://material-ui.com/)
- [react best practice](https://www.sitepoint.com/react-with-typescript-best-practices/)
- [typescript and react](https://fettblog.eu/typescript-react/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

```bash
npx create-react-app lbtdm --template typescript
npm install gh-pages --save-dev
npm install -g typescript
```

In package.json, add:

```json
{
	"homepage": "http://jcaillon.github.io/btdm",
	"scripts": {
		"predeploy": "npm run build",
		"deploy": "gh-pages -d build"
	}
}
```

Then to deploy: `npm run deploy`.

Modified tsconfig.json (https://www.sitepoint.com/react-with-typescript-best-practices/).

`npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react --only-dev`

create .eslintrc.js

`npm install prettier eslint-config-prettier eslint-plugin-prettier --only-dev`



- https://www.jetbrains.com/pycharm/guide/tutorials/react_typescript_tdd/
- https://www.typescriptlang.org/docs/handbook/react-&-webpack.html
- https://create-react-app.dev/docs/adding-typescript/

> Everything is listed in `dependencies` and nothing in `devDependencies`: it is intended. The react-scripts from [create react app](https://github.com/facebook/create-react-app) creates a static bundle from the dependencies. They are all only used during build [see here](https://github.com/facebook/create-react-app/issues/6180).