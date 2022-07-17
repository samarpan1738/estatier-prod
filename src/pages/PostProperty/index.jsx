import React from "react";

// Components
import PostPropertyForm from "../../components/PostProperty/PostPropertyForm";
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
            <PostPropertyForm conditions={conditions} groups={postPropertygroups} />
        </div>
    );
}

export default PostProperty;
