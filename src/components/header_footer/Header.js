import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer from './SideDrawer';

class Header extends Component {
	state = {
		drawerOpen: false
	};

	toggleDrawer = () => {
		this.setState({
			drawerOpen: !this.state.drawerOpen
		});
	};

	render() {
		return (
			<div>
				<AppBar
					position="fixed"
					style={{
						backgroundColor: '#2f2f2f',
						boxShadow: 'none',
						padding: '10px 0px'
					}}
				>
					<ToolBar>
						<div className="header_logo">
							<div className="font_righteous header_logo_venue">MeetUp</div>
							<div className="header_logo_title">Front End in Gainesville</div>
						</div>
						<IconButton aria-label="Menu" color="inherit" onClick={() => this.toggleDrawer()}>
							<MenuIcon />
						</IconButton>
						<SideDrawer open={this.state.drawerOpen} onClose={() => this.toggleDrawer()} />
					</ToolBar>
				</AppBar>
			</div>
		);
	}
}

export default Header;
