import "./index.css";
import ContactsContainer from "../../components/MessageCentre/ContactsContainer";
import ConversationContainer from "../../components/MessageCentre/ConversationContainer/ConversationContainer";
import Navbar from "../../components/General/Navbar_2/Navbar";

function MessageCentre() {
	return (
		<div className="message-centre-page">
			<Navbar />
			<div id="message-centre">
				<ContactsContainer />
				<ConversationContainer />
			</div>
		</div>
	);
}

export default MessageCentre;
