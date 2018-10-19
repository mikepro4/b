import React, { Component } from "react";
import { Field, reduxForm, formValueSelector } from "redux-form";
import classnames from "classnames";
import { Form } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Intent, Spinner } from "@blueprintjs/core";

import Input from "../../../components/common/form/Input";
import Checkbox from "../../../components/common/form/Checkbox";
import Select from "../../../components/common/form/Select";


class LoginForm extends Component {
	render() {
		const { handleSubmit } = this.props;

		return (
				<div className="auth-form auth-login-form">
					<Form onSubmit={handleSubmit} autoComplete="off">
						<div className="auth-headline transition-element">Signup</div>

						<div className="transition-element">
			        <Field
			          name="username"
			          component={Input}
			          placeholder="Username"
			          ref="usernam"
			        />
						</div>

            <div className="transition-element">
			        <Field
			          name="email"
			          component={Input}
			          placeholder="Email address"
			          ref="email"
			        />
						</div>

						<div className="transition-element">
			        <Field
			          name="password"
			          component={Input}
			          placeholder="Password"
			          ref="password"
								type="password"
			        />
						</div>

            <div className="transition-element">
			        <Field
			          name="country"
			          component={Select}
			          placeholder="Country of residence"
			          ref="country"
								type="password"
			        >
                <option />
                <option key="1" value="us">United States</option>
                <option key="2" value="ru">Russia</option>
              </Field>
						</div>

		        <Button
							disabled={this.props.pristine}
							className="submit-button transition-element"
							loading={this.props.loading}
							type="submit"
							text="Login"
		          large="true"
						/>

						<div className="login-form-footer-text transition-element">
							By signing up, you agree to Blade's <a>Terms of Service</a> and updated <a>Privacy Policy</a>
						</div>
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

LoginForm = reduxForm({
	form: "login",
	initialValues: { keepLoggedIn: true },
	validate,
})(LoginForm);

LoginForm = connect(state => {
	return {
	};
})(LoginForm);

export default LoginForm;
