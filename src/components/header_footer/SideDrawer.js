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

	const navBarStyles = {
		background: '#000000',
		width: '100px'
	};
	return (
		<Drawer anchor="right" classes={navBarStyles} open={props.open} onClose={() => props.onClose()}>
			<List component="nav">
				<ListItem button onClick={() => scrollTo('featured')}>
					Home Page
				</ListItem>
				<ListItem button onClick={() => scrollTo('Info')}>
					Event Information
				</ListItem>
				<ListItem button onClick={() => scrollTo('highlights')}>
					Special Guests
				</ListItem>
				<ListItem button onClick={() => scrollTo('guests')}>
					Highlights of the Event
				</ListItem>
				<ListItem button onClick={() => scrollTo('location')}>
					Location
				</ListItem>
			</List>
		</Drawer>
	);
}

export default SideDrawer;
