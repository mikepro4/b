import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

class RestApi extends Component {
	renderHead = () => (
		<Helmet>
			<title>Blade – Rest API </title>
			<meta property="og:title" content="Rest API" />
		</Helmet>
	);
	render() {
		return (
			<div className="page-content">
				{this.renderHead()}

        Rest api content
			</div>
		);
	}
}


function mapStateToProps() {
	return {};
}

export default {
	component: withRouter(
		connect(mapStateToProps, {})(RestApi)
	)
}
