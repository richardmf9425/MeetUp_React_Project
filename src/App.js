import React from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import { AppBar } from 'material-ui/AppBar';
import { ToolBar } from 'material-ui';
import { MenuIcon } from 'material-ui/Menu';
import { IconButton } from 'material-ui/IconButton';
import Featured from './components/featured';
import MeetupInfo from './components/meetupInfo';
import Highlights from './components/highlights/Highlights';
function App() {
	return (
		<div className="App" style={{ height: '1500px', background: 'red' }}>
			<Header />
			<Featured />
			<MeetupInfo />
			<Highlights />
		</div>
	);
}

export default App;
