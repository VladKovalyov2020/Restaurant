import React from "react";

// Modules

import classnames from "classnames";

// Styles

import "./styles.scss";

// ----------------

export const ReactIcon = props => {
	const reactIconClass = classnames({
		"react-icon": true,
		[`react-icon--color-${props.color}`]: props.color,
		[`react-icon--size-${props.size}`]: props.size,
	});

	return (
		<div className={reactIconClass} onClick={props.onClick} id={props.id}>
			{props.children}
		</div>
	);
}
