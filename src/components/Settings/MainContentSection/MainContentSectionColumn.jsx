import React from "react";

export default function MainContentSectionColumn({ children = "", className = "" }) {
	return <div className={"section-children-column " + className}>{children}</div>;
}
