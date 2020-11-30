import React, { useState, useEffect } from "react";
import PlaceholderImage from "./user_placeholder.svg";
import "./image.css";

export default function Image({ style = {}, src = PlaceholderImage, text, className = "", children = "" }) {
	const [loaded, setLoaded] = useState(false);
	const [plhText, setPlhText] = useState("");

	useEffect(() => {
		let temp = text.split(" ");
		let plc = "";
		console.log(temp);
		for (let i of temp) {
			if (i) plc += i[0].toUpperCase();
		}
		console.log(plc);
		setPlhText(plc);
	}, [text]);

	return (
		<div className={"qwerty-user-avatar " + className} style={style}>
			{!loaded ? text ? <div>{plhText}</div> : <img src={PlaceholderImage} alt={text} /> : ""}
			<img
				src={src}
				alt={text}
				onError={() => console.log("error in loading image")}
				onLoad={() => {
					console.log("image loaded");
					setLoaded(true);
				}}
				className={!loaded ? "loading-img " : ""}
			/>
			{children}
		</div>
	);
}
