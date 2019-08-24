import React from 'react';
import Slider from 'react-slick';
import slide_one from '../../resources/images/slide_one.jpg';
import slide_two from '../../resources/images/slide_two.jpg';
import slide_three from '../../resources/images/slide_three.jpg';
import slide_four from '../../resources/images/slide_four.jpg';
import slide_five from '../../resources/images/slide_five.jpg';
function Carousel() {
	const settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		speed: 700
	};

	return (
		<div
			className="carrousel_wrapper"
			style={{
				height: `${window.innerHeight}px`,
				overflow: 'hidden'
			}}
		>
			<Slider {...settings}>
				<div>
					<div
						className="carrousel_image"
						style={{
							background: `linear-gradient(
								rgba(20,20,20, .5), 
								rgba(20,20,20, .5)),url(${slide_one})`,
							height: `${window.innerHeight}px`
						}}
					/>
				</div>
				<div>
					<div
						className="carrousel_image"
						style={{
							background: `linear-gradient(
								rgba(20,20,20, .5), 
								rgba(20,20,20, .5)),url(${slide_two})`,
							height: `${window.innerHeight}px`
						}}
					/>
				</div>
				<div>
					<div
						className="carrousel_image"
						style={{
							background: `linear-gradient(
								rgba(20,20,20, .5), 
								rgba(20,20,20, .5)),url(${slide_three})`,
							height: `${window.innerHeight}px`
						}}
					/>
				</div>
				<div>
					<div
						className="carrousel_image"
						style={{
							background: `linear-gradient(
								rgba(20,20,20, .5), 
								rgba(20,20,20, .5)),url(${slide_four})`,
							height: `${window.innerHeight}px`
						}}
					/>
				</div>
				<div>
					<div
						className="carrousel_image"
						style={{
							background: `linear-gradient(
								rgba(20,20,20, .5), 
								rgba(20,20,20, .5)),url(${slide_five})`,
							height: `${window.innerHeight}px`
						}}
					/>
				</div>
			</Slider>
		</div>
	);
}

export default Carousel;
