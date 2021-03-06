import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { Button } from "@blueprintjs/core";
import qs from "qs";

import SignupForm from "./signup_form"

class Signup extends Component {
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
			<div>
				<SignupForm
					ref="signupForm"
					enableReinitialize="true"
					loading={this.state.loading}
					onSubmit={this.handleSubmit.bind(this)}
				/>
				<div className="auth-footer-link">
					<span className="auth-footer-link-label">Already have an account?</span>
					<Link to="/auth/login"><Button className="button-white">Login</Button></Link>
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
	component: connect(mapStateToProps, {})(Signup)
}
