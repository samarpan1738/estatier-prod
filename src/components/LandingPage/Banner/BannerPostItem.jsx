import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import PostEnquiry from "../../PostEnquiry/PostEnquiry";

export default function BannerPostItem({ Icon, type }) {
    let history = useHistory();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <div className="banner-post-item">
            <div className="top-layer">
                <Icon className={"banner-post-icon"} />
                {type}
            </div>
            <div className="bottom-layer">
                <div className="banner-post-button-type" onClick={() => history.push("/post-prop")}>
                    Post
                </div>

                <div className="banner-post-button-type" onClick={onOpen}>
                    Enquiry
                </div>
            </div>
            <PostEnquiry isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </div>
    );
}
