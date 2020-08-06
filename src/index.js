// Common styles

import './styles/fonts.scss';
import './styles/index.scss';

import React from 'react';

// Modules

import ReactDOM from "react-dom";

// App component

import { App } from './App';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
