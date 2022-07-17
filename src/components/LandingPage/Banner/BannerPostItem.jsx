import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import PostEnquiryModal from "../../PostEnquiryModal/PostEnquiryModal";

export default function BannerPostItem({ Icon, type, openEnquiryModal }) {
    let navigate = useNavigate();
    return (
        <div className="banner-post-item">
            <div className="top-layer">
                <Icon className={"banner-post-icon"} />
                {type}
            </div>
            <div className="bottom-layer">
                <div className="banner-post-button-type" onClick={() => navigate("/post-prop")}>
                    Post
                </div>

                <div className="banner-post-button-type" onClick={openEnquiryModal}>
                    Enquiry
                </div>
            </div>
        </div>
    );
}
