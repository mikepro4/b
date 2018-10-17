import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button, Intent, Icon } from "@blueprintjs/core";
import { renderRoutes } from "react-router-config";

class ApiPage extends Component {

	componentDidMount = () => {
		if(this.props.match.isExact) {
				this.props.history.push("api/overview")
		}
	}
	renderHead = () => (
		<Helmet>
			<title>Blade – API Docs</title>
			<meta property="og:title" content="API Docs" />
		</Helmet>
	);
	render() {
		return (
			<div className="route-page route-page-white">

        <div className="page-left-sidebar">

					<div className="page-left-sidebar-section">

						<div className="page-left-sidebar-title">
							API DOCS
						</div>

						<ul className="page-left-sidebar-menu">

							<li className="page-left-sidebar-menu-link">
								<NavLink to="/api/overview" activeClassName="active">Overview</NavLink>
							</li>

							<li className="page-left-sidebar-menu-link">
								<NavLink to="/api/rest_api" activeClassName="active">Rest API</NavLink>
							</li>

							<li className="page-left-sidebar-menu-link">
								<NavLink to="/api/rest_api_message" activeClassName="active">Rest API Message Format</NavLink>
							</li>

							<li className="page-left-sidebar-menu-link">
								<NavLink to="/api/api_keys" activeClassName="active">Using API Keys</NavLink>
							</li>

							<li className="page-left-sidebar-menu-link">
								<NavLink to="/api/websocket_api" activeClassName="active">Websocket API</NavLink>
							</li>

						</ul>
					</div>
        </div>

        <div className="page-content-container">
          {renderRoutes(this.props.route.routes)}
        </div>

				<div className="contact-link-container">
					<div className="contact-link-label">Have questions?</div>
					<NavLink to="/contact" className="contact-link">Contact us</NavLink>
				</div>
			</div>
		);
	}
}


function mapStateToProps() {
	return {};
}

export default {
	component: withRouter(
		connect(mapStateToProps, {})(ApiPage)
	)
}
