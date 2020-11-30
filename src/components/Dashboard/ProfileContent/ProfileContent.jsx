import React from "react";
import CoverImage from "../CoverImage/CoverImage";
import Image from "../Image/Image";
import ProfileContentSection from "./ProfileContentSection";
import { GoVerified, FaCrown } from "react-icons/all";
import "./profilecontent.css";

export default function ProfileContent() {
	return (
		<div id="dashboard-profile-content">
			<ProfileContentSection>
				<CoverImage className="dashboard-profile-cover" src="https://source.unsplash.com/500x200/?scene">
					<Image className="dashboard-profile-avatar" src="https://source.unsplash.com/100x100/?face" />
				</CoverImage>

				<div className="dashboard-profile-details">
					<div className="left">
						<div className="dashboard-profile-name">Sarthik Garg</div>
						<div className="dashboard-profile-type">AGENT</div>
						<div className="dashboard-profile-extra-container">
							<div className="dashboard-profile-certified dashboard-profile-extra">
								<GoVerified className="dashboard-profile-certified-icon dashboard-profile-extra-icon" />
								<span>Certified</span>
							</div>
							<div className="dashboard-profile-premium dashboard-profile-extra">
								<FaCrown className="dashboard-profile-premium-icon dashboard-profile-extra-icon" />
								<span>Premium</span>
							</div>
						</div>
					</div>
					<div className="right">
						<div className="dashboard-profile-button"></div>
					</div>
				</div>
			</ProfileContentSection>
			<ProfileContentSection>
				<div className="dashboard-profile-show">
					<div className="dashboard-profile-tagline">We know our real estate.</div>
					<div className="dashboard-profile-desc">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo nemo et voluptates. Vero autem quod id
						quaerat fugiat officia sed omnis consequuntur optio, deserunt architecto magnam reiciendis. Quis
						incidunt nesciunt molestiae, et quod maiores cupiditate. Provident nisi iste veritatis temporibus
						odio consectetur officiis quis. Quaerat doloribus accusamus exercitationem quos nam!
					</div>
				</div>
			</ProfileContentSection>
		</div>
	);
}
