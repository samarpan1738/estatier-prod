import React from "react";
import { selectUser, loginUser } from "./userSlice";
import "../../components/AuthModal/AuthModal";
import AuthModal from "../../components/AuthModal/AuthModal";

function User() {
	// TODO: Setup AuthModal here.

	return (
		<div>
			<AuthModal />;
		</div>
	);
}

export default User;
