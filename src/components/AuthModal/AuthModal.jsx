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

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./authModal.css";

const AuthModal = () => {
	const [modalStatus, setModalStatus] = useState(false);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [key, setKey] = useState("signup");

	const toggle = () => setModalStatus(!modalStatus);
	return (
		<div>
			<Button color="danger" onClick={onOpen}>
				Login/Signup
			</Button>
			<Modal isOpen={isOpen} onClose={onClose} className="auth-modal">
				<ModalOverlay />
				<ModalContent>
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
		</div>
	);
};

export default AuthModal;
