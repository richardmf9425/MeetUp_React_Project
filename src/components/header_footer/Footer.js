import React from 'react';
import Fade from 'react-reveal/Fade';

function Footer() {
	return (
		<footer className="bck_black">
			<Fade delay={500}>
				<div className="font_righteous footer_logo_venue">Meetup</div>
				<div className="footer_copyright">Meetup 2019. All Rights Reserved.</div>
			</Fade>
		</footer>
	);
}

export default Footer;
