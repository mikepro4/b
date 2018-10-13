import React, { Component } from "react";
import { renderRoutes } from "react-router-config";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { FocusStyleManager } from "@blueprintjs/core";

import Header from "./react/components/header/"

FocusStyleManager.onlyShowFocusOnTabs();

class App extends Component {
	render() {
		return (
			<div className="app-container">

				<Header />

				<div className="route-container">
					{renderRoutes(this.props.route.routes)}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
	};
}

export default {
	component: connect(mapStateToProps, {})(withRouter(App))
};
