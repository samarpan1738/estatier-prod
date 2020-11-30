import React, { useEffect, useState } from "react";
import "./loginForm.css";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import googleIcon from "../../../img/google-icon.ico";

import FormikControl from "../FormikControl/FormikControl";
import { Spinner } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import request, { gql } from "graphql-request";
import {
	loginUser,
	selectUser,
	selectUserId,
} from "../../../features/user/userSlice";
import useQuery from "../../../Hooks/useQuery";

const LOGIN_QUERY = gql`
	query Login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			userID
			token
			tokenExpiration
		}
	}
`;

function LoginForm() {
	const dispatch = useDispatch();
	const userId = useSelector(selectUserId);
	const [{ fetching, error, data }, executeQuery] = useQuery(LOGIN_QUERY);
	console.log(data);
	useEffect(() => {
		if (data) dispatch(loginUser(data.createUser));
	}, [data]);

	const schema = Yup.object({
		email: Yup.string().email("Invalid Email").required(),
		password: Yup.string().min(8, "Minimum 8 characters").required(),
	});

	return (
		<Formik
			validationSchema={schema}
			onSubmit={(values) => {
				return executeQuery(values);
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

					{error && <div className="error">{error.message}</div>}
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
					</div>
				</Form>
			)}
		</Formik>
	);
}

export default LoginForm;
