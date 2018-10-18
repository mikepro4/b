import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import Logo from "../../../components/svg/logo"
import LoginForm from './login_form'

class Login extends Component {
	renderHead = () => (
		<Helmet>
			<title>Blade – Login</title>
			<meta property="og:title" content="Login" />
		</Helmet>
	);

	handleSubmit = values => {
		console.log(values)
	}

	render() {
		return (
			<div className="route-page route-page-fullscreen route-page-centered">
				<div className="auth-container">
					<div className="auth-logo"><Logo/></div>
					<div className="auth-headline">Login</div>
					<div className="auth-form auth-login-form">
						<LoginForm
							ref="propertyForm"
							enableReinitialize={true}
							onSubmit={this.handleSubmit.bind(this)}
						/>
					</div>
				</div>
			</div>
		);
	}
}


function mapStateToProps() {
	return {};
}

export default {
	component: connect(mapStateToProps, {})(Login)
}
