import React, { useRef } from "react";

// Components
import FormikStepForm from "../../components/PostProperty/FormikStepForm/FormikStepForm";

// Styles
import "./postProperty.css";
import Navbar from "../../components/General/Navbar_2/Navbar";

function PostProperty() {
	return (
		<div className="post-property-page">
			<Navbar />
			<FormikStepForm />
		</div>
	);
}

export default PostProperty;
