import React, { useState } from "react";

function getIntitalWindowWidth() {
	return window.innerWidth;
}

export default function useWidth() {
	const [windowWidth, setWindowWidth] = useState(getIntitalWindowWidth);

	window.addEventListener("resize", () => {
		setWindowWidth(window.innerWidth);
	});

	return windowWidth;
}
