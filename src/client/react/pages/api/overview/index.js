import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

class Overview extends Component {
	render() {
		return (
			<div className="page-content">
        Overview content
			</div>
		);
	}
}


function mapStateToProps() {
	return {};
}

export default {
	component: withRouter(
		connect(mapStateToProps, {})(Overview)
	)
}
