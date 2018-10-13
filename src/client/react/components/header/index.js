import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

class Header extends Component {
	render() {
		return (
			<div className="app-header">
        Header
			</div>
		);
	}
}

function mapStateToProps({ auth }) {
	return {};
}

export default connect(mapStateToProps, {})(withRouter(Header));
