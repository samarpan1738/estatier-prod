import React from "react";

// Components
import {
	// * Actions
	loginUser,
	// * Selectors
	selectUser,
} from "../../features/user/userSlice";
import {
	selectGQL,
	setData,
	setError,
	toggleFetching,
} from "../../features/graphql/graphqlSlice";
import { request, gql } from "graphql-request";
import { Formik, Form } from "formik";
import FormikControl from "../FormikControl/FormikControl";
import * as Yup from "yup";

// Extras
import googleIcon from "../img/google-icon.ico";
import "./signupForm.css";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "@chakra-ui/react";

const mutation = gql`
	mutation Register(
		$email: String!
		$password: String!
		$mobileNo: String
		$whatsappNo: String
		$name: String
		$image: String
		$avtaar: String
		$tagline: String
		$about_me: String
		$a_name: String
		$a_image: String
		$a_avtaar: String
		$a_tagline: String
		$a_about_me: String
		$role: String
		$referrer: String
		$club_name: String
		$club_year: String
		$campaign_name: String
		$first_login_method: String
		$is_deleted: String
	) {
		createUser(
			userInput: {
				email: $email
				password: $password
				mobileNo: $mobileNo
				whatsappNo: $whatsappNo
				name: $name
				image: $image
				avtaar: $avtaar
				tagline: $tagline
				about_me: $about_me
				a_name: $a_name
				a_image: $a_image
				a_avtaar: $a_avtaar
				a_tagline: $a_tagline
				a_about_me: $a_about_me
				role: $role
				referrer: $referrer
				club_name: $club_name
				club_year: $club_year
				campaign_name: $campaign_name
				first_login_method: $first_login_method
				is_deleted: $is_deleted
			}
		) {
			_id
			email
			password
			mobileNo
			whatsappNo
			name
			image
			avtaar
			tagline
			about_me
			a_name
			a_image
			a_avtaar
			a_tagline
			a_about_me
			role
			referrer
			club_name
			club_year
			campaign_name
			first_login_method
			is_deleted
			createdAt
			updatedAt
		}
	}
`;

function SignupForm() {
	const dispatch = useDispatch();
	const { fetching, error, data } = useSelector(selectGQL);
	const makeRequest = (data) => {
		dispatch(toggleFetching());
		request("https://estatier.herokuapp.com/graphql", mutation, data)
			.then((data) => {
				dispatch(toggleFetching());
				dispatch(loginUser(data.createUser));
			})
			.catch((err) => {
				dispatch(setError(err.message.split(":")[0]));
			});
	};
	const schema = Yup.object({
		name: Yup.string(),
		email: Yup.string().email("Invalid Email").required(),
		password: Yup.string().min(8, "Minimum 8 characters").required(),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref("password"), ""], "Passwords must match")
			.required("Required"),
	});

	return (
		<>
			<Formik
				validationSchema={schema}
				onSubmit={(values) => {
					let { name, email, password } = values;
					return makeRequest({ name, email, password, mobileNo: "9123457780" });
					// return register({
					// 	name,
					// 	email,
					// 	password,
					// });
				}}
				initialValues={{
					email: "",
					password: "",
					name: "",
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
							label="Email"
							name="email"
						/>
						<FormikControl
							type="password"
							control="input"
							label="Password"
							name="password"
						/>
						<FormikControl
							type="password"
							control="input"
							label="Confirm Password"
							name="confirmPassword"
						/>
						{error && <div className="error">{error}</div>}

						<button
							type="submit"
							disabled={!isValid || isValidating || fetching}
							className="auth-submit-button"
						>
							{fetching ? <Spinner size="md" /> : "Sign Up"}
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
		</>
	);
}

export default SignupForm;
