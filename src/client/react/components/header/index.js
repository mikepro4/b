import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import MainLinks from "../navigation/main_links/MainLinks"

class Header extends Component {
	render() {
		return (
			<div className="app-header">
        Header
				<MainLinks />
			</div>
		);
	}
}

function mapStateToProps() {
	return {};
}

export default connect(mapStateToProps, {})(withRouter(Header));
