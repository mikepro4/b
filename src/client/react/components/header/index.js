import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Button, Intent } from "@blueprintjs/core";

import MainLinks from "../navigation/main_links/MainLinks"

class Header extends Component {
	render() {
		return (
			<div className="app-header-container">
				<div className="app-header-left">
					<div className="app-logo"></div>
				</div>

				<div className="app-header-center">
					<MainLinks />
				</div>

				<div className="app-header-right">
					<ul className="app-auth-menu">
						<li className="app-auth-link">
							<Button minimal={true}>Login</Button>
						</li>
						<li className="app-auth-link">
							<Button>Sign up</Button>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

function mapStateToProps() {
	return {};
}

export default connect(mapStateToProps, {})(withRouter(Header));
