import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button, Intent, Icon } from "@blueprintjs/core";
import { renderRoutes } from "react-router-config";

class CompanyPage extends Component {
	renderHead = () => (
		<Helmet>
			<title>Blade – FAQ</title>
			<meta property="og:title" content="FAQ" />
		</Helmet>
	);
	render() {
		return (
			<div className="route-page route-page-white">

        <div className="page-content-container">
          <div className="page-content">
            <h1>FAQ</h1>
          </div>
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
