import React, { useRef, useState } from "react";

import SignupForm from "./SignupForm/SignupForm";
import LoginForm from "./LoginForm/LoginForm";

import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Button,
	Modal,
	ModalBody,
	useDisclosure,
	ModalOverlay,
	ModalContent,
	ModalCloseButton,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./authModal.css";
import OtpValidation from "./OtpValidation/OtpValidation";

const AuthModal = () => {
	const [modalStatus, setModalStatus] = useState(false);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [key, setKey] = useState("signup");

	const toggle = () => setModalStatus(!modalStatus);
	return (
		<>
			<Button
				colorScheme="purple"
				onClick={onOpen}
				className="nav-auth-btn"
				bgColor="#340e62"
			>
				Sign in
			</Button>
			<Modal isOpen={isOpen} onClose={onClose} className="auth-modal">
				<ModalOverlay />
				<ModalContent paddingBottom="10px" top="20px">
					<Tabs>
						<TabList>
							<Tab p={4}>Signup</Tab>
							<Tab p={4}>Login</Tab>
							<ModalCloseButton />
						</TabList>
						<TabPanels>
							<TabPanel>
								<SignupForm />
							</TabPanel>
							<TabPanel>
								<LoginForm />
							</TabPanel>
						</TabPanels>
					</Tabs>
				</ModalContent>
			</Modal>
		</>
	);
};

export default AuthModal;
