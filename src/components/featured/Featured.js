import React from 'react';
import Carousel from './Carousel';
import Countdown from './Countdown';

function Featured() {
	return (
		<div style={{ position: 'relative' }}>
			<Carousel />
			<div className="event_name">
				<div className="wrapper ">Front End Meetup</div>
			</div>
			<Countdown />
		</div>
	);
}

export default Featured;
