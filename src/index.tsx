import 'react-app-polyfill/ie11'; // add compatibility for ie11
import 'react-app-polyfill/stable'; // add compatibility for ECMAscript 6+ features
// polyfill -> https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md

import './app.scss'; // react-boostrap + bootswatch
// we could also import a direct distribution .css file like so:
// import 'bootswatch/dist/slate/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
