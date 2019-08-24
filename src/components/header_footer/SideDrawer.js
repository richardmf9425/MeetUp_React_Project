import React from 'react';
import { scroller } from 'react-scroll';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

function SideDrawer(props) {
	const scrollTo = (element) => {
		scroller.scrollTo(element, {
			duration: 1500,
			delay: 100,
			smooth: true,
			offset: -150
		});
		props.onClose(false);
	};
	return (
		<Drawer anchor="right" open={props.open} onClose={() => props.onClose()}>
			<List component="nav">
				<ListItem button onClick={() => scrollTo('featured')}>
					Event Starts In
				</ListItem>
				<ListItem button onClick={() => scrollTo('Info')}>
					INFO
				</ListItem>
				<ListItem button onClick={() => scrollTo('highlights')}>
					Guests
				</ListItem>
				<ListItem button onClick={() => scrollTo('guests')}>
					Highlights
				</ListItem>
				<ListItem button onClick={() => scrollTo('location')}>
					Location
				</ListItem>
			</List>
		</Drawer>
	);
}

export default SideDrawer;
