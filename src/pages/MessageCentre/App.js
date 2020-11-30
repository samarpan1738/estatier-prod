import "./App.css";
import Provider from "./context/LocationContext";
import ContactsContainer from "./components/ContactsContainer/ContactsContainer";
import ConversationContainer from "./components/ConversationContainer/ConversationContainer";
import Navbar from "./components/Navbar/Navbar";

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
