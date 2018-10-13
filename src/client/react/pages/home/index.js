import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

class HomePage extends Component {
	componentDidMount() {
		console.log("render home page");
	}
	renderHead = () => (
		<Helmet>
			<title>Blade – Home Page</title>
			<meta property="og:title" content="Homepage" />
		</Helmet>
	);
	render() {
		return (
			<div className="route-content">
					{this.renderHead()}
					<div className="route-page">home page test</div>
			</div>
		);
	}
}


function mapStateToProps() {
	return {};
}

export default {
	component: withRouter(
		connect(mapStateToProps, {})(HomePage)
	)
}
