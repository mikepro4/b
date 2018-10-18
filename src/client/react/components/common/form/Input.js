import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";

class Input extends Component {
  state = {
    inputFocused: false
  };

  onBlur = () => {
    this.setState({
      inputFocused: false
    })
  }

  onFocus = () => {
    this.setState({
      inputFocused: true
    })
  }
	render() {
    let characterCount = this.props.input.value.length

    let containerClassName = classnames({
      "input-group": true,
      "input-large": this.props.large,
      "input-empty": characterCount == 0,
      "input-touched": this.props.touched,
      "input-valid": this.props.touched && !this.props.error,
      "input-invalid": this.props.touched && this.props.error,
      "input-focused": this.state.inputFocused
    });

    let inputClassName = classnames({
      "blade-input": true,
      "blade-intent-success": this.props.touched && !this.props.error,
      "blade-intent-danger": this.props.touched && this.props.error
    });

    let placeholderClassName = classnames({
      "input-placeholder": true,
      "input-placeholder-large": !this.state.inputFocused & characterCount == 0,
      "input-placeholder-small": this.state.inputFocused || characterCount > 0,
    })

		return (
      <div className={containerClassName}>
        {this.props.icon ? <span className={`pt-icon pt-icon-${this.props.icon}`} /> : ""}

        <div className={placeholderClassName}>
          {this.props.placeholder}
        </div>

        <input
          {...this.props.input}
          className={inputClassName}
          type={this.props.type}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />

        {this.props.meta.touched && this.props.meta.error ? (
          <div className="input-error">
            {this.props.metatouched && this.props.meta.error && <span>{this.props.meta.error}</span>}
          </div>
        ) : (
          ""
        )}

        {this.props.metatouched && !this.props.meta.error ? (
          <div className="input-valid">
            <span className="pt-icon pt-icon-small-tick" />
          </div>
        ) : (
          ""
        )}
      </div>
		);
	}
}

function mapStateToProps(state) {
	return {
	};
}

export default connect(mapStateToProps, {})(Input);
