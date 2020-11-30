import React, { useState } from "react";
import { FiEdit3, MdDone } from "react-icons/all";
import "./maincontentsection.css";

export default function MainContentSection(props) {
	const [disabled, setDisabled] = useState(true);

	return (
		<div className="section-container">
			<div className="section-heading">
				<h1>{props.heading}</h1>
				<div
					onClick={() => setDisabled((prev) => !prev)}
					className={"btn-edit " + (!disabled ? "not-disabled-button" : "")}
				>
					{disabled ? (
						<>
							<FiEdit3 />
							<span>Edit</span>
						</>
					) : (
						<>
							<MdDone />
							<span>Done</span>
						</>
					)}
				</div>
			</div>
			<div className={"section-children-container " + (!disabled ? "not-disabled-children-container" : "")}>
				{props.isEdit ? props.children(disabled) : props.children}
			</div>
		</div>
	);
}
