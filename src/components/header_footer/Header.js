import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer from './SideDrawer';

class Header extends Component {
	state = {
		drawerOpen: false,
		headerShow: false
	};

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	handleScroll = () => {
		if (window.scrollY > 0) {
			this.setState({
				headerShow: true
			});
		} else {
			this.setState({
				headerShow: false
			});
		}
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
						backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent',
						boxShadow: 'none',
						padding: '10px 0px',
						transition: 'all .5s linear'
					}}
				>
					<Toolbar>
						<div className="header_logo">
							<div className="font_righteous header_logo_venue">MeetUp</div>
							<div className="header_logo_title">Front End in Gainesville</div>
						</div>
						<IconButton aria-label="Menu" color="inherit" onClick={() => this.toggleDrawer()}>
							<MenuIcon />
						</IconButton>
						<SideDrawer open={this.state.drawerOpen} onClose={() => this.toggleDrawer()} />
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default Header;
