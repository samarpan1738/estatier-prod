import React, { useRef } from "react";

// Components
import FormikStepForm from "../../components/PostProperty/FormikStepForm/FormikStepForm";

// Styles
import "./postProperty.css";

function PostProperty() {
	return (
		<div className="post-property-page">
			<FormikStepForm />
		</div>
	);
}

export default PostProperty;
