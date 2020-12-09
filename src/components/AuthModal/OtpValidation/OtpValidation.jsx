import React, { useEffect, useRef, useState } from "react";
import firebase from "../../../utils/firebase";
import OtpInput from "react-otp-input";
import "./otpValidation.css";
import {
	Button,
	Heading,
	HStack,
	PinInput,
	PinInputField,
	Text,
	useToast,
	VStack,
} from "@chakra-ui/react";

function OtpValidation({ mobileNo }) {
	const toast = useToast();
	const [label, setLabel] = useState(null);
	const [otp, setOtp] = useState("");
	const [verified, setVerified] = useState(false);
	const recaptchaRef = useRef(null);
	let signInPromiseRef = useRef(null);
	const sendCode = () => {
		console.log("Send Code");
		if (mobileNo === null) return;
		let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
		recaptchaRef.current.innerHTML = "";
		signInPromiseRef.current = firebase
			.auth()
			.signInWithPhoneNumber("+91" + mobileNo, recaptcha);
	};
	const runCheck = () => {
		signInPromiseRef.current
			.then((res) => {
				res.confirm(otp).then((res) => {
					console.log("User => ", res.user);
					toast({
						title: "Phone Number Verified.",
						description: "We've created your account for you.",
						status: "success",
						duration: 5000,
						isClosable: true,
					});
					setVerified(true);
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
	useEffect(() => {
		sendCode();
	}, [mobileNo]);
	const handleChange = (e) => setOtp(e);
	return (
		<div className="verify-otp-container">
			<VStack>
				<Heading fontSize="20px">Verify your Phone Number</Heading>
				<Text>Enter the 6-digit code we sent to {"+91" + mobileNo}</Text>
			</VStack>
			{/* <div className="otp-input-container">
				<OtpInput
					value={otp}
					onChange={handleChange}
					numInputs={6}
					separator={<span> </span>}
					className="otp-input"
				/>
			</div> */}
			<HStack marginTop="15px" marginBottom="15px">
				<PinInput value={otp} onChange={handleChange}>
					<PinInputField />
					<PinInputField />
					<PinInputField />
					<PinInputField />
					<PinInputField />
					<PinInputField />
				</PinInput>
			</HStack>
			<div id="recaptcha" ref={recaptchaRef}></div>
			{!verified && (
				<div className="button-container">
					<Button
						colorScheme="blue"
						bgColor="#007bff"
						color="white"
						onClick={runCheck}
					>
						Verify
					</Button>
					<Button onClick={sendCode}>Request New</Button>
				</div>
			)}
			{verified && <Button colorScheme="green">Verified</Button>}
		</div>
	);
}

export default OtpValidation;
