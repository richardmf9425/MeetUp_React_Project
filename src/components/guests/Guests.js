import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';
import woman_face from '../../resources/images/woman_face.jpg';
import man_face1 from '../../resources/images/man_face1.jpg';
import man_face from '../../resources/images/man_face.jpg';

export class Guests extends Component {
	state = {
		pics: [ man_face1, woman_face, man_face ],
		names: [ 'John Spencer', 'Emma Doe', 'Dan Allen' ],
		desc: [
			'John works as a Software Engineer for Santa Claus Co. He specializes in accessability ',
			'Emma is a Front End Developer at Google, she has over 10 years in the industry',
			'Dan is a Senior Software Developer at Microsoft. He loves React and Node JS'
		],
		link: [ 'http://google.com', 'http://google.com', 'http://google.com' ],
		delay: [ 500, 0, 500 ]
	};

	showCards = () =>
		this.state.pics.map((box, i) => (
			<Zoom key={i} delay={this.state.delay[i]}>
				<div className="guests_item">
					<div className="guests_inner_wrapper">
						<div className="guests_title">
							<div className="pictures">
								<img className="guests_pictures" src={this.state.pics[i]} alt="" />
							</div>

							<span>{this.state.names[i]}</span>
						</div>
						<div className="guests_description">{this.state.desc[i]}</div>
						<div className="guests_buttons">
							<MyButton text="Learn More" bck="#01a4c9" color="white" link={this.state.link[i]} />
						</div>
					</div>
				</div>
			</Zoom>
		));

	render() {
		return (
			<div className="bck_black">
				<div className="center_wrapper guests_section">
					<h2>Special Guests</h2>
					<div className="guests_wrapper">{this.showCards()}</div>
				</div>
			</div>
		);
	}
}

export default Guests;
