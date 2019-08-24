import React from 'react';
import Zoom from 'react-reveal/Zoom';
import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

function MeetupInfo() {
	return (
		<div className="bck_black">
			<div className="center_wrapper">
				<div className="vn_wrapper">
					<Zoom duration={500}>
						<div className="vn_item">
							<div className="vn_outer">
								<div className="vn_inner">
									<div className="vn_icon_square bck_yellow" />
									<div className="vn_icon" style={{ background: `url(${icon_location})` }} />
									<div className="vn_title">Event Location</div>
									<div className="vn_desc">123 Main St Gainesville, FL 32608</div>
								</div>
							</div>
						</div>
					</Zoom>
					<Zoom duration={500} delay={500}>
						<div className="vn_item">
							<div className="vn_outer">
								<div className="vn_inner">
									<div className="vn_icon_square bck_light_blue" />
									<div className="vn_icon" style={{ background: `url(${icon_calendar})` }} />
									<div className="vn_title">Event Date & Time</div>
									<div className="vn_desc">
										November 25th 2019 <br /> at 8:00 pm
									</div>
								</div>
							</div>
						</div>
					</Zoom>
				</div>
			</div>
		</div>
	);
}

export default MeetupInfo;
