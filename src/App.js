import React from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import { AppBar } from 'material-ui/AppBar';
import { ToolBar } from 'material-ui';
import { MenuIcon } from 'material-ui/Menu';
import { IconButton } from 'material-ui/IconButton';

function App() {
	return (
		<div className="App">
			<Header />
		</div>
	);
}

export default App;
