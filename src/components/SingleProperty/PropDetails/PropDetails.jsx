import React, { useState } from "react";

// Components
import Lightbox from "react-image-lightbox";
import ContactSection from "../ContactSection/ContactSection";
import InfoBlock from "../InfoBlock/InfoBlock";
import PropInfoCol from "../PropInfoCol/PropInfoCol";

// Styles
import "react-image-lightbox/style.css";
import "./propDetails.css";
import TagsWrap from "../TagsWrap/TagsWrap";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
function PropDetails({ src }) {
	const [toggleLightbox, setToggleLightbox] = useState(false);
	const [photoIndex, setPhotoIndex] = useState(0);
	const images = [
		"//placekitten.com/1500/500",
		"//placekitten.com/4000/3000",
		"//placekitten.com/800/1200",
		"//placekitten.com/1500/1500",
	];
	const data = [
		{
			title: "Rental Value",
			value: "₹ 35,000",
		},
		{
			title: "Booking Amount",
			value: "₹ 70,000",
		},
		{
			title: "Facilities",
			value:
				"Power Back Up, Lift, Reserved Parking, Air Conditioned, Visitor Parking, Cafeteria/Food Court, Conference Room",
		},
		{
			title: "Furnishing",
			value: "Furnished",
		},
		{
			title: "Address",
			value: "Ansal Plaza Vaishali, Sector 1 Vaishali, Ghaziabad, Delhi NCR",
		},
		{
			title: "Age of Construction",
			value: "Less than 5 years",
		},
		{
			title: "Road Facing",
			value: "Yes",
		},
		{
			title: "Landmarks",
			value: "Vaishali Metro station",
		},
	];
	const propInfo = [
		{ title: "Built Up area", value: "880 sqft" },
		{ title: "Super Built Up area", value: "770 - 880 sqft" },
		{ title: "Carpet area", value: "770 - 880 sqft" },
		{ title: "Area", value: "500 sqft" },
		{ title: "Area", value: "500 acres" },
		{ title: "Area", value: "500 - 600 sqft" },
		{ title: "Constructed Area", value: "500 sqft" },
		{ title: "Constructed Area", value: "770 - 880 sqft" },
		{ title: "Floor Area", value: "770 sqft" },
		{ title: "Floor Area", value: "770 - 880 sqft" },
		{ title: "Total Area", value: "770 sqft" },
		{ title: "Road facing", value: "Yes" },
		{ title: "Single Sharing Rooms", value: "2" },
		{ title: "Twin/more Sharing Rooms", value: "2" },
		{ title: "BHK", value: "2" },
		{ title: "Bath", value: "2" },
		{ title: "Number of units", value: "10" },
		{ title: "Parking", value: "2" },
		{ title: "Age", value: "2 yrs" },
	];
	return (
		<>
			{toggleLightbox && (
				<Lightbox
					mainSrc={images[photoIndex]}
					nextSrc={images[(photoIndex + 1) % images.length]}
					prevSrc={images[(photoIndex + images.length - 1) % images.length]}
					onCloseRequest={() => setToggleLightbox(false)}
					onMovePrevRequest={() =>
						setPhotoIndex(
							(photoIndex) => (photoIndex + images.length - 1) % images.length
						)
					}
					onMoveNextRequest={() =>
						setPhotoIndex((photoIndex) => (photoIndex + 1) % images.length)
					}
				/>
			)}
			<div className="prop-overview">
				<div className="prop-overview-left">
					<div
						className="prop-image-block"
						onClick={() => setToggleLightbox((curr) => !curr)}
					>
						<img src={src} alt="Property Image" />
						<p className="pic-count">2 photos</p>
						<p className="transaction-type">For Rent</p>
					</div>
					<div className="thumbnails-wrap">
						<div className="thumbnail">
							<img src="https://bit.ly/36fIMXv" alt="" />
						</div>
						<div className="thumbnail">
							<img src="https://bit.ly/36fIMXv" alt="" />
						</div>
						<div className="thumbnail">
							<img src="https://bit.ly/36fIMXv" alt="" />
						</div>
						<div className="thumbnail">
							<img src="https://bit.ly/36fIMXv" alt="" />
						</div>
						<div className="thumbnail">
							<img src="https://bit.ly/36fIMXv" alt="" />
						</div>
						<div className="thumbnail">
							<img src="https://bit.ly/36fIMXv" alt="" />
						</div>
						<div className="thumbnail">
							<img src="https://bit.ly/36fIMXv" alt="" />
							<div
								className="see-more-btn"
								onClick={() => setToggleLightbox((curr) => !curr)}
							>
								<AiOutlineAppstoreAdd />
							</div>
						</div>
					</div>
				</div>
				<div className="prop-overview-right">
					<div className="prop-info-block">
						{propInfo.map(({ title, value }) => (
							<PropInfoCol title={title} value={value} />
						))}
					</div>
					<ContactSection />
				</div>
				<TagsWrap />
			</div>

			<InfoBlock className="prop-desc" heading="Description">
				<h3 className="block-heading">Description</h3>
				<div className="block-content">
					<p className="block-desc">
						Neat and Clean Corporate Suite in Ansal Plaza . Ansal HQ is also in
						same Building . Office is fully furnished and is ready to move{" "}
					</p>
					<div className="info-rows">
						{data.map(({ value, title }) => (
							<div>
								<div className="info-row">
									<div className="info-row-title">{title}</div>
									<div className="info-row-value">{value}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</InfoBlock>
		</>
	);
}

export default PropDetails;
