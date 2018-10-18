import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Intent } from "@blueprintjs/core";
import MainLinks from "../navigation/main_links/"

class Header extends Component {
	render() {
		let pathname = this.props.location.pathname.toString()
		let authPage = pathname.includes("/auth/")
		if (authPage) {
			return (<div></div>)
		}

		return (
			<div className="app-header-container">
				<div className="app-header-left">
					<Link to="/"><div className="app-logo"></div></Link>
				</div>

				<div className="app-header-center">
					<MainLinks />
				</div>

				<div className="app-header-right">
					<ul className="app-auth-menu">
						<li className="app-auth-link">
							<Link to="/auth/login"><Button minimal={true}>Login</Button></Link>
						</li>
						<li className="app-auth-link">
							<Link to="/auth/signup"><Button>Sign up</Button></Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		location: state.router.location
	};
}

export default connect(mapStateToProps, {})(Header);
