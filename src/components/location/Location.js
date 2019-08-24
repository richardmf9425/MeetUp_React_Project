import React from 'react';

function Location() {
	return (
		<div className="location_wrapper">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3468.6438361093046!2d-82.3592076483142!3d29.61403828195287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e8a31d7ac3a65d%3A0x72e23152753954ca!2sThe%20Polos%20of%20Gainesville!5e0!3m2!1sen!2sus!4v1566663229777!5m2!1sen!2sus"
				width="100%"
				height="500px"
				frameBorder="0"
				allowFullScreen
			/>
			<div className="location_tag">
				<div>Location </div>
			</div>
		</div>
	);
}

export default Location;
