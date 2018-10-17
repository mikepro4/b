import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

class Overview extends Component {
	renderHead = () => (
		<Helmet>
			<title>Blade – API Docs / Overview</title>
			<meta property="og:title" content="API Docs Overview" />
		</Helmet>
	);
	render() {
		return (
			<div className="page-content">
				{this.renderHead()}

				Overview content
			</div>
		);
	}
}


function mapStateToProps() {
	return {};
}

export default {
	component: connect(mapStateToProps, {})(Overview)
}
