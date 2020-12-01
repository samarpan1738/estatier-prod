import "./App.css";
import Provider from "../../components/context/LocationContext";
import ContactsContainer from "../../components/MessageCentre/ContactsContainer/ContactsContainer";
import ConversationContainer from "../../components/MessageCentre/ConversationContainer/ConversationContainer";
import Navbar from "../../components/General/Navbar/Navbar";

function App() {
	return (
		<Provider>
			<div className="App">
				<Navbar />
				<div id="message-centre">
					<ContactsContainer />
					<ConversationContainer />
				</div>
			</div>
		</Provider>
	);
}

export default App;
