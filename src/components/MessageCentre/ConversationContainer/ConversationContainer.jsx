import React, { useState } from "react";
import useSocket from "../../../Hooks/useSocket";
import SendIcon from "@material-ui/icons/Send";
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete";
import BlockIcon from "@material-ui/icons/Block";
import "./conversation.css";
import MessageItem from "./MessageItem";

export default function ConversationContainer() {
	const { messages, sendMessage } = useSocket();
	const [message, setMessage] = useState("");
	const [close, setClose] = useState(false);

	const handleSend = () => {
		sendMessage(message);
		setMessage("");
	};

	return (
		<div id="conversation-container">
			<div id="conversation-details">
				<div
					className="conversation-icon close-icon"
					data-content="Close the conversation"
				>
					<CloseIcon style={{ fontSize: 32 }} />
				</div>
				<div>
					<div id="conversation-contact-name">Sarthik Garg</div>
					<div id="conversation-contact-property">Karnvati Apartments</div>
				</div>
				<div id="conversation-contact-buttons">
					<div className="conversation-icon" data-content="Block the User">
						<BlockIcon style={{ fontSize: 32 }} />
					</div>
					<div
						className="conversation-icon"
						data-content="Delete this Conversation"
					>
						<DeleteIcon style={{ fontSize: 32 }} />
					</div>
				</div>
			</div>
			<div id="conversation-message-container">
				<MessageItem
					type="sender"
					message="Hey there, I'm interested in buying your property"
					time="11:30 PM"
				/>
				<MessageItem
					type="receiver"
					message="Good to know, please share your information."
					time="12:30 PM"
				/>
				<MessageItem
					type="sender"
					message="Hey there, I'm interested in buying your property"
					time="11:30 PM"
				/>
				<MessageItem
					type="receiver"
					message="Good to know, please share your information."
					time="12:30 PM"
				/>
				<MessageItem
					type="sender"
					message="Hey there, I'm interested in buying your property"
					time="11:30 PM"
				/>
				<MessageItem
					type="receiver"
					message="Good to know, please share your information."
					time="12:30 PM"
				/>
				<MessageItem
					type="sender"
					message="Hey there, I'm interested in buying your property"
					time="11:30 PM"
				/>
				<MessageItem
					type="receiver"
					message="Good to know, please share your information."
					time="12:30 PM"
				/>
				<MessageItem
					type="sender"
					message="Hey there, I'm interested in buying your property"
					time="11:30 PM"
				/>
				<MessageItem
					type="receiver"
					message="Good to know, please share your information."
					time="12:30 PM"
				/>
				<MessageItem
					type="sender"
					message="Hey there, I'm interested in buying your property"
					time="11:30 PM"
				/>
				<MessageItem
					type="receiver"
					message="Good to know, please share your information."
					time="12:30 PM"
				/>
				<MessageItem
					type="sender"
					message="Hey there, I'm interested in buying your property"
					time="11:30 PM"
				/>
				<MessageItem
					type="receiver"
					message="Good to know, please share your information."
					time="12:30 PM"
				/>
				<MessageItem type="sender" message="Hey there." time="11:30 PM" />
				<MessageItem
					type="receiver"
					message="Good to know, please share your information."
					time="12:30 PM"
				/>
			</div>
			<div id="conversation-input-container">
				<input
					type="text"
					name="msg"
					id=""
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					placeholder="Enter a message"
				/>
				<button onClick={handleSend}>
					<SendIcon />
				</button>
			</div>
		</div>
	);
}
