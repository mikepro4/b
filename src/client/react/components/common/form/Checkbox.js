import React from "react";
import classnames from "classnames";

const Checkbox = ({
	input,
	label,
	meta: { touched, error }
}) => {
	let containerClassName = classnames({
		"input-checkbox": true,
		"input-valid": touched && !error,
		"input-invalid": touched && error
	});

	return (
		<div className={containerClassName}>
			<label className="blade-checkbox-container">
				<input {...input} checked={input.value} className="blade-checkbox" type="checkbox" />
				<div className="blade-checkbox-control" />
				{label ? <div className="input-label">{label}</div> : ""}
			</label>

			{touched && error ? (
				<div className="input-error">
					{touched && error && <span>{error}</span>}
				</div>
			) : ""}
		</div>
	);
};

export default Checkbox;
