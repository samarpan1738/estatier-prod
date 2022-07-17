import React from "react";
import PostPropertyForm from "../PostProperty/PostPropertyForm";
import { conditions, postEnquiryGroups } from "../../utils/PostProperty/PropertyDataStructure_final";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Divider,
} from "@chakra-ui/react";
// Styles
import styles from "./postEnquiry.module.css";

function PostEnquiry({ isOpen, onOpen, onClose }) {
    return (
        <div className={styles.postEnquiry}>
            <Modal isOpen={isOpen} onClose={onClose} width="100vw">
                <ModalOverlay />
                <ModalContent
                    width="max-content"
                    maxWidth="100vw"
                    minWidth="1260px"
                    maxHeight="95vh"
                    minHeight="95vh"
                    top="-40px"
                >
                    <ModalHeader className={styles.modal_header_post_enq}>Post Enquiry</ModalHeader>
                    <Divider />
                    <ModalCloseButton />
                    <ModalBody width="1260px" overflow="auto">
                        <PostPropertyForm
                            conditions={conditions}
                            groups={postEnquiryGroups}
                            showTooltip={"false"}
                            isPostEnquiry={"true"}
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
}

export default PostEnquiry;
