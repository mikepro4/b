import React, { Component } from "react";
import { renderRoutes } from "react-router-config";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { FocusStyleManager } from "@blueprintjs/core";
import ReactDOM from "react-dom";

import Header from "./react/components/header/"

FocusStyleManager.onlyShowFocusOnTabs();

class App extends Component {
	componentDidUpdate(prevProps) {
		// Reset scrolling position on route change
		if(prevProps.location.pathname !== this.props.location.pathname) {
			let node = ReactDOM.findDOMNode(this.refs.app)
			if (node) { node.scrollTop = 0 }
		}
	}

	render() {
		return (
			<div className="app-container" ref="app">

				<Header />

				{renderRoutes(this.props.route.routes)}

				<div className="page-bg"></div>

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
