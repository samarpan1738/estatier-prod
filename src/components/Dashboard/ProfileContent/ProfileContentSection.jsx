import React from "react";

export default function ProfileContentSection({ children = "", className = "" }) {
	return <div className={"dashboard-profile-content-section " + className}>{children}</div>;
}
