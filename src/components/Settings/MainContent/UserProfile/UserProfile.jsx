import React, { useRef, useState } from "react";
import MainContentSection from "../../MainContentSection/MainContentSection";
import InputSection from "../../InputSection/InputSection";
import Image from "../../Image/Image";
import "./userprofile.css";
import CoverImage from "../../CoverImage/CoverImage";
import MainContentSectionColumn from "../../MainContentSection/MainContentSectionColumn";
import { FiEdit3 } from "react-icons/all";

export default function UserProfile() {
	const [form, setForm] = useState({
		first_name: "Sarthik",
		last_name: "Garg",
		email: "sarthikgarg01@gmail.com",
		picture: "https://sourc.unsplash.com/100x100/?face",
		cover: "https://source.unsplash.com/500x200/?scene",
		phoneNo: "",
	});

	const avatarRef = useRef();
	const coverRef = useRef();

	const handleOnChange = (e) => {
		console.log(e.target.name, e.target.value, typeof e.target.value);
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleOnFileInput = (e) => {
		console.log(e.target.name, e.target.files);
		var file = e.target.files[0];

		console.log(file);

		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			setForm((prev) => ({ ...prev, [e.target.name]: reader.result }));
		};
		reader.onerror = function (error) {
			console.log("Error: ", error);
		};
	};

	return (
		<div id="user-profile">
			<h1 id="user-profile-heading">User Profile</h1>
			<MainContentSection heading={"Personal Information"} isEdit={true}>
				{(disabled) => (
					<>
						<div className="user-image">
							<CoverImage src={form.cover} className="user-cover">
								<div
									className="user-cover-edit"
									onClick={() => {
										if (coverRef) coverRef.current.click();
									}}
								>
									<FiEdit3 />
									<input
										type="file"
										name="cover"
										accept="image/png, image/jpeg"
										ref={coverRef}
										style={{ display: "none" }}
										onChange={handleOnFileInput}
									/>
								</div>
							</CoverImage>
							<Image src={form.picture} text={form.first_name + " " + form.last_name} className="user-avatar">
								<div
									className="user-avatar-edit"
									onClick={() => {
										if (avatarRef) avatarRef.current.click();
									}}
								>
									<FiEdit3 />
									<input
										type="file"
										name="picture"
										accept="image/png, image/jpeg"
										ref={avatarRef}
										style={{ display: "none" }}
										onChange={handleOnFileInput}
									/>
								</div>
							</Image>
						</div>
						<MainContentSectionColumn>
							<InputSection
								label="First Name"
								placeholder="Enter your First Name"
								name="first_name"
								value={form.first_name}
								onChange={handleOnChange}
								disabled={disabled}
							/>
							<InputSection
								label="Last Name"
								placeholder="Enter your Last Name"
								name="last_name"
								value={form.last_name}
								onChange={handleOnChange}
								disabled={disabled}
							/>
						</MainContentSectionColumn>
						<MainContentSectionColumn>
							<InputSection
								label="Email"
								placeholder="Enter your Email"
								name="email"
								value={form.email}
								onChange={handleOnChange}
								disabled={true}
								type="email"
							/>
							<InputSection
								label="Password"
								placeholder="Enter your Password"
								name="password"
								value={form.password}
								onChange={handleOnChange}
								disabled={disabled}
								type="password"
							/>
						</MainContentSectionColumn>
						<MainContentSectionColumn>
							<InputSection
								label="Phone Number"
								placeholder="Enter your Phone number"
								name="phoneNo"
								type="tel"
								value={form.phoneNo}
								onChange={handleOnChange}
								disabled={disabled}
							/>
							<InputSection
								label="Whatsapp Number"
								placeholder="Enter your Whatsapp number"
								name="whatsappNo"
								type="tel"
								value={form.whatsappNo}
								onChange={handleOnChange}
								disabled={disabled}
							/>
						</MainContentSectionColumn>
					</>
				)}
			</MainContentSection>
			<MainContentSection heading={"About Me"} isEdit={true}>
				{(disabled) => (
					<>
						<InputSection
							label="Description"
							placeholder="Enter your Description"
							name="description"
							type={"textarea"}
							value={form.description}
							onChange={handleOnChange}
							disabled={disabled}
						/>
						<InputSection
							label="Tagline"
							placeholder="Enter your Tagline"
							name="tagline"
							value={form.tagline}
							onChange={handleOnChange}
							disabled={disabled}
						/>
					</>
				)}
			</MainContentSection>
			<MainContentSection heading={"Recovery"} isEdit={true}>
				{(disabled) => (
					<>
						<InputSection
							label="Recovery Email"
							placeholder="Enter your Recovery Email"
							name="recovery_email"
							value={form.recovery_email}
							onChange={handleOnChange}
							disabled={disabled}
						/>
					</>
				)}
			</MainContentSection>
		</div>
	);
}
