import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import classnames from "classnames";
import { Link } from "react-router-dom";
import qs from "qs";

import ForgotPasswordForm from './forgot_password_form'

class ForgotPassword extends Component {
	state = {
		loading: false
	}

	renderHead = () => (
		<Helmet>
			<title>Blade – Login</title>
			<meta property="og:title" content="Login" />
		</Helmet>
	);

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
			<ForgotPasswordForm
					ref="ForgotPasswordForm"
					loading={this.state.loading}
					onSubmit={this.handleSubmit.bind(this)}
				/>
		);
	}
}


function mapStateToProps(state) {
	return {
		router: state.router
	};
}

export default {
	component: connect(mapStateToProps, {})(ForgotPassword)
}
