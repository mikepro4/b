import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import classnames from "classnames";
import { Link } from "react-router-dom";
import qs from "qs";
import { renderRoutes } from "react-router-config";

import Logo from "../../components/svg/logo"

class Auth extends Component {
	state = {
		loading: false
	}

	handleSubmit = values => {
		console.log(values);

		// Fake loading
		this.setState({
			loading: true
		})

		setTimeout(() => {
			this.setState({
				loading: false
			})
		}, 2000)
	}

	render() {
		return (
			<div className="route-page route-page-fullscreen route-page-centered">

				<div className="auth-container">

					<div className="auth-logo"><Link to="/"><Logo/></Link></div>

					{renderRoutes(this.props.route.routes)}

				</div>

			</div>
		);
	}
}


function mapStateToProps(state) {
	return {
		router: state.router
	};
}

export default {
	component: connect(mapStateToProps, {})(Auth)
}
