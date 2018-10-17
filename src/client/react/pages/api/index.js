import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
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
          <Link to="/api/overview">Overview</Link>
          <Link to="/api/rest_api">Rest API</Link>
        </div>

        <div className="page-content-container">
          {renderRoutes(this.props.route.routes)}
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
