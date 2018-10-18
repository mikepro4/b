import React, { Component } from "react";
import { Field, reduxForm, formValueSelector } from "redux-form";
import classnames from "classnames";
import { Form } from "redux-form";
import { connect } from "react-redux";

import { Button, Intent } from "@blueprintjs/core";

import Input from "../../../components/common/form/Input";
import Checkbox from "../../../components/common/form/Checkbox";


class LoginForm extends Component {
	render() {
		const { handleSubmit } = this.props;

		return (
			<Form onSubmit={handleSubmit} autoComplete="off">
        <Field
          name="login"
          component={Input}
          placeholder="Username or email"
          ref="login"
        />

        <Field
          name="password"
          component={Input}
          placeholder="Password"
          ref="password"
        />

				<div className="login-form-footer">
					<div className="login-form-signed-in-toggle">
						<Field
							name="keepSignedIn"
							component={Checkbox}
							label="Keep me signed in"
							ref="keepSignedIn"
						/>
					</div>

					<div className="login-form-forgot-password">
						Forgot password?
					</div>
				</div>

        <Button
					disabled={this.props.pristine}
					type="submit"
					text="Login"
          large="true"
				/>
			</Form>
		);
	}
}

const validate = values => {
	const errors = {};

	if (!values.login) {
		errors.login = "login name is required";
	}

  if (!values.password) {
		errors.password = "password is required";
	}

	return errors;
};

LoginForm = reduxForm({
	form: "login",
	validate
})(LoginForm);

const selector = formValueSelector("login"); // <-- same as form name

LoginForm = connect(state => {
	return {
	};
})(LoginForm);

export default LoginForm;
