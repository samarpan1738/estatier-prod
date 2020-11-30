import React from "react";
import "./inputsection.css";

export default function InputSection({
	label,
	placeholder = "",
	type = "text",
	disabled = false,
	name = "",
	value = "",
	onChange,
	className = "",
}) {
	return (
		<div className={"section-item" + className}>
			<div>{label}</div>
			{type === "textarea" ? (
				<textarea
					className={!value ? "section-item-input-empty " : ""}
					type={type}
					placeholder={placeholder}
					disabled={disabled}
					name={name}
					value={value}
					onChange={onChange}
				/>
			) : (
				<input
					className={!value ? "section-item-input-empty " : ""}
					type={type}
					placeholder={placeholder}
					disabled={disabled}
					name={name}
					value={value}
					onChange={onChange}
				/>
			)}
		</div>
	);
}
