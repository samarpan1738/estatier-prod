import "./index.css";
import PropPage from "../../components/SingleProperty/PropPage/PropPage";
import Navbar from "../../components/General/Navbar_2/Navbar";
function SinglePropertyPage() {
	return (
		<div className="single-property-page">
			<Navbar isSearchable={true} />
			<PropPage />
		</div>
	);
}

export default SinglePropertyPage;
