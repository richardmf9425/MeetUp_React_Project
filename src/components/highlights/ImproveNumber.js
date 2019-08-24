import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

export class ImproveNumber extends Component {
	state = {
		numberStart: 0,
		numberEnd: 100
	};

	percentage = () => {
		const { numberStart, numberEnd } = this.state;
		if (numberStart < numberEnd) {
			this.setState({
				numberStart: numberStart + 1
			});
		}
	};

	componentDidUpdate(prevProps, prevState) {
		setTimeout(() => {
			this.percentage();
		}, 10);
	}

	render() {
		return (
			<div className="center_wrapper">
				<div className="highlights_wrapper">
					<Fade onReveal={() => this.percentage()}>
						<div className="highlights_percentage">
							<span>Improve:</span>
							<span>{this.state.numberStart}%</span>
						</div>
					</Fade>

					<Slide right>
						<div className="highlights_description">
							<h3>Become a React Master in just a couple of hours</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolor placeat officiis a
								nemo molestias corporis ratione, dicta ullam. Porro.
							</p>
						</div>
					</Slide>
				</div>
			</div>
		);
	}
}

export default ImproveNumber;
