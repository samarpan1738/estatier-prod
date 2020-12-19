import React, { useEffect } from "react";
import "./loginForm.css";

import { Formik, Form } from "formik";
import * as Yup from "yup";
// import googleIcon from "../../../img/google-icon.ico";

import FormikControl from "../FormikControl/FormikControl";
import { Button, Stack, useToast } from "@chakra-ui/react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { loginUser, selectUserId } from "../../../features/user/userSlice";

import useQuery from "../../../Hooks/useQuery";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { LOGIN_QUERY, GET_USER_DETAILS_QUERY } from "../../../queries";

function LoginForm() {
	const toast = useToast();
	const dispatch = useDispatch();
	const userID = useSelector(selectUserId, shallowEqual);
	const [
		{ fetching: login_fetching, error: login_error, data: login_data },
		executeLoginQuery,
	] = useQuery(LOGIN_QUERY);
	const [
		{ fetching: ud_fetching, error: ud_error, data: ud_data },
		executeGetUserDetailsQuery,
	] = useQuery(GET_USER_DETAILS_QUERY);
	console.log(ud_fetching);
	console.log(ud_data);
	console.log(ud_error);
	useEffect(() => {
		if (login_data) {
			let userData = login_data.login;
			executeGetUserDetailsQuery({
				data: { _id: login_data.login.userID },
				requestHeaders: {
					authorization: `Bearer ${userData.token}`,
				},
			})
				.then((resp) => {
					userData = { ...userData, ...resp.getUserDetails, isLoggedIn: true };
					dispatch(loginUser(userData));
				})
				.catch((err) => {
					console.log(err);
					toast({
						title: "Error during fetching user details",
						description: err,
						status: "error",
						duration: 5000,
						isClosable: true,
					});
				});
		}
	}, [login_data]);

	const schema = Yup.object({
		email: Yup.string().email("Invalid Email").required(),
		password: Yup.string().min(8, "Minimum 8 characters").required(),
	});

	return (
		<Formik
			validationSchema={schema}
			onSubmit={(values) => {
				executeLoginQuery({ data: values })
					.then(() => {
						toast({
							title: "Logged In.",
							status: "success",
							duration: 5000,
							isClosable: true,
						});
						// executeGetUserDetailsQuery({
						// 	data: { _id: login_data.login.userID },
						// 	requestHeaders: {
						// 		authorization: `Bearer ${login_data.login.token}`,
						// 	},
						// });
						// .then(() => {
						// 	toast({
						// 		title: "User details fetched.",
						// 		status: "success",
						// 		duration: 5000,
						// 		isClosable: true,
						// 	});
						// })
						// .catch(() => {
						// 	toast({
						// 		title: "Error in fetching user details.",
						// 		description: ud_error,
						// 		status: "error",
						// 		duration: 5000,
						// 		isClosable: true,
						// 	});
						// });
					})
					.catch(() => {
						toast({
							title: "Error in login",
							description: ud_error,
							status: "error",
							duration: 5000,
							isClosable: true,
						});
					});
			}}
			initialValues={{
				email: "",
				password: "",
			}}
		>
			{({
				handleSubmit,
				handleChange,
				handleBlur,
				values,
				touched,
				isValid,
				isValidating,
				errors,
			}) => (
				<Form onSubmit={handleSubmit} className="auth-form">
					<FormikControl
						type="email"
						control="input"
						label="Email or Phone Number"
						name="email"
					/>
					<FormikControl
						type="password"
						control="input"
						label="Password"
						name="password"
					/>

					{/* {error && <div className="error">{error.message}</div>}
					<button
						type="submit"
						disabled={!isValid || isValidating || fetching}
						className="auth-submit-button"
					>
						{fetching ? <Spinner size="md" /> : "Log In"}
					</button>
					<div className="more-options-header">
						<div className="line"></div>
						<div className="more-options-header-text">or sign up with</div>
						<div className="line"></div>
					</div>
					<div>
						<button className="google-auth">
							<img src={googleIcon} alt="" />
							<span className="icon-text">Google</span>
						</button>
					</div> */}
					<Button
						isLoading={login_fetching || isValidating}
						disabled={!isValid || login_fetching || isValidating}
						colorScheme="blue"
						bgColor="#007bff"
						width="100%"
						type="submit"
						marginBottom="15px"
						marginTop="20px"
					>
						Sign In
					</Button>
					<div className="more-options-header">
						<div className="line"></div>
						<div className="more-options-header-text">or sign up with</div>
						<div className="line"></div>
					</div>
					<Stack>
						<Button colorScheme="green" leftIcon={<FaGoogle />}>
							Google
						</Button>

						<Button colorScheme="facebook" leftIcon={<FaFacebook />}>
							Facebook
						</Button>
					</Stack>
				</Form>
			)}
		</Formik>
	);
}

export default LoginForm;
