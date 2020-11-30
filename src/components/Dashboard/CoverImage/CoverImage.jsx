import React, { useEffect, useRef, useState } from "react";
import PlaceholderImage from "./cover-placeholder.svg";
import "./coverimage.css";

export default function CoverImage({ src = "", className = "", style = {}, children = "" }) {
	const [backsrc, setSrc] = useState(PlaceholderImage);
	const image = useRef();

	useEffect(() => {
		image.current = new Image();
		image.current.src = src;
		image.current.onload = () => {
			setSrc(src);
		};
	}, [src]);

	return (
		<div className={"qwerty-cover-image " + className} style={{ backgroundImage: `url(${backsrc})`, ...style }}>
			{children}
		</div>
	);
}
