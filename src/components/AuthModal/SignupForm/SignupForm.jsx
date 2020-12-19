import React, { useEffect, useRef, useState } from "react";

// Components
import {
	// * Actions
	loginUser,
	// * Selectors
	selectUser,
} from "../../../features/user/userSlice";

import { gql } from "graphql-request";
import { Formik, Form } from "formik";
import FormikControl from "../FormikControl/FormikControl";
import * as Yup from "yup";

// Extras
import googleIcon from "../../../img/google-icon.ico";
import "./signupForm.css";
import { useDispatch, useSelector } from "react-redux";
import { Button, Spinner, Stack, useToast } from "@chakra-ui/react";
import useQuery from "../../../Hooks/useQuery";
import OtpValidation from "../OtpValidation/OtpValidation";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { SIGNUP_MUTATION } from "../../../queries";

function SignupForm() {
	const dispatch = useDispatch();
	const toast = useToast();
	const [{ fetching, error, data }, executeQuery] = useQuery(SIGNUP_MUTATION);
	const [switchUI, setSwitchUI] = useState(true);
	const mobileNoRef = useRef("");
	useEffect(() => {
		if (data) dispatch(loginUser(data.login));
	}, [data]);
	const schema = Yup.object({
		name: Yup.string(),
		email: Yup.string().email("Invalid Email").required("Required"),
		password: Yup.string().min(8, "Minimum 8 characters").required("Required"),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref("password"), ""], "Passwords must match")
			.required("Required"),
		mobileNo: Yup.string()
			.required("Required")
			.max(10, "Max 10 digits allowed")
			.matches("^[6-9][0-9]{9}$", { message: "Enter a valid phone number" }),
	});

	return (
		<>
			{switchUI && (
				<Formik
					validationSchema={schema}
					onSubmit={(values) => {
						let { name, email, password, mobileNo } = values;

						// TODO: Fix mobile no. NULL issue
						executeQuery({ data: { name, email, password, mobileNo } })
							.then(() => {
								mobileNoRef.current = mobileNo;
								setSwitchUI(false);
								toast({
									title: "Account created.",
									description: "We've created your account for you.",
									status: "success",
									duration: 5000,
									isClosable: true,
								});
							})
							.catch(() => {
								console.log("Error => ", error);
								toast({
									title: "Error during account creation.",
									description: error,
									status: "error",
									duration: 5000,
									isClosable: true,
								});
							});
						// on successful post , go to otp page
						// Else stay here
					}}
					initialValues={{
						name: "",
						email: "",
						mobileNo: "",
						password: "",
						confirmPassword: "",
					}}
				>
					{({
						handleSubmit,
						handleChange,
						handleBlur,
						values,
						touched,
						isValid,
						errors,
						isValidating,
					}) => (
						<Form onSubmit={handleSubmit} className="auth-form">
							<FormikControl
								type="text"
								control="input"
								label="Full Name"
								name="name"
							/>
							<FormikControl
								type="email"
								control="input"
								label="Email *"
								name="email"
							/>
							<FormikControl
								type="text"
								control="input"
								label="Phone Number *"
								name="mobileNo"
							/>
							<FormikControl
								type="password"
								control="input"
								label="Password *"
								name="password"
							/>
							<FormikControl
								type="password"
								control="input"
								label="Confirm Password *"
								name="confirmPassword"
							/>
							{/* {error && <div className="error">{error}</div>} */}
							{/* <button
								type="submit"
								disabled={!isValid || isValidating || fetching}
								className="auth-submit-button"
							>
								{fetching ? <Spinner size="md" /> : "Sign Up"}
							</button> */}
							<Button
								isLoading={fetching || isValidating}
								disabled={!isValid || fetching || isValidating}
								colorScheme="blue"
								bgColor="#007bff"
								width="100%"
								type="submit"
								marginBottom="15px"
								marginTop="20px"
							>
								Sign Up
							</Button>
							<div className="more-options-header">
								<div className="line"></div>
								<div className="more-options-header-text">or sign up with</div>
								<div className="line"></div>
							</div>
							<Stack>
								{/* <button className="google-auth">
									<img src={googleIcon} alt="" />
									<span className="icon-text">Google</span>
								</button> */}
								<Button colorScheme="green" leftIcon={<FaGoogle />}>
									Google
								</Button>

								<Button colorScheme="facebook" leftIcon={<FaFacebook />}>
									Facebook
								</Button>
								{/* <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
									Twitter
								</Button> */}
							</Stack>
						</Form>
					)}
				</Formik>
			)}
			{!switchUI && <OtpValidation mobileNo={mobileNoRef.current} />}
		</>
	);
}

export default SignupForm;
