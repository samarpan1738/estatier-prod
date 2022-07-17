import "./index.css";
import DashboardContent from "./components/DashboardContent/DashboardContent";
import Sidebar from "./components/DashboardSidebar/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
	return (
		<div className="App">
			<Router>
				<Sidebar />
				<DashboardContent />
			</Router>
		</div>
	);
}

export default App;
