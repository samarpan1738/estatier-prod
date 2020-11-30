import { useRef, useState, useEffect, useCallback } from "react";
import io from "socket.io-client";

export default function useSocket() {
	const [messages, setMessages] = useState([]);
	const socket = useRef({});

	const sendMessage = useCallback(
		(msg) => {
			setMessages((prev) => [...prev, msg]);
			socket.current.emit("new-msg", msg);
		},
		[socket]
	);

	const addMessage = (msg) => {
		setMessages((prev) => [...prev, msg]);
	};

	useEffect(() => {
		socket.current = io();
		console.log("here");

		socket.current.on("connect", () => {
			console.log("Connected to server " + socket.current.id);
		});

		socket.current.on("new-msg", addMessage);

		return () => socket.current.disconnect();
	}, [socket]);

	return { messages, sendMessage };
}
