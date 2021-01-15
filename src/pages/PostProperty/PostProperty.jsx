import React from "react";

// Components
import FormikStepForm from "../../components/PostProperty/FormikStepForm/FormikStepForm";
import {
    conditions,
    postPropertygroups,
    postEnquiryGroups,
} from "../../utils/PostProperty/PropertyDataStructure_final";
// Styles
import "./postProperty.css";
import Navbar from "../../components/General/Navbar_2/Navbar";

function PostProperty() {
    return (
        <div className="post-property-page">
            <Navbar />
            <FormikStepForm conditions={conditions} groups={postPropertygroups} />
        </div>
    );
}

export default PostProperty;
