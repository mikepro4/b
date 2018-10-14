import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button, Intent } from "@blueprintjs/core";

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
			<div className="route-page home-page">
					{this.renderHead()}

					<div className="page-section hero-section">

						<div className="home-page-main-title">
							Trade the largest selection of crypto perpetuals
						</div>

						<div className="home-page-secondary-title">
							Start trading anonymously within seconds
						</div>

						<Button
							intent={Intent.PRIMARY}
							className="home-page-main-cta"
							text="Start trading"
							large="true"
						/>

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
		connect(mapStateToProps, {})(HomePage)
	)
}
