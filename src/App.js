import React from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';
import Header from './components/header_footer/Header';

import Featured from './components/featured/Featured';
import MeetupInfo from './components/meetupInfo/MeetupInfo';
import Highlights from './components/highlights/Highlights';
import Guests from './components/guests/Guests';
import Location from './components/location/Location';
import Footer from './components/header_footer/Footer';
function App() {
	return (
		<div className="App" style={{ height: '1500px', background: 'grey' }}>
			<Header />
			<Element name="featured">
				<Featured />
			</Element>

			<Element name="Info">
				<MeetupInfo />
			</Element>

			<Element name="highlights">
				<Highlights />
			</Element>
			<Element name="guests">
				<Guests />
			</Element>

			<Element name="location">
				<Location />
			</Element>

			<Footer />
		</div>
	);
}

export default App;
