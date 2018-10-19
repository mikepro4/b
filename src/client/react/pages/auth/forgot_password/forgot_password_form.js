import React, { Component } from "react";
import { Field, reduxForm, formValueSelector } from "redux-form";
import classnames from "classnames";
import { Form } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Intent, Spinner } from "@blueprintjs/core";

import Input from "../../../components/common/form/Input";

class ForgotPasswordForm extends Component {
	render() {
		const { handleSubmit } = this.props;

		return (
				<div className="auth-form auth-login-form">
					<Form onSubmit={handleSubmit} autoComplete="off">
						<div className="auth-headline transition-element">Reset Password</div>
            <div className="auth-description transition-element">
              We will send you a reset link to your email address
            </div>

						<div className="transition-element">
			        <Field
			          name="email"
			          component={Input}
			          placeholder="Your email address"
			          ref="email"
			        />
						</div>

		        <Button
							disabled={this.props.pristine}
							className="submit-button transition-element"
							loading={this.props.loading}
							type="submit"
							text="Reset password"
		          large="true"
						/>

            <Link to="/auth/login" className="back-to-login-button transition-element">Back to Login</Link>

					</Form>
				</div>
		);
	}
}

const validate = values => {
	const errors = {};

	if (!values.login) {
		errors.login = "Username or email is required";
	}

  if (!values.password) {
		errors.password = "Password is required";
	}

	return errors;
};

ForgotPasswordForm = reduxForm({
	form: "forgot_password",
	validate,
})(ForgotPasswordForm);

ForgotPasswordForm = connect(state => {
	return {
	};
})(ForgotPasswordForm);

export default ForgotPasswordForm;
