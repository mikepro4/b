import React, { Component } from "react";
import { Helmet } from "react-helmet";

class HomePage extends Component {
	componentDidMount() {
		console.log("render home page");
	}
	renderHead = () => (
		<Helmet>
			<title>Blade – Home Page</title>
			<meta property="og:title" content="Home page" />
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

export default { component: HomePage };
