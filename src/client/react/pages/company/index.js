import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button, Intent, Icon } from "@blueprintjs/core";
import { renderRoutes } from "react-router-config";

class CompanyPage extends Component {
	componentDidMount = () => {
		if(this.props.match.isExact) {
				this.props.history.push("company/about")
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
							COMPANY
						</div>

						<ul className="page-left-sidebar-menu">

							<li className="page-left-sidebar-menu-link">
								<NavLink to="/company/about" activeClassName="active">About</NavLink>
							</li>

							<li className="page-left-sidebar-menu-link">
								<NavLink to="/company/team" activeClassName="active">Team</NavLink>
							</li>

							<li className="page-left-sidebar-menu-link">
								<NavLink to="/company/brand" activeClassName="active">Brand Materials</NavLink>
							</li>

							<li className="page-left-sidebar-menu-link">
								<NavLink to="/company/fees" activeClassName="active">Exchange fees</NavLink>
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
		connect(mapStateToProps, {})(CompanyPage)
	)
}
