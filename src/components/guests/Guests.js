import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

export class Guests extends Component {
	state = {
		pics: [ 100, 150, 250 ],
		names: [ 'John', 'Emma', 'Dan' ],
		desc: [
			'John ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, voluptatibus.',
			'Emma ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, voluptatibus.',
			'Dan ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, voluptatibus.'
		],
		link: [ 'http://google.com', 'http://google.com', 'http://google.com' ],
		delay: [ 500, 0, 500 ]
	};

	showCards = () =>
		this.state.pics.map((box, i) => (
			<Zoom key={i} delay={this.state.delay[i]}>
				<div className="pricing_item">
					<div className="pricing_inner_wrapper">
						<div className="pricing_title">
							<span>{this.state.pics[i]}</span>
							<span>{this.state.names[i]}</span>
						</div>
						<div className="pricing_description">{this.state.desc[i]}</div>
						<div className="pricing_buttons">
							<MyButton text="Learn More" bck="#ffa800" color="white" link={this.state.link[i]} />
						</div>
					</div>
				</div>
			</Zoom>
		));

	render() {
		return (
			<div className="bck_black">
				<div className="center_wrapper pricing_section">
					<h2>Special Guests</h2>
					<div className="pricing_wrapper">{this.showCards()}</div>
				</div>
			</div>
		);
	}
}

export default Guests;
