import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import Highlight from "react-highlight"

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

				<h1>Overview</h1>


				<p>
					BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data <a href="/">some phrase here</a> is available and updates in real-time. BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data <a href="/">some phrase here</a> is available and updates in real-time.
				</p>

				<small>Some really nice small text.</small>

				<p><a href="http://localhost:3000/api/rest_api">http://localhost:3000/api/rest_api</a></p>

				<h2>H2 Section Title</h2>

				<p>
					BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data is available and updates in real-time.
				</p>


				<h3>H3 Section Title</h3>

				<p>
					The BitMEX APIs are open and complete. Every
					function used by the BitMEX website is exposed via the API,
					allowing developers full control to build any kind of application on top of BitMEX.
				</p>

				<h4>H4 Section Title</h4>

				<p>
					The completeness of BitMEX’s API is best-in-class and unique in the trading space.
				</p>

				<p>
					BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data is available and updates in real-time.
					BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data is available and updates in real-time.
					BitMEX offers a fully featured REST API and a powerful streaming WebSocket API. All
					market and user data is available and updates in real-time.
				</p>
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
