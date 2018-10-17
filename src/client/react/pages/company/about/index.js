import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

class About extends Component {
	renderHead = () => (
		<Helmet>
			<title>Blade – Company / About</title>
			<meta property="og:title" content="API Docs Overview" />
		</Helmet>
	);
	render() {
		return (
			<div className="page-content">
				{this.renderHead()}

				<h1>About</h1>

				<p>
					BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data <a href="/">some phrase here</a> is available and updates in real-time. BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data <a href="/">some phrase here</a> is available and updates in real-time.
				</p>
      </div>
		);
	}
}


function mapStateToProps() {
	return {};
}

export default {
	component: connect(mapStateToProps, {})(About)
}
